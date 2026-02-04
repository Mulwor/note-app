class ProductFilter {
  filterByColor(products, color) {
    return products.filter(p => p.color === color);
  }

  filterBySize(products, size) {
    return products.filter(p => p.size === size);
  }

  filterByColorAndSize(products, color, size) {
    return products.filter(p => p.color === color && p.size === size);
  }
  // Комбинаций становится всё больше!
  // filterByColorAndSizeAndPrice
  // filterByColorAndPrice
  // и т.д.
}

// ! ===================================================
// ? Good practice ___ Спецификации (критерии фильтрации)
class ColorSpecification {
  constructor(color) {
    this.color = color;
  }

  isSatisfied(item) {
    return item.color === this.color;
  }
}

class SizeSpecification {
  constructor(size) {
    this.size = size;
  }

  isSatisfied(item) {
    return item.size === this.size;
  }
}

class PriceSpecification {
  constructor(minPrice, maxPrice) {
    this.minPrice = minPrice;
    this.maxPrice = maxPrice;
  }

  isSatisfied(item) {
    return item.price >= this.minPrice && item.price <= this.maxPrice;
  }
}

// 2. Комбинатор спецификаций
class AndSpecification {
  constructor(...specs) {
    this.specs = specs;
  }

  isSatisfied(item) {
    return this.specs.every(spec => spec.isSatisfied(item));
  }
}

// 3. Фильтр (не меняется при добавлении новых критериев)
class ProductFilter {
  filter(products, spec) {
    return products.filter(product => spec.isSatisfied(product));
  }
}

// Использование
const products = [
  { name: 'Футболка', color: 'red', size: 'M', price: 500 },
  { name: 'Джинсы', color: 'blue', size: 'L', price: 2000 },
  { name: 'Куртка', color: 'red', size: 'L', price: 3000 }
];

const filter = new ProductFilter();

// Фильтр по цвету
const redSpec = new ColorSpecification('red');
const redProducts = filter.filter(products, redSpec);

// Фильтр по цвету И размеру
const redAndLargeSpec = new AndSpecification(
  new ColorSpecification('red'),
  new SizeSpecification('L')
);
const redLargeProducts = filter.filter(products, redAndLargeSpec);

// Легко добавить новое условие без изменения фильтра
class BrandSpecification {
  constructor(brand) {
    this.brand = brand;
  }

  isSatisfied(item) {
    return item.brand === this.brand;
  }
}