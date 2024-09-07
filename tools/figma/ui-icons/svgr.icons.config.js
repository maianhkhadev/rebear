const template = (variables, { tpl }) => {
  return tpl`
${variables.imports};
${variables.interfaces};
const ${
    variables.componentName
  } = ({ size = 20, ...props }: SVGProps<SVGSVGElement> & { size?: number }) => (
  ${variables.jsx}
);
${`

`}
export default ${variables.componentName};
`;
};

module.exports = {
  native: false,
  typescript: true,
  jsxRuntime: 'automatic',
  prettier: true,
  template,
  replaceAttrValues: {
    '#312B78': 'currentColor',
    '#202776': 'currentColor',
  },
  svgProps: {
    width: '{size}',
    height: '{size}',
  },
};
