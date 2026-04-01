// import React, { useContext } from 'react'

// import ProductProvider from '../UserContext/ProductProvider'

// function AddToCarts() {
//     const {cartitems,removeitem,updateItems} = useContext(ProductProvider)

//     console.log("cartitems :",cartitems)

//   return (
//     <div>
//         {cartitems.map(items=>(
//             <div key={items.id}>
                
//                 <p>{items.name}</p>
//                 <p>{items.category}</p>
//                 <p>{items.price}</p>
//                 <p onClick={()=>updateItems(items.id,'INC')}>+</p>
//                 <P>{items.quatity}</P>
//                 <p onClick={()=>updateItems(items.id,'DEC')}>-</p>
//                 <P onClick={()=>removeitem(items.id)}>Remove</P>
//             </div>
//         ))}
      
//     </div>
//   )
// }

// export default AddToCarts

// import React, { useContext } from "react";
// //import { ProductContext } from "../UserContext/ProductProvider";
// //import Layout from "../Header/Layout";
// import { ProductContext } from "../UserContext/ProductProvider";


// function AddToCarts() {
//    const { cartItems, removeItem, updateItems } = useContext(ProductContext);
//  // const { cartitems, removeitem, updateItems } = useContext(ProductContext);

//   const total = cartItems.reduce((acc,item)=>acc+item.price*item.quantity,0)

//   console.log("cartitems in AddToCarts:", cartItems);

//     if (!Array.isArray(cartItems) || cartItems.length === 0) {
//     return <p>No items in cart</p>;
//   }


//   return (
//     <div>
     
//       <div>
//       {cartItems !==null && cartItems.map(items => (
//         <div key={items.id}>
//           <p>{items.name}</p>
//           <p>{items.category}</p>
//           <p>{items.price}</p>
//           <button onClick={() => updateItems(items.id, "INC")}>+</button>
//           <p>{items.quantity}</p>
//           <button onClick={() => updateItems(items.id, "DEC")}>-</button><br />
//           <button onClick={() => removeItem(items.id)}>Remove</button>

          
//         </div>
//       ))}
//       <p>{total}</p>
//       </div>
//     </div>
//   );
// }

// export default AddToCarts;
//tailwindcss only
import React, { useContext, useMemo } from "react";
import { ProductContext } from "../UserContext/ProductProvider";
import { Link } from "react-router-dom";
import Layout from "../Header/Layout";

function AddToCarts() {
  const { cartItems, removeItem, updateItems } = useContext(ProductContext);

  const safeItems = Array.isArray(cartItems) ? cartItems : [];

  const total = useMemo(()=>{
    return safeItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  })

  console.log("cartitems in AddToCarts:", safeItems);

  if (safeItems.length === 0) {
    return <div> <Layout/> <p className="p-6 text-center text-slate-500">No items in cart</p></div>;
  }

  return (
    <div className="min-h-screen flex items-start justify-evenly bg-slate-100 px-4 py-10">
      <Layout/>
      <div className="w-full max-w-3xl rounded-2xl bg-white shadow-lg px-5 py-6">
         <Link to="/" className="text-blue-600 hover:underline mb-6 inline-block">
        ← Back to Products
      </Link>
        {safeItems.map((item) => (
          <div
            key={item.id}
            className="mb-3 flex flex-col gap-3 rounded-xl bg-slate-50 px-3 py-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <img
              src={item.images}
              alt={item.name}
              className="h-16 w-16 rounded-lg object-cover"
            />

            <div className="flex-1 min-w-0">
              <p className="truncate text-sm font-medium text-slate-900">
                {item.name}
              </p>
              <p className="mt-0.5 text-xs text-slate-500">
                {item.category}
              </p>
            </div>

            <p className="text-sm font-semibold text-slate-900">
              ₹{item.price}
            </p>

            <div className="flex items-center gap-2">
              <button
                onClick={() => updateItems(item.id, "DEC")}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-sm text-slate-800 hover:bg-slate-300"
              >
                −
              </button>

              <span className="min-w-[2rem] text-center text-sm font-semibold text-slate-900">
                {item.quantity}
              </span>

              <button
                onClick={() => updateItems(item.id, "INC")}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-sm text-white hover:bg-slate-800"
              >
                +
              </button>
            </div>

            <button
              onClick={() => removeItem(item.id)}
              className="text-xs font-medium text-rose-500 underline-offset-2 hover:underline"
            >
              Remove
            </button>
          </div>
        ))}

        <p className="mt-4 border-t border-slate-200 pt-4 text-right text-base font-semibold text-slate-900">
          Total: ₹{total}
        </p>
      </div>
    </div>
  );
}

