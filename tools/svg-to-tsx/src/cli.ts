#!/usr/bin/env node

import { convertSvgToTsx } from './index';
import { program } from 'commander';

program
  .name('svg-to-tsx')
  .description('Chuyển đổi SVG thành TSX React component')
  .requiredOption('-i, --input <inputDir>', 'Thư mục chứa SVG')
  .requiredOption('-o, --output <outputDir>', 'Thư mục lưu TSX')
  .action(async ({ input, output }) => {
    await convertSvgToTsx({ inputDir: input, outputDir: output });
  });

program.parse(process.argv);
