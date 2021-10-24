import { useEffect, useState } from "react";
import Headers from "../components/Headers";
import Cart from "../components/Cart/Cart";
import Toggle from "../components/Toggle";
import Products from "../components/Products/Products";
import "../App.css";
import CartProductsContexts from "../CartProductsContext";
import FilteredProductsContext from "../FilteredProductsContext";
// import Products from "./components/Products/Products";
// import Headers from "./components/Headers";
// import Toggle from "./components/Toggle";
// import Cart from "./components/Cart/Cart";
// import CartProductsContexts from "./CartProductsContext";
// import FilteredProductsContext from "./FilteredProductsContext";
function Home() {
  const [cartProduct, setCartProduct] = useState([]);
  const [myProductList, setMyProductList] = useState([]);
  const [filterByPriceList, setFilterByPriceList] = useState([]);
  const [filterList, setFilterList] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((lst) => {
        return lst.json();
      })
      .then((lst) => {
        setMyProductList(lst);
        setFilterList(lst);
        setFilterByPriceList(lst);
      });
  }, []);

  const categories = myProductList
    .map((p) => p.category)
    .filter((value, index, array) => array.indexOf(value) === index);
  const setFilter = (category) => {
    setFilterList(
      myProductList.filter((item) =>
        category !== "All" ? item.category === category : true
      )
    );
    setFilterByPriceList(
      myProductList.filter((item) =>
        category !== "All" ? item.category === category : true
      )
    );
  };

  return (
    <FilteredProductsContext.Provider
      value={[filterByPriceList, setFilterByPriceList]}
    >
      <CartProductsContexts.Provider value={[cartProduct, setCartProduct]}>
        <Headers
          categories={categories}
          setFilter={setFilter}
          products={myProductList}
          filterList={filterList}
          //prodoctFiltered={filterCoopied}
        />
        <Toggle />

        <Cart />

        <Products productList={filterByPriceList} />
      </CartProductsContexts.Provider>
    </FilteredProductsContext.Provider>
  );
}

export default Home;
