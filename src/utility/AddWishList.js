import { toast } from "react-toastify";



const getStoredWishCart = () =>{
    const storedWishCartStr = localStorage.getItem('wish-cart');
    if(storedWishCartStr){
        const storeWishCart = JSON.parse(storedWishCartStr);
        return storeWishCart;

    }
    else{
        return [];
    }

}

const addToStoredWishCart =(id) =>{
   const storeWishCart = getStoredWishCart();
   console.log(storeWishCart);
   if(storeWishCart.includes(id)){
     toast('This Item is Already Exist in WishList.')
   }
   else{
    storeWishCart.push(id);
    const storedWishCartStr = JSON.stringify(storeWishCart);
    localStorage.setItem('wish-cart',storedWishCartStr);
    toast('Added this item to the WishList.')
   }

}

export {addToStoredWishCart}