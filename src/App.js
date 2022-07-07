import React from "react";

import GlobalStyle from "./styles/global";
import Layout from "./components/Layout";
import CustomThemeProvider from "./contexts/ThemeContext";

class App extends React.Component {
  render() {
    return (
      <>
        <CustomThemeProvider>
          <GlobalStyle />
          <Layout />
        </CustomThemeProvider>
      </>
    );
  }
}

export default App;
