// import React, { Children, createContext, useEffect, useState } from 'react'

// export  const Productcontext = createContext(null)

// function Productprovider({children }) {
//     const [cartitems,setcartitems] = useState([])

//     const addToCart = product =>{
//         const existing = cartitems.find(items =>items.id == product.id);
//         if(existing){
//             setcartitems(cartitems.map(items=>{
//                 items.id == product.id ? {...items,quatity:items.quatity+1}:items
//         }))
//         }
//         else{
//           setcartitems([...cartitems,{...product,quatity:1}])
//         }
//     }
   

//     const removeitem =(id)=>{
//       setcartitems(item=>item.id != id)
//     }

//     const updateItems =(id,type)=>{
//             setcartitems(cartitems.map(items=>{
//               if(items.id == id){
//                 if(type == "INC") return items.quatity= items.quatity+1;
//                 else if(type == "DEC") return items.quatity= items.quatity-1;
                 
//                 return items;
//               }
            
//             }).filter(cartitems.length >0)
//           )
//     }
 
//   return (
//     <div>
//       <Productcontext.Provider value={{addToCart,cartitems,removeitem,updateItems}}>
//         {Children}
//       </Productcontext.Provider>
//     </div>
//   )
// }

// export default Productprovider


// src/assets/UserContext/ProductContext.jsx
// import React, { createContext, useState } from "react";

// export const ProductContext = createContext();

// export const ProductProvider=({ children })=> {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//      console.log("addToCart called with:", product);
//     const existing = cartItems.find(item => item.id === product.id);
//     if (existing) {
//       setCartItems(
//         cartItems.map(items =>(
//            items.id === product.id ?
//           { ...items, quantity: (items.quantity||1) + 1 }:items
//         ))
//       )
//     } else {
//       setCartItems([...cartItems, { ...product, quantity: 1 }]);
//     }
//   };

//   const removeItem = id => {
//     setCartItems(cartItems.filter(item => item.id !== id));
//   };

//   const updateItems = (id, type) => {
//     console.log("id :",id,"type :",type)
//     setCartItems(cartItems
//       .map(item => {
//           if (item.id === id){
//             const currentQty = item.quantity || 1;
//              if (type === "INC"){ return quantity = currentQty + 1;}
//           if (type === "DEC"){ return quantity = currentQty - 1;}
//           }
          
//           return item;
//         })
//         .filter(cartItems.length > 0)
//     )
    
//   }

//   return (
//     <ProductContext.Provider
//       value={{ addToCart, cartItems, removeItem, updateItems }}
//     >
//       {children}
//     </ProductContext.Provider>
//   );
// }
//export default ProductProvider

import React, { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    console.log("addToCart called with:", product);
    const existing = cartItems.find((item) => item.id === product.id);
    if (existing) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateItems = (id, type) => {
    console.log("id :", id, "type :", type);
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id !== id) return item;
          const currentQty = item.quantity || 1;
          if (type === "INC") return { ...item, quantity: currentQty + 1 };
          if (type === "DEC") return { ...item, quantity: currentQty - 1 };
          return item;
        })
        .filter((item) => (item.quantity || 0) > 0)
    );
  };

  return (
    <ProductContext.Provider
      value={{ addToCart, cartItems, removeItem, updateItems }}
    >
      {children}
    </ProductContext.Provider>
  );
};

