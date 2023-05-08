import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Summary.css";

function Summary() {
  const [nbrProd, setNbrProd] = useState();
  const [totalPrice, setTotalPrice] = useState();

  const products = useSelector((data) => data);

  useEffect(() => {
    let total = 0;
    setNbrProd(products.purchased.length);

    products.purchased.forEach((prod) => {
      const stock = products.products.find((p) => p.id === prod.id);

      total += stock.price * prod.quantity;
    });

    setTotalPrice(total);
  });

  return (
    <div id="summary">
      <h1>Summary</h1>
      <div>
        <p>Number of products</p>
        <p>{nbrProd}</p>
      </div>
      <div>
        <p>Total Price</p>
        <p>{totalPrice}</p>
      </div>
      {/* <div>
        <p>Price</p>
        <p>0</p>
      </div> */}
    </div>
  );
}

export default Summary;
