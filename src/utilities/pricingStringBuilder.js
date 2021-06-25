export default function(product) {
  console.log(product);
  if (product.price === 0) return "Free";

  let term = '';
  if (product.type === 'recurring') {
    term = ` each ${product.cycle}`
  }

  return `£${product.price / 100}${term}`;
}
