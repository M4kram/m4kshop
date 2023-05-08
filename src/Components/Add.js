import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Add.css";
import { ADD_PRODUCT } from "../Redux/Actions/ProductsActions";

function Add() {
  const allProducts = useSelector((data) => data.products);
  const [product, setProduct] = useState("1");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState();
  const [available, setAvailable] = useState();
  const [css, setCss] = useState({});
  const [controlValidator, setControlValidator] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    const avPro = allProducts.find((p) => p.id === +product);
    setPrice(avPro.price);
    setAvailable(avPro.stock);
    // console.log(available);
    // console.log("updated!");
    // console.log(product);
  });

  useEffect(() => {
    if (
      allProducts.find((p) => p.id === +product).stock < quantity ||
      quantity < 0 ||
      quantity === ""
    ) {
      setControlValidator(false);
      if (quantity === "") return;
      setCss({ borderColor: "red", outlineColor: "red" });
    } else {
      setControlValidator(true);
      setCss({ borderColor: "green", outlineColor: "green" });
    }
  }, [quantity]);

  return (
    <div id="add">
      <h1>Add</h1>
      <select
        value={product}
        onChange={(e) => {
          setProduct(e.target.value);
        }}
      >
        {allProducts.map((p) => (
          <option value={p.id} key={p.id}>
            {p.label}
          </option>
        ))}
      </select>
      <input type="text" defaultValue={price} disabled />
      <input type="text" defaultValue={available} disabled />
      <input
        type="number"
        style={css}
        value={quantity}
        onChange={(e) => {
          setQuantity(+e.target.value);
        }}
      />
      <button
        onClick={function () {
          if (controlValidator) {
            setQuantity("");
            dispatch(ADD_PRODUCT({ id: +product, quantity: quantity }));
          }
        }}
      >
        ADD
      </button>
    </div>
  );
}

export default Add;
