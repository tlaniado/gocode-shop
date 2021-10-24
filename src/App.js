import Home from "./views/Home";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductDetails from "./views/ProductDetails";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/products/:id">
          <ProductDetails />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

// <li>
//   <Link to="/productDetails">ProductDetails</Link>
// </li>
