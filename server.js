const fs = require("fs");
const express = require("express");
const { mainModule } = require("process");
const app = express();
const mongoose = require("mongoose");
const { stringify } = require("querystring");
require("dotenv").config();
app.use(express.json());
app.use(express.static("client/build"));

const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
});
const Product = mongoose.model("Product", productSchema);

app.get("/api/products", (req, res) => {
  const { title, min, max, category } = req.query;

  // let products = await Product.find({});
  // res.send(products);

  Product.find((err, products) => {
    res.send(products);
  });

  // fs.readFile("./products.json", "utf8", (err, data) => {
  //   if (err) throw err;
  //   let products = JSON.parse(data);
  //   if (title) {
  //     products = products.filter((product) =>
  //       product.title.toLowerCase().includes(title.toLowerCase())
  //     );
  //   }
  //   if (category) {
  //     products = products.filter((product) => product.category === category);
  //   }
  //   if (max) {
  //     products = products.filter((product) => product.price < max);
  //   }
  //   if (min) {
  //     products = products.filter((product) => product.price > min);
  //   }

  // res.send(products);
  // });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  Product.findById(id, (err, products) => {
    res.send(products);
  });
});

app.post("/api/products", (req, res) => {
  const { title, price, description, category, image } = req.body;
  const product = new Product({ title, price, description, category, image });
  product.save((err, todo) => {
    res.send(todo);
  });
});

app.put("/api/products/:id", (req, res) => {
  const { title, price, description, category, image, rating } = req.body;
  const { id } = req.params;
  Product.findByIdAndUpdate(
    id,
    { title, price, description, category, image, rating },
    (err, product) => {
      res.send(product);
    }
  );
});

app.delete("/api/products/:id", (req, res) => {
  const { id } = req.params;
  Product.findByIdAndDelete(id, (err, product) => {
    res.send(product);
  });
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});

const initProducts = () => {
  Product.findOne((err, product) => {
    if (!product) {
      fs.readFile("./products.json", "utf8", (err, data) => {
        const products = JSON.parse(data);
        Product.insertMany(products, (err, todosRes) => {
          // res.send(todosRes);
        });
      });
    }
  });
};
const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;

mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,
  // "mongodb://localhost/products",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    app.listen(process.env.PORT || 5000, () => {
      console.log("err", err);

      console.log("Example app listening on port 5000!");
      initProducts();
    });
  }
);
