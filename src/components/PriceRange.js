import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import FilteredProductsContext from "../FilteredProductsContext";

// function valuetext(value) {
//   return `${value}°C`;
// }

function PriceRange({ products, filterList }) {
  const [filterByPriceList, setFilterByPriceList] = React.useContext(
    FilteredProductsContext
  );
  let max = 0;
  let min = 1000;
  products.map((item) =>
    item.price > max
      ? (max = item.price)
      : item.price < min
      ? (min = item.price)
      : {}
  );

  const [value, setValue] = React.useState([max, min]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setFilterByPriceList(
      filterList.filter(
        (item) => item.price > newValue[0] && item.price < newValue[1]
      )
    );
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        max={max}
        min={min}
        //getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        //getAriaValueText={valuetext}
      />
    </Box>
  );
}
export default PriceRange;
