import fs from 'fs-extra';
import path from 'path';
import { optimize } from 'svgo';

interface ConvertSvgOptions {
  inputDir: string;
  outputDir: string;
}

function toPascalCase(str: string): string {
  return str
    .replace(/[^a-zA-Z0-9]/g, ' ')
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
}

async function createIndexFile(outputDir: string): Promise<void> {
  try {
    const files = await fs.readdir(outputDir);
    const exportStatements = files
      .filter((file) => file.endsWith('.tsx'))
      .map((file) => {
        const componentName = path.basename(file, '.tsx');
        return `export { default as ${componentName} } from './${componentName}';`;
      });

    const indexPath = path.join(outputDir, 'index.ts');
    await fs.writeFile(indexPath, exportStatements.join('\n'), 'utf8');
    console.log(`Đã tạo file index.ts tại: ${indexPath}`);
  } catch (error) {
    console.error('Đã xảy ra lỗi khi tạo file index.ts:', error);
  }
}

export async function convertSvgToTsx({
  inputDir,
  outputDir,
}: ConvertSvgOptions): Promise<void> {
  try {
    await fs.ensureDir(outputDir);

    const files = await fs.readdir(inputDir);

    for (const file of files) {
      if (path.extname(file).toLowerCase() === '.svg') {
        const filePath = path.join(inputDir, file);
        const svgContent = await fs.readFile(filePath, 'utf8');

        const optimizedSvg = optimize(svgContent, {
          path: filePath,
          plugins: [
            {
              name: 'preset-default',
              params: { overrides: { convertPathData: false } },
            },
          ],
        }).data;

        const baseName = path.basename(file, '.svg');
        const componentName = `Icon${toPascalCase(baseName)}`;
        const fileName = `${componentName}.tsx`;

        const tsxContent = `
          import React, { SVGProps } from 'react';

          const ${componentName} = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            ${optimizedSvg.replace(
              /<svg([^>]*)>/,
              '<svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>'
            )}
          );

          export default ${componentName};
        `.trim();

        const outputFilePath = path.join(outputDir, fileName);
        await fs.writeFile(outputFilePath, tsxContent, 'utf8');

        console.log(`Đã chuyển đổi: ${file} -> ${outputFilePath}`);
      }
    }

    await createIndexFile(outputDir);

    console.log('Chuyển đổi hoàn tất!');
  } catch (error) {
    console.error('Đã xảy ra lỗi:', error);
  }
}
