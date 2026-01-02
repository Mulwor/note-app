function render() {
  const productsStore = localStorageUtil.getProducts();
  
  headerPage.render(productsStore.length);
  productsPage.render();
}

spinnerPage.render();

let CATALOG = [];

fetch('catalog.json')
  .then(result => result.json())
  .then(body => {
    CATALOG = body;

    setTimeout(() => {
      spinnerPage.handleClear();
      render();
    }, 1000)
  })
  .catch((err) => {
    spinnerPage.handleClear();
    errorPage.render();
  })