const calculateSubtotal = (items) => {
  return Object.values(items).reduce((acc, item) => {
    return acc + item.total;
  }, 0)
}

const calculateTax = subtotal => subtotal * .05;

const calculateTotal = (subtotal, tax) => subtotal + tax;

const parseToFixed = num => parseFloat(num).toFixed(2);

export const generateTotals = (items) => {
  const subtotal = calculateSubtotal(items);
  const tax = calculateTax(subtotal);
  const total = calculateTotal(subtotal, tax);

  return {
    subtotal: parseToFixed(subtotal),
    tax: parseToFixed(tax),
    total: parseToFixed(total)
  }
}