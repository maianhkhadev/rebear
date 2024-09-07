const camelCase = require('camelcase');

const PAGES = {
  UI: '🧬 UI icons',
  Navigation: '🧭 Navigation icons',
  IllustrativeIcon: '🎨 Illustrative icons',
  Flag: '🏳️‍🌈 Flags',
};

const namesToReplace = [
  'Type=',
  'Scale=',
  '1.5x',
  'Filled=',
  'Collapsed=',
  'Direction=',
  'isActive=',
  'State=',
  'Orientation=',
  'Structured=',
  'Tipe=',
  'Usage=',
];
const replaceNamesRegex = new RegExp(namesToReplace.join('|'), 'gi');

const getCleanName = (text) => {
  let cleanName = text.replace(replaceNamesRegex, '');
  cleanName = cleanName.replace('>', 'GreaterThan');
  cleanName = cleanName.replace('<', 'SmallerThan');
  cleanName = cleanName.replace('&', 'And');
  /**
   * remove '=' and capitalize first following character
   */
  cleanName = cleanName.replace(
    /(\w+)=(\w+)/,
    function (match, group1, group2) {
      return group1 + group2.charAt(0).toUpperCase() + group2.slice(1);
    }
  );

  return cleanName;
};

const getDocumentTypeName = (text) => {
  const regex = /document type=(.*?), indicator=(.*)/;
  const [, type, indicator] = text.match(regex);
  return indicator === 'yes' ? type + 'Active' : type;
};

const getIconName = (options) => {
  let iconName = options.basename;

  switch (options?.pageName) {
    case PAGES.UI: {
      const optionsParentName =
        options?.parentName ||
        options?.pathToComponent?.find((item) => item.type === 'COMPONENT_SET')
          ?.name; // E.g UI/Document-type
      const nameInGroup = options.componentName; // E.g document type=pdf, indicator=no

      if (optionsParentName?.includes('UI/')) {
        const componentName = optionsParentName.replace('UI/', '');
        let componentType = getCleanName(nameInGroup);

        if (componentName === 'Document-type') {
          componentType = getDocumentTypeName(nameInGroup);
        }

        iconName = `${componentName} ${componentType}`;
      } else {
        iconName = getCleanName(iconName);
      }

      break;
    }
    case PAGES.Navigation: {
      const optionsParentName =
        options?.parentName ||
        options?.pathToComponent?.find((item) => item.type === 'COMPONENT_SET')
          ?.name; // E.g. Navigation/Accounting
      const nameInGroup = options.componentName; // E.g Scale=1.5x

      const componentName = optionsParentName?.replace('Navigation/', '');
      const componentType = nameInGroup
        ?.replace('Scale=', '')
        .replace('1.5x', '');

      iconName = `Navigation ${componentName} ${componentType}`;

      break;
    }
    case PAGES.IllustrativeIcon: {
      const optionsParentName =
        options?.parentName ||
        options?.pathToComponent?.find((item) => item.type === 'COMPONENT_SET')
          ?.name; // E.g UI/Document-type
      const nameInGroup = options.componentName; // E.g document type=pdf, indicator=no

      if (optionsParentName?.includes('Illustrative/')) {
        const componentName = optionsParentName.replace('Illustrative/', '');
        let componentType = getCleanName(nameInGroup);

        iconName = `Illustrative ${componentName} ${componentType}`;
      } else {
        iconName = `Illustrative ${getCleanName(iconName)}`;
      }

      break;
    }
    case PAGES.Flag: {
      break;
    }
    default: {
      break;
    }
  }

  const camelCaseName = camelCase(iconName, { pascalCase: true });
  const validName = camelCaseName?.replace(/[^a-zA-Z0-9$_]/g, '');

  return `Icon${validName}`;
};

module.exports = {
  getIconName,
  getCleanName,
  PAGES,
};
