import { toast } from "react-toastify";


const getStoredCart = () =>{
    const storedCartStr = localStorage.getItem('read-cart');
    if(storedCartStr){
        const storeCart = JSON.parse(storedCartStr);
        return storeCart;

    }
    else{
        return [];
    }

}

const addToStoredCart =(id) =>{
   const storeCart = getStoredCart();
   if(storeCart.includes(id)){
     toast('This Item is Already Exist.')
   }
   else{
    storeCart.push(id);
    const storedCartStr = JSON.stringify(storeCart);
    localStorage.setItem('read-cart',storedCartStr);
    toast('Added this item to the cart.')
   }

}

export {addToStoredCart, getStoredCart}