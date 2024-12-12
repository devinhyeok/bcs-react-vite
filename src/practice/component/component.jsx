import Box from "./components/Box";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
      <Box
        backgroundColor="pink"
        color="black"
        isRounded={false}
        boxName="Pink"
      />
      <Box
        backgroundColor="green"
        color="white"
        isRounded={true}
        boxName="Green"
      />
      <Box
        backgroundColor="yellow"
        color="blue"
        isRounded={false}
        boxName="Yellow"
      />
    </div>
  );
}

export default App;
