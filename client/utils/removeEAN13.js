import fs from 'fs';

const products = JSON.parse(fs.readFileSync('../data/products.json', 'utf8'));

const newProducts = products.map((product) => {
  product.ean13 = product.ean13.slice(8);
  return product;
});

fs.writeFileSync('../data/newProducts.json', JSON.stringify(newProducts));
