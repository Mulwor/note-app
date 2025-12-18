class LocalStorageUtil {
  constructor() {
    this.keyName = "products";
  }

  // Получить все продукты, которые находятся в локальном хранилище
  getProducts() {
    const productsLocalStorage = localStorage.getItem(this.keyName);
    if (productsLocalStorage !== null) {
      return JSON.parse(productsLocalStorage);
    }
    return []
  }

  // Добавить новое значение в локальное хранилища
  putProducts(id) {
    // Необходимо проверить что лежит в локальном хранилище
    let products = this.getProducts();
    let pushProduct = false;
    // Есть ли совпадение с продуктами
    const index = products.indexOf(id)
    if (index === -1) {
      products.push(id)
      pushProduct = true;
    } else {
      products.splice(index, 1)
    }

    localStorage.setItem(this.keyName, JSON.stringify(products))

    return {
      pushProduct,
      products
    }
  }
}

const localStorageUtil = new LocalStorageUtil();