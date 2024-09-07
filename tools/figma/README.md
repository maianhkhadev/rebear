# Exporting icons, flags and illustrations from Figma

In our organization, Figma serves as a key design tool, significantly streamlining our UX design and development process.
Our UX designers leverage Figma's collaborative environment to create, prototype, and fine-tune designs.
We've automated the export of icons and flags from Figma, converting them directly into React components, ensuring a smooth and efficient workflow.
For other illustrations, however, a manual process is used.
These are exported from Figma as SVG files and then optimized using SVGO for efficient rendering and performance.
As developers, understanding this process is crucial for seamless integration of design assets.
For more detailed information about our specific procedures, please refer to the following sections of this readme.

## Generate icons and flags from figma

## Getting started

1. Install dependencies: `yarn`
2. Create a personal access token (<https://www.figma.com/developers/api#authentication>)
3. Download the icons and flags using `FIGMA_TOKEN=xxx npm run figma:export:web`

## How

The icons are first downloaded using [@figma-export/cli](https://github.com/marcomontalbano/figma-export), optimized via [svgo](https://github.com/svg/svgo) and then transformed into React component via [svgr](https://github.com/gregberge/svgr).

## Figma files

The icons and flags are downloaded from figma file with id [ciJPtNBLSl2YXE3oG5JTyB](https://www.figma.com/file/ciJPtNBLSl2YXE3oG5JTyB/DS---Icons?type=design&node-id=0-1&t=fWMJg5h9E49lq61i-0). This is configured in `.figmaexportrc.icons.js` and `.figmaexportrc.flags.js`.
Both config files download SVGs from the same file, but using `onlyFromPages` we specify from which figma pages icons and flags should be downloaded.

## Adding Illustrations as SVG to our code base

### Step1: Exporting Illustrations as SVG from Figma

*Select the Object*: First, select the illustration that you want to export.
If you want to export the entire frame, just click anywhere on the frame to select it.

*Set Export Options*: At the bottom of the right sidebar, you’ll see a section titled "Export." If you don't see this section, make sure you have the right object or frame selected. Click the "+" button to add an export setting. In the dropdown that appears, select "SVG."

*Export the Object*: Once you've added the SVG export setting, click on the "Export" button. This will open a dialog box where you can choose where to save your SVG file.

### Step2: Converting the SVG to a React Component

SVG files exported directly from design tools like Figma can often be quite large and contain a lot of unnecessary data.
We optimize them via [svgo](https://github.com/svg/svgo) and then transformed into React component via [svgr](https://github.com/gregberge/svgr).

We have added a `script` to generate the React Component from the downloaded SVG.

1. Install dependencies: `yarn`
2. Compress the SVG: `yarn convert-svg <path-to-your-file.svg> <path-to-your-react-component.tsx>`

Replace "path-to-your-file.svg" with the full path of your SVG file.
Replace "path-to-your-react-component.tsx" with the full path of the React component you want to generate.

Example:

```bash
yarn convert-svg ~/Downloads/test.svg ../src/screens/common/welcome/TestIllustration.tsx
```
