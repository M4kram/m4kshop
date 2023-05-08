import React from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import {
  INCREMENT_PRODUCT,
  DECREMENT_PRODUCT,
  DELETE_PRODUCT,
} from "../Redux/Actions/ProductsActions";

function Products() {
  let { products, purchased } = useSelector((data) => data);

  const dispatch = useDispatch();

  return (
    <>
      <div className="clear" />
      <div id="products">
        <h1>Products</h1>
        <table>
          <thead>
            <tr>
              <th>Libelle</th>
              <th>Qte</th>
              <th>Price</th>
              <th>Total</th>
              <th colSpan={3}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {purchased.map((p) => {
              const product = products.find((pro) => pro.id === p.id);
              return (
                <tr key={product.id}>
                  <td>{product.label}</td>
                  <td>{p.quantity}</td>
                  <td>{product.price}</td>
                  <td>{product.price * p.quantity}</td>
                  <td>
                    <button
                      onClick={function () {
                        dispatch(DELETE_PRODUCT(product.id));
                      }}
                    >
                      REMOVE
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={function () {
                        dispatch(INCREMENT_PRODUCT(product.id));
                      }}
                    >
                      INC
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={function () {
                        dispatch(DECREMENT_PRODUCT(product.id));
                      }}
                    >
                      DEC
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Products;
