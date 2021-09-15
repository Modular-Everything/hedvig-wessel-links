const Root = () => {
  return (
    <>
      You can edit your package in:
      <pre>packages/hw/src/index.js</pre>
    </>
  );
};

export default {
  name: "hw",
  roots: {
    hw: Root
  },
  state: {
    hw: {}
  },
  actions: {
    hw: {}
  }
};
