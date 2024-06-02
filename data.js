const API_URL = 'https://api.jsonbin.io/v3/b/665c2238ad19ca34f872fe0c'; 

export async function fetchProducts() {
    const response = await fetch(API_URL);
    const products = await response.json();
    return products;
}

export function filterProducts(products, filters) {
    return products.filter(product => {
        let isValid = true;
        if (filters.type) {
            isValid = isValid && product.type === filters.type;
        }
        if (filters.brand) {
            isValid = isValid && product.brand === filters.brand;
        }
        return isValid;
    });
}
