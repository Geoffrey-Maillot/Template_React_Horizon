import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App.tsx";

import "./assets/styles/index.scss";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastProvider } from "@src/components";
import { UserProvider } from "@src/context/libs/contextUser.tsx";
import { NumberProvider } from "@context";
import { queries } from "@storybook/testing-library";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      cacheTime: 0,
    },
  },
});
const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <NumberProvider>
      <UserProvider>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <ToastProvider>
              <App />
            </ToastProvider>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </BrowserRouter>
      </UserProvider>
    </NumberProvider>
  </React.StrictMode>,
);
