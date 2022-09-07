import { ThemeProvider } from "styled-components";
import GlobalStyles from "./globalStyles";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";

const theme = {
  colors: {
    primary: {
      pink: "hsl(322, 100%, 66%)",
      lightPink: "hsl(321, 100%, 78%)",
      lightRed: "hsl(0, 100%, 63%)",
    },

    neutral: {
      textColor: "hsl(192, 100%, 9%)",
      paleBlue: "hsl(207, 100%, 98%)",
    },
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Hero />
    </ThemeProvider>
  );
}
export default App;
