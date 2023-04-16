import ProductCard from "./Components/ProductCard";
import { flashSalesData } from "./data/flashSalesData";
function App() {
  return (
    <>
      {flashSalesData.map((item) => (
        <ProductCard {...item} />
      ))}
    </>
  );
}

export default App;
