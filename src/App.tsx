import { ProductList } from "./components/ProductList";

function App() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ProductList />
    </div>
  );
}

export default App;
