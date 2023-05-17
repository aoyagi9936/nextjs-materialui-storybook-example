const path = require('path');
const toPath = (filePath) => path.join(process.cwd(), filePath);

const config = {
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@': path.resolve(__dirname, '../src'),
        },
      },
    }
  },
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
      "@storybook/addon-links",
      "@storybook/addon-essentials",
      "@storybook/addon-interactions",
      "@storybook/addon-mdx-gfm",
      "@storybook/addon-styling"
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {}
  },
  features: {
    emotionAlias: false,
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      allowSyntheticDefaultImports: false, // speeds up storybook build time
      esModuleInterop: false, // speeds up storybook build time
      shouldExtractLiteralValuesFromEnum: true, // makes union prop types like variant and size appear as select controls
      shouldRemoveUndefinedFromOptional: true, // makes string and boolean types that can be undefined appear as inputs and switches
      propFilter: (prop) =>
        prop.parent
          ? !/node_modules\/(?!@mui)/.test(prop.parent.fileName)
          : true,
    },
  },
};

export default config;
