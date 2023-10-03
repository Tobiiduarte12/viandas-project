export const formatPrice = (price) => {
  return new Intl.NumberFormat("es-ARS", {
    style: "currency",
    currency: "ARS",
  }).format(price);
};
