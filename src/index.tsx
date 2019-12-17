import React from "react";
import { createRoot } from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import { Global } from "@emotion/core";
import { IntlProvider } from "react-intl";

import App from "./components/App";
import { client } from "./client";
import { globalStyles } from "./globalStyles";

const root = document.querySelector("#app");
const locale = ["de", "en"].includes(navigator.language) ? navigator.language : "en";

if (root) {
  import(/* webpackChunkName: "locale" */ "./lang/" + locale + ".json").then(messages =>
    createRoot(root).render(
      <IntlProvider messages={messages} locale={locale}>
        <ApolloProvider client={client}>
          <App />
          <Global styles={globalStyles} />
        </ApolloProvider>
      </IntlProvider>,
    ),
  );
}
