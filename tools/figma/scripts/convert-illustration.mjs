#!/usr/bin/env node

import { readFile, writeFile } from 'fs/promises';
import { basename } from 'path';

import { transform } from '@svgr/core';
import { optimize } from 'svgo';
import { $, cd } from 'zx';

const generateReactComponent = async () => {
  const argv = process.argv.slice(2);

  if (argv.length !== 2) {
    // eslint-disable-next-line no-console
    console.error('yarn convert-svg <path-to-svg> <path-of-component>');
    process.exit(1);
  }

  const path = argv[0];
  const outputPath = argv[1];
  const componentName = basename(outputPath).split('.')[0];

  const svgString = await readFile(path);

  const result = optimize(svgString, {
    path,
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,
          },
        },
      },
      {
        name: 'removeXMLNS',
        active: true,
      },
    ],
  });
  const optimizedSvgString = result.data;

  const jsCode = await transform(
    optimizedSvgString,
    {
      native: true,
      typescript: true,
      jsxRuntime: 'automatic',
    },
    {
      componentName,
      filePath: outputPath,
    },
  );

  await writeFile(outputPath, jsCode);

  cd('..');
  await $`yarn lint:fix`;
};

generateReactComponent();
