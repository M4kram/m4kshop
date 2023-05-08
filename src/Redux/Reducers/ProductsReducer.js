const initState = {
  products: [
    { id: 1, label: "OMEN by HP", stock: 100, price: 20000 },
    { id: 2, label: "Air Mac", stock: 50, price: 25000 },
  ],
  purchased: [{ id: 1, quantity: 2 }],
};

export default function ProductsReducer(state = initState, action) {
  switch (action.type) {
    case "ADD-PRODUCT":
      const product = state.products.find(
        (p) => p.id === +action.new_product.id
      );
      product.stock -= action.new_product.quantity;

      const exists = state.purchased.find(
        (p) => p.id === +action.new_product.id
      );
      if (exists) {
        exists.quantity += action.new_product.quantity;
        return { ...state };
      } else {
        return {
          ...state,
          purchased: [...state.purchased, action.new_product],
        };
      }

    case "INCREMENT-PRODUCT":
      const stockedProductInc = state.products.find(
        (p) => p.id === action.product
      );

      if (stockedProductInc.stock > 0) {
        state.purchased.find((p) => p.id === action.product).quantity += 1;
        stockedProductInc.stock -= 1;
      }

      return { ...state };

    case "DECREMENT-PRODUCT":
      const stockedProductDec = state.products.find(
        (p) => p.id === action.product
      );
      const purchasedProductDec = state.purchased.find(
        (p) => p.id === action.product
      );

      purchasedProductDec.quantity -= 1;
      stockedProductDec.stock += 1;

      if (purchasedProductDec.quantity === 0) {
        state.purchased.splice(state.purchased.indexOf(purchasedProductDec), 1);
      }
      return { ...state };

    case "DELETE_PRODUCT":
      const productToDelete = state.purchased.find(
        (pu) => pu.id === action.product
      );
      const productToDeleteInStock = state.products.find(
        (p) => p.id === action.product
      );
      productToDeleteInStock.stock += productToDelete.quantity;
      state.purchased.splice(state.purchased.indexOf(productToDelete), 1);

      return { ...state };
    default:
      return state;
  }
}
