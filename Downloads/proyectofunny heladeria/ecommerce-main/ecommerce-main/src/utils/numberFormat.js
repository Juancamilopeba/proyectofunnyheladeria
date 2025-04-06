export const numberFormat = (value) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
  }).format(value);
