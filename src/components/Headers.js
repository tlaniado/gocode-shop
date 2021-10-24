import PriceRange from "./PriceRange";

function Headers({ categories, setFilter, products, filterList }) {
  return (
    <nav className="product-filter">
      <h1>Jackets</h1>
      <div className="sort">
        <div className="collection-sort">
          <label>Filter by:</label>
          <select
            onChange={(e) => {
              setFilter(e.target.value);
            }}
          >
            <option>All</option>

            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </div>

        <div className="collection-sort">
          <label>Sort by:</label>
          <select>
            <option value="/">Featured</option>
            <option value="/">Best Selling</option>
            <option value="/">Alphabetically, A-Z</option>
            <option value="/">Alphabetically, Z-A</option>
            <option value="/">Price, low to high</option>
            <option value="/">Price, high to low</option>
            <option value="/">Date, new to old</option>
            <option value="/">Date, old to new</option>
          </select>
        </div>
      </div>
      <PriceRange products={products} filterList={filterList} />
    </nav>
  );
}
export default Headers;
