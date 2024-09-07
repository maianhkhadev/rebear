require('dotenv').config({ path: './.env.local' });

const { PAGES, getIconName } = require('../helpers/figmaexportrc.helpers');

const fileId = 'LA9uIB8C7Uxw348nZITZJT';
const output =
  '../../libs/shared/web/ui-design-system/src/lib/components/icons/ui-icons';

module.exports = {
  commands: [
    [
      'components',
      {
        fileId,
        onlyFromPages: [PAGES.UI, PAGES.Navigation],
        transformers: [
          require('@figma-export/transform-svg-with-svgo')({
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
              {
                name: 'removeAttrs',
                params: {
                  attrs: '',
                },
              },
            ],
          }),
        ],
        outputters: [
          require('@figma-export/output-components-as-svgr')({
            output,
            getDirname: () => '',
            getFileExtension: () => '.tsx',
            getSvgrConfig: () => require('./svgr.icons.config'),
            getComponentName: getIconName,
            getExportTemplate: (options) => {
              return `export { default as ${getIconName(
                options
              )} } from './${`${getIconName(options)}`}';`;
            },
          }),
        ],
      },
    ],
  ],
};
