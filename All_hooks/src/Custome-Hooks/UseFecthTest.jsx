import { useEffect, useState } from "react";
import Fetch from "./fetch";

const UseFecthTest = () => {
  const [data, loading] = Fetch("https://dummyjson.com/products", {});
  const [filteredProducts, setFilteredProducts] = useState([]);
  // console.log(data, loading);

  useEffect(() => {
    if (data && data.products) {
      const products = data.products.filter((product) => product.price > 50);
      setFilteredProducts(products);
    }
  }, [data]);

  return (
    <div>
      {
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>
              {product.title} - ${product.price}
            </li>
          ))}
        </ul>
      }
    </div>
  );
};

export default UseFecthTest;
