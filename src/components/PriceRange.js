import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import FilteredProductsContext from "../FilteredProductsContext";

// function valuetext(value) {
//   return `${value}°C`;
// }

function PriceRange({ products }) {
  const [filterList, setFilterList] = React.useContext(FilteredProductsContext);
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
    setFilterList(
      products.filter((item) => item.price > value[0] && item.price < value[1])
    );
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        max={1000}
        min={7}
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
