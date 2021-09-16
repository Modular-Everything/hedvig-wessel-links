import GlobalStyle from "./styles/GlobalStyle";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Background from "./components/Background";

// ---

const Root = () => {
  return (
    <>
      <GlobalStyle />

      <Wrapper>
        <Header
          title="Hedvig Wessel"
          bio="I want to promote an active and healthy lifestyle by showing my everyday life as a professional athlete."
        />
      </Wrapper>

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
};
