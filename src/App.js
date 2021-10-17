// import logo from './logo.svg';
import { useEffect, useState } from "react";

import "./App.css";
import Products from "./components/Products/Products";
import Headers from "./components/Headers";
import Toggle from "./components/Toggle";
//import { logDOM } from "@testing-library/dom";
function App() {
  const [myProductList, setMyProductList] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((lst) => {
        return lst.json();
      })
      .then((lst) => {
        setMyProductList(lst);
        setFilterList(lst);
      });
  }, []);
  const [filterList, setFilterList] = useState(myProductList);

  const categories = myProductList
    .map((p) => p.category)
    .filter((value, index, array) => array.indexOf(value) === index);
  const setFilter = (category) => {
    // console.log(category);
    setFilterList(myProductList.filter((item) => item.category === category));
  };

  return (
    <>
      <Headers categories={categories} setFilter={setFilter} />
      <Toggle />

      <Products productList={filterList} />
    </>
  );
}

export default App;
