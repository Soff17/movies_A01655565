import '!style-loader!css-loader!postcss-loader!../src/index.css';
import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    viewport: {
        defaultViewport: "responsive", // Set the default viewport
    },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/i,
        },
    },
},
};

export default preview;
