//import React from "react";
import CartProducts from "../CartProducts/CartProducts";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

function Cart() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Divider />
      <List>
        <CartProducts></CartProducts>
      </List>
    </Box>
  );
  return (
    <div>
      {
        <React.Fragment>
          <Button onClick={toggleDrawer("left", true)}>{"Cart"}</Button>
          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
        </React.Fragment>
      }
    </div>
  );
}
export default Cart;
