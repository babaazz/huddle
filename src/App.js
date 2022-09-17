import { ThemeProvider } from "styled-components";
import GlobalStyles from "./globalStyles";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Section from "./components/section/Section";
import Footer from "./components/footer/Footer";

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
      <Section />
      <Footer />
    </ThemeProvider>
  );
}
export default App;
