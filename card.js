// import { getShoppingCart } from "../utilities/fakedb";

// const cartProductsLoader = async () => {
//     const storedCart = getShoppingCart();
//     const storedCartIds = Object.keys(storedCart)

//     const loadedProducts = await fetch('http://localhost:5000/productByIds',{
//         method: 'POST',
//         headers: {
//             'content-type' : 'application/json'
//         },
//         body: JSON.stringify(storedCartIds)
//     });
//     const products = await loadedProducts.json();

    
   
//     const savedCart = [];

//     for (const id in storedCart) {
//         const addedProduct = products.find(pd => pd._id === id);
//         console.log(storedCart,'stored card');
//         if (addedProduct) {
//             console.log(addedProduct,'before')
            
//             const quantity = storedCart[id];
//             addedProduct.quantity = quantity;
//             savedCart.push(addedProduct);
//             console.log(addedProduct,'after')
//         }
//     }


//     return savedCart;
// }