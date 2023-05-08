export function ADD_PRODUCT(prod) {
  return {
    type: "ADD-PRODUCT",
    new_product: prod,
  };
}

export function INCREMENT_PRODUCT(id) {
  return {
    type: "INCREMENT-PRODUCT",
    product: id,
  };
}

export function DECREMENT_PRODUCT(id) {
  return {
    type: "DECREMENT-PRODUCT",
    product: id,
  };
}

export function DELETE_PRODUCT(id) {
  return {
    type: "DELETE_PRODUCT",
    product: id,
  };
}