export default AddToCarts;

//tailwindcss + motion frametion

// import React, { useContext } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ProductContext } from "../UserContext/ProductProvider";

// const itemVariants = {
//   hidden: { opacity: 0, y: 20, scale: 0.96 },
//   visible: { opacity: 1, y: 0, scale: 1 },
//   exit: { opacity: 0, y: -20, scale: 0.95 },
// };

// const tap = { scale: 0.9 };
// const hover = { scale: 1.05 };

// function AddToCarts() {
//   const { cartItems, removeItem, updateItems } = useContext(ProductContext);

//   const safeItems = Array.isArray(cartItems) ? cartItems : [];

//   const total = safeItems.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );

//   console.log("cartitems in AddToCarts:", safeItems);

//   return (
//     <div className="min-h-screen flex items-start justify-center bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 px-4 py-10">
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.4, ease: "easeOut" }}
//         className="w-full max-w-3xl rounded-2xl bg-white/90 shadow-2xl shadow-slate-400/30 backdrop-blur px-5 py-6 sm:px-8"
//       >
//         <h2 className="text-xl font-semibold tracking-tight text-slate-900 mb-4">
//           Your Cart
//         </h2>

//         <AnimatePresence mode="popLayout">
//           {safeItems.length > 0 ? (
//             safeItems.map((item) => (
//               <motion.div
//                 key={item.id}
//                 variants={itemVariants}
//                 initial="hidden"
//                 animate="visible"
//                 exit="exit"
//                 layout
//                 transition={{ duration: 0.22 }}
//                 className="mb-3 flex flex-col gap-3 rounded-xl bg-slate-50/80 px-3 py-3 sm:flex-row sm:items-center sm:gap-4"
//               >
//                 <img
//                   src={item.images}
//                   alt={item.name}
//                   className="h-16 w-16 rounded-lg object-cover"
//                 />

//                 <div className="flex-1 min-w-0">
//                   <p className="truncate text-sm font-medium text-slate-900">
//                     {item.name}
//                   </p>
//                   <p className="mt-0.5 text-xs text-slate-500">
//                     {item.category}
//                   </p>
//                 </div>

//                 <p className="text-sm font-semibold text-slate-900">
//                   ₹{item.price}
//                 </p>

//                 <div className="flex items-center gap-2">
//                   <motion.button
//                     whileTap={tap}
//                     whileHover={hover}
//                     onClick={() => updateItems(item.id, "DEC")}
//                     className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-sm text-slate-800 shadow-sm hover:bg-slate-300"
//                   >
//                     −
//                   </motion.button>

//                   <motion.span
//                     layout
//                     transition={{
//                       type: "spring",
//                       stiffness: 260,
//                       damping: 20,
//                     }}
//                     className="min-w-[2rem] text-center text-sm font-semibold text-slate-900"
//                   >
//                     {item.quantity}
//                   </motion.span>

//                   <motion.button
//                     whileTap={tap}
//                     whileHover={hover}
//                     onClick={() => updateItems(item.id, "INC")}
//                     className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-sm text-white shadow-sm hover:bg-slate-800"
//                   >
//                     +
//                   </motion.button>
//                 </div>

//                 <motion.button
//                   whileTap={tap}
//                   whileHover={hover}
//                   onClick={() => removeItem(item.id)}
//                   className="text-xs font-medium text-rose-500 underline-offset-2 hover:underline"
//                 >
//                   Remove
//                 </motion.button>
//               </motion.div>
//             ))
//           ) : (
//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="py-10 text-center text-sm text-slate-500"
//             >
//               No items in cart
//             </motion.p>
//           )}
//         </AnimatePresence>

//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.1 }}
//           className="mt-4 border-t border-slate-200 pt-4 space-y-3"
//         >
//           <div className="flex items-center justify-between text-sm">
//             <span className="text-slate-500">Total</span>
//             <motion.span
//               layout
//               transition={{
//                 type: "spring",
//                 stiffness: 260,
//                 damping: 18,
//               }}
//               className="text-base font-semibold text-slate-900"
//             >
//               ₹{total}
//             </motion.span>
//           </div>

//           <motion.button
//             whileHover={{
//               scale: 1.02,
//               boxShadow: "0 18px 35px rgba(15,23,42,0.35)",
//             }}
//             whileTap={{ scale: 0.97 }}
//             className="mt-2 w-full rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2"
//           >
//             Proceed to Checkout
//           </motion.button>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }

// export default AddToCarts;