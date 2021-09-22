import link from "@frontity/html2react/processors/link";
import GlobalStyle from "./styles/GlobalStyle";
import Wrapper from "./components/Wrapper";
import Background from "./components/Background";

// ---

const Root = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper />
      <Background />
    </>
  );
};

// ---

export default {
  name: "hw",
  roots: {
    hw: Root,
  },
  state: {
    hw: {},
  },
  actions: {
    hw: {},
  },
  libraries: {
    html2react: {
      processors: [link],
    },
  },
};
