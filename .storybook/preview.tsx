import React from "react";
import type { Preview } from "@storybook/react";
import "../src/assets/styles/index.scss";
import { BrowserRouter } from "react-router-dom";

import { UserProvider } from "../src/context/libs/contextUser";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const preview: Preview = {
  decorators: [
    (Story) => (
      <BrowserRouter>
        <UserProvider>
          <QueryClientProvider client={queryClient}>
            <div className="w-full">
              <Story />
            </div>
          </QueryClientProvider>
        </UserProvider>
      </BrowserRouter>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
