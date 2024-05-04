import Fetch from "./fetch";

const UseFecthTest = () => {
  const [data, loading] = Fetch("https://dummyjson.com/products", {});
  console.log(data, loading);

  //   function filterOutdata(getData) {
  //     const filteredProducts = getData.products.filter(
  //       (product) => product.price > 50
  //     );

  //     console.log(filteredProducts);
  //   }
  return <div>{/* <ul>{filterOutdata(data)}</ul> */}</div>;
};

export default UseFecthTest;
