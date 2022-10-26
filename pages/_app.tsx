import "../styles/globals.scss";

import { Provider } from "react-redux";
import type { AppProps } from "next/app";

import store from "../store";

import { NextPageWithLayout } from "../ui/types/PageWithLayout";
import { DefaultLayout } from "../ui/layouts";
import { appWithTranslation } from "next-i18next";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const { layout = "default" } = Component;

  const App = () => {
    switch (layout) {
      case "default": {
        return (
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
        );
      }
      case "none":
      default: {
        return <Component {...pageProps} />;
      }
    }
  };

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default appWithTranslation(MyApp);
