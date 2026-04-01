// import React, { useMemo, useState } from "react";
// import { NavLink } from "react-router-dom";
// import productsData from "../data/db.json";

// const categories = [...new Set(productsData.products.map((p) => p.category))];

// function Products() {
  
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [searchval, setsearchval] = useState("");

//   const filteredProducts = useMemo(() => {
//     if (selectedCategory === "All") return productsData.products;
//     return productsData.products.filter((p) => p.category === selectedCategory);
//   }, [selectedCategory]);

//   const handleAllProduct = () => {
//     setSelectedCategory("All");
//   };
//   const result = productsData.products.filter((e) =>
//     e.name.toLowerCase().includes(searchval.toLowerCase()),
//   );
//   //console.log("result :",result)
//   return (
//     <div className="min-h-screen bg-slate-900 text-white">
//       {/* Navbar */}
//       <nav className="bg-slate-800/90 backdrop-blur border-b border-slate-700 sticky top-0 z-50">
//         <div className="max-w-9xl mx-auto px-4">
//           <div className="flex flex-wrap items-center justify-between gap-4 py-4">
//             {/* Logo */}
//             <NavLink
//               to="/"
//               className="text-2xl font-bold tracking-tight text-white"
//             >
//               Products
//             </NavLink>

//             {/* Category Links (scrollable on mobile) */}
//             <div className="flex-1 flex justify-center">
//               <ul className="flex flex-nowrap md:flex-wrap gap-2 overflow-x-auto scrollbar-none">
//                 {/* All button */}
//                 <li>
//                   <button
//                     onClick={handleAllProduct}
//                     className={`px-4 py-2 rounded-full text-sm md:text-base transition-all ${
//                       selectedCategory === "All"
//                         ? "bg-yellow-400 text-shadow-olive-200-white font-semibold shadow-md"
//                         : "bg-slate-700/70 hover:bg-slate-600"
//                     }`}
//                   >
//                     All
//                   </button>
//                 </li>

//                 {/* Dynamic category pills */}
//                 {categories.map((cat) => (
//                   <li key={cat}>
//                     <button
//                       onClick={() => setSelectedCategory(cat)}
//                       className={`px-4 py-2 rounded-full text-sm md:text-base whitespace-nowrap transition-all ${
//                         selectedCategory === cat
//                           ? "bg-yellow-400 text-shadow-olive-200-white font-semibold shadow-md"
//                           : "bg-slate-700/70 hover:bg-slate-600"
//                       }`}
//                     >
//                       {cat}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <input
//               type="text"
//               placeholder="Search..."
//               onChange={(e) => setsearchval(e.target.value)}
//               className="w-[100] px-4 py-2 rounded-full bg-gray-800 text-sm md:text-base text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
//             />

//             {/* Add new product button */}
//             <NavLink
//               to="/newproduct"
//               className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-sm md:text-base font-semibold shadow-lg"
//             >
//               + Add New Product
//             </NavLink>
//             {/* <input type="text" placeholder="search...."  onChange={(e)=>setsearchval(e.target.value)}/> */}
//           </div>
//         </div>
//       </nav>

//       {/* Products grid */}
//       <main className="max-w-6xl mx-auto px-4 py-8">
//         <h2 className="text-2xl md:text-3xl font-bold mb-6">
//           {selectedCategory === "All"
//             ? "All Products"
//             : `${selectedCategory} Products`}
//           <span className="text-slate-400 text-base font-normal ml-2">
//             ({filteredProducts.length})
//           </span>
//         </h2>

//         <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//           {result.map((product) => (
//             <div
//               key={product.id}
//               className="bg-slate-800 rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all"
//             >
//               <img
//                 src={product.images[0]}
//                 alt={product.name}
//                 className="w-full h-40 md:h-48 object-cover"
//               />
//               <div className="p-4">
//                 <p className="text-xs uppercase tracking-wide text-blue-400 mb-1">
//                   {product.category}
//                 </p>
//                 <h3 className="text-base md:text-lg font-semibold mb-1">
//                   {product.name}
//                 </h3>
//                 <p className="text-lg font-bold text-emerald-400 mb-1">
//                   ${Number(product.price || 0).toFixed(2)}
//                 </p>
//                 <p className="text-xs text-slate-400">
//                   {product.inStock ? "In Stock" : "Out of Stock"}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }

// export default Products;

// import React, { useContext, useEffect, useMemo, useState } from "react";
// import { NavLink } from "react-router-dom";
// import { ProductContext } from "../UserContext/ProductProvider";


// function Products() {
//   const [products, setProducts] = useState([]);          // whole list from API
//   const [categories, setCategories] = useState([]);      // unique categories
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [search, setSearch] = useState("");
//   const { addToCart ,cartItems } = useContext(ProductContext);
  
//   const totalcart = cartItems.length;
//   // 1) Load data once
//   useEffect(() => {
//     fetch("http://localhost:3000/products")
//       .then((res) => res.json())
//       .then((data) => {
//         const list = Array.isArray(data) ? data : [];
//         setProducts(list);
//         setCategories([...new Set(list.map((p) => p.category))]);
//       })
//       .catch((err) => {
//         console.error("Error fetching products:", err);
//         setProducts([]);
//         setCategories([]);
//       });
//   }, []);

//   // 2) Single filtered list: category + search together
//   const filteredProducts = useMemo(() => {
//     let list = products;

//     if (selectedCategory !== "All") {
//       list = list.filter((p) => p.category === selectedCategory);
//     }

//     if (search.trim()) {
//       const q = search.toLowerCase();
//       list = list.filter((p) =>
//         (p.name || "").toLowerCase().includes(q)
//       );
//     }

   
//     return list;
//   }, [products, selectedCategory, search]); // only recompute when needed [web:128][web:132]

//    const tokenid = localStorage.getItem("token_id")
//     console.log("loginid",tokenid)

//   return (
//     <>
//       {/* Category + search row goes under Layout’s nav */}
//       <section className="bg-slate-900 text-white border-b
      
//       border-slate-800">
//         <div className="max-w-6xl mx-auto px-4 py-4 flex flex-wrap gap-4 items-center justify-between">
//           {/* Category pills */}
//           <div className="flex-1 flex justify-center order-2 md:order-1">
//             <ul className="flex flex-nowrap md:flex-wrap gap-2 overflow-x-auto scrollbar-none">
//               <li>
//                 <button
//                   onClick={() => setSelectedCategory('All')}
//                   className={`px-4 py-2 rounded-full text-sm md:text-base transition-all ${
//                     selectedCategory === 'All'
//                       ? 'bg-yellow-400 text-slate-900 font-semibold shadow-md'
//                       : 'bg-slate-700/70 hover:bg-slate-600'
//                   }`}
//                 >
//                   All
//                 </button>
//               </li>
//               {categories.map((cat) => (
//                 <li key={cat}>
//                   <button
//                     onClick={() => setSelectedCategory(cat)}
//                     className={`px-4 py-2 rounded-full text-sm md:text-base whitespace-nowrap transition-all ${
//                       selectedCategory === cat
//                         ? 'bg-yellow-400 text-slate-900 font-semibold shadow-md'
//                         : 'bg-slate-700/70 hover:bg-slate-600'
//                     }`}
//                   >
//                     {cat}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Search input */}
//           <input
//             type="text"
//             placeholder="Search..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="order-1 md:order-2 w-[150px] md:w-[220px] px-4 py-2 rounded-full bg-gray-800 text-sm md:text-base text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
//           />
//             {/* + Add New Product button */}
//           {tokenid === "1"?<NavLink
//             to="/newproduct"
//             className="order-3 md:order-3 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-sm md:text-base font-semibold shadow-lg ml-auto"
//           >
//             + Add New Product
//           </NavLink>:<NavLink
//             to="/addtocart"
//             className="order-3 md:order-3 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-sm md:text-base font-semibold shadow-lg ml-auto"
//           >
//             {totalcart > 0 && <span>{totalcart}</span>}
//             AddToCart
//           </NavLink>}
         
//         </div>
//       </section>

//       {/* Products grid */}
//       <section className="max-w-6xl mx-auto px-4 py-8">
//         <h2 className="text-2xl md:text-3xl font-bold mb-6">
//           {selectedCategory === 'All'
//             ? 'All Products'
//             : `${selectedCategory} Products`}
//           <span className="text-slate-400 text-base font-normal ml-2">
//             ({filteredProducts.length})
//           </span>
//         </h2>

//         <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//           {filteredProducts.map((product) => (
//             <div
//               key={product.id}
//               className="bg-slate-800 rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all"
//             >
//               {/* <NavLink to={`/product/${product.id}`} state={{ product }}> */}
//                 <img
//                   src={product.images?.[0]}
//                   alt={product.name}
//                   className="w-full h-40 md:h-48 object-cover"
//                 />
//                 <div className="p-4">
//                   <p className="text-xs uppercase tracking-wide text-blue-400 mb-1">
//                     {product.category}
//                   </p>
//                   <h3 className="text-base md:text-lg font-semibold mb-1">
//                     {product.name}
//                   </h3>
//                   <p className="text-lg font-bold text-emerald-400 mb-1">
//                     ${Number(product.price || 0).toFixed(2)}
//                   </p>
//                   <p className="text-xs text-slate-400">
//                     {product.inStock === 'true' || product.inStock === true
//                       ? 'In Stock'
//                       : 'Out of Stock'}
//                   </p>
//                    <button onClick={()=>addToCart({...product})} className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700">
//              Add to Cart
//             </button>
//                 </div>
//               {/* </NavLink> */}
//             </div>
//           ))}
//         </div>
//       </section>
//       </>
//   );
// }

// export default Products;

// import React, { useContext, useEffect, useMemo, useState } from "react";
// import { NavLink } from "react-router-dom";
// import { ProductContext } from "../UserContext/ProductProvider";

// function Products() {
//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [search, setSearch] = useState("");
//   const { addToCart, cartItems } = useContext(ProductContext);

//   const totalcart = cartItems?.length || 0;
//   const tokenid = localStorage.getItem("token_id");

//   useEffect(() => {
//     fetch("http://localhost:3000/products")
//       .then((res) => res.json())
//       .then((data) => {
//         const list = Array.isArray(data) ? data : [];
//         setProducts(list);
//         setCategories([...new Set(list.map((p) => p.category))]);
//       })
//       .catch((err) => {
//         console.error("Error fetching products:", err);
//         setProducts([]);
//         setCategories([]);
//       });
//   }, []);

//   const filteredProducts = useMemo(() => {
//     let list = products;

//     if (selectedCategory !== "All") {
//       list = list.filter((p) => p.category === selectedCategory);
//     }

//     if (search.trim()) {
//       const q = search.toLowerCase();
//       list = list.filter((p) => (p.name || "").toLowerCase().includes(q));
//     }

//     return list;
//   }, [products, selectedCategory, search]);

//   return (
//     <div className="min-h-screen bg-slate-950 text-white">
//       {/* Top bar */}
//       <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur">
//         <div className="max-w-6xl mx-auto px-4 py-4 flex flex-wrap gap-4 items-center justify-between">
//           {/* Logo */}
//           <NavLink
//             to="/"
//             className="text-xl md:text-2xl font-bold tracking-tight text-white"
//           >
//             Products
//           </NavLink>

//           {/* Search */}
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="order-2 md:order-2 w-[160px] md:w-[220px] px-4 py-2 rounded-full bg-slate-800 text-sm md:text-base text-slate-100 placeholder-slate-400 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
//           />

//           {/* Right button: Add product OR Cart with badge */}
//           {tokenid === "1" ? (
//             <NavLink
//               to="/newproduct"
//               className="order-3 md:order-3 inline-flex items-center justify-center px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-sm md:text-base font-semibold shadow-lg transition"
//             >
//               + Add New Product
//             </NavLink>
//           ) : (
//             <div className="order-3 md:order-3 relative inline-block">
//               <NavLink
//                 to="/addtocart"
//                 className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-sm md:text-base font-semibold shadow-lg transition"
//               >
//                 Add To Cart
//               </NavLink>

//               {totalcart > 0 && (
//                 <span
//                   className="absolute -top-2 -right-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white text-[10px] md:text-xs px-1.5 py-0.5 min-w-[18px] border border-slate-900"
//                 >
//                   {totalcart}
//                 </span>
//               )}
//             </div>
//           )}
//         </div>

//         {/* Category pills row */}
//         <div className="border-t border-slate-800">
//           <div className="max-w-6xl mx-auto px-4 py-3">
//             <ul className="flex flex-nowrap md:flex-wrap gap-2 overflow-x-auto scrollbar-none">
//               <li>
//                 <button
//                   onClick={() => setSelectedCategory("All")}
//                   className={`px-4 py-2 rounded-full text-xs md:text-sm transition-all ${
//                     selectedCategory === "All"
//                       ? "bg-yellow-400 text-slate-900 font-semibold shadow-md"
//                       : "bg-slate-800/80 hover:bg-slate-700"
//                   }`}
//                 >
//                   All
//                 </button>
//               </li>
//               {categories.map((cat) => (
//                 <li key={cat}>
//                   <button
//                     onClick={() => setSelectedCategory(cat)}
//                     className={`px-4 py-2 rounded-full text-xs md:text-sm whitespace-nowrap transition-all ${
//                       selectedCategory === cat
//                         ? "bg-yellow-400 text-slate-900 font-semibold shadow-md"
//                         : "bg-slate-800/80 hover:bg-slate-700"
//                     }`}
//                   >
//                     {cat}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </header>

//       {/* Products grid */}
//       <main className="max-w-6xl mx-auto px-4 py-8">
//         <div className="flex items-center justify-between gap-3 mb-6">
//           <h2 className="text-2xl md:text-3xl font-bold">
//             {selectedCategory === "All"
//               ? "All Products"
//               : `${selectedCategory} Products`}
//           </h2>
//           <span className="text-slate-400 text-sm md:text-base">
//             {filteredProducts.length} item
//             {filteredProducts.length !== 1 ? "s" : ""}
//           </span>
//         </div>

//         {filteredProducts.length === 0 ? (
//           <p className="text-slate-400 text-sm">
//             No products found. Try changing the category or search term.
//           </p>
//         ) : (
//           <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//             {filteredProducts.map((product) => (
//               <div
//                 key={product.id}
//                 className="flex flex-col bg-slate-900/80 rounded-2xl border border-slate-800 shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-200"
//               >
//                 <img
//                   src={product.images?.[0]}
//                   alt={product.name}
//                   className="w-full h-40 md:h-48 object-cover"
//                 />
//                 <div className="p-4 flex flex-col flex-1">
//                   <p className="text-[10px] uppercase tracking-wide text-blue-400 mb-1">
//                     {product.category}
//                   </p>
//                   <h3 className="text-sm md:text-base font-semibold mb-1 line-clamp-2">
//                     {product.name}
//                   </h3>
//                   <p className="text-lg font-bold text-emerald-400 mb-1">
//                     ₹{Number(product.price || 0).toFixed(2)}
//                   </p>
//                   <p className="text-[11px] text-slate-400 mb-3">
//                     {product.inStock === "true" || product.inStock === true
//                       ? "In Stock"
//                       : "Out of Stock"}
//                   </p>

//                   <button
//                     onClick={() => addToCart({ ...product })}
//                     className="mt-auto w-full bg-blue-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition"
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }

// export default Products;

import React, { useContext, useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ProductContext } from "../UserContext/ProductProvider";
import Pagination from "../Pagination/Pagination";


const barVariants = {
  hidden: { opacity: 0, y: -15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
};

const chipVariants = {
  hover: { scale: 1.05, y: -1 },
  tap: { scale: 0.97 },
};

const gridVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 15, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const { addToCart, cartItems } = useContext(ProductContext);
  const [page,setpage] = useState(1)
  const totalcart = cartItems?.length || 0;
  const tokenid = localStorage.getItem("token_id");
  
  const limit =4;
  const offset =(page-1) * limit;
  useEffect(() => {
     fetch(`http://localhost:3000/products`)
      .then((res) => res.json())
      .then((data) => {
        const list = Array.isArray(data) ? data : [];
        //console.log("onlydata",data)
        setProducts(list);
        setCategories([...new Set(list.map((p) => p.category))]);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setProducts([]);
        setCategories([]);
      });
  }, []);

  const filteredProducts = useMemo(() => {
    let list = products;

    if (selectedCategory !== "All") {
      list = list.filter((p) => p.category === selectedCategory);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((p) => (p.title || "").toLowerCase().includes(q));
    }

    return list.slice(offset, offset + limit);;
  }, [products, selectedCategory, search, page, limit, offset]); // [web:99][web:100]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Top bar: title + categories + search + cart/add-product */}
      <motion.header
        variants={barVariants}
        initial="hidden"
        animate="visible"
        className="border-b border-slate-800 bg-slate-900/95 backdrop-blur"
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-wrap items-center gap-3">
          {/* Left: site title */}
          <span className="text-lg md:text-xl font-semibold text-white">
            Products
          </span>

          {/* Middle: All + dynamic categories inline */}
          <div className="flex items-center gap-2 flex-1 justify-center">
            {/* All */}
            <motion.button
              variants={chipVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => setSelectedCategory("All")}
              className={`px-4 py-1.5 rounded-full text-xs md:text-sm transition-all ${
                selectedCategory === "All"
                  ? "bg-yellow-400 text-slate-900 font-semibold shadow-md"
                  : "bg-slate-800/80 text-slate-100 hover:bg-slate-700"
              }`}
            >
              All
            </motion.button>

            {/* Dynamic categories */}
            {categories.map((cat) => (
              <motion.button
                key={cat}
                variants={chipVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs md:text-sm whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-blue-400 text-slate-900 font-semibold shadow-md"
                    : "bg-slate-800/80 text-slate-100 hover:bg-slate-700"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Right: search + cart/add-product */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-[140px] md:w-[200px] px-3 py-1.5 rounded-full bg-slate-800 text-xs md:text-sm text-slate-100 placeholder-slate-400 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
            />

            {tokenid === "1" ? (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
              >
                <NavLink
                  to="/newproduct"
                  className="inline-flex items-center justify-center px-3 md:px-4 py-1.5 rounded-full bg-blue-600 hover:bg-blue-500 text-xs md:text-sm font-semibold text-white shadow-md"
                >
                  + Add Product
                </NavLink>
              </motion.div>
            ) : (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="relative inline-block"
              >
                <NavLink
                  to="/addtocart"
                  className="inline-flex items-center gap-1 px-3 md:px-4 py-1.5 rounded-full bg-blue-600 hover:bg-blue-500 text-xs md:text-sm font-semibold text-white shadow-md"
                >
                  <span className="hidden md:inline">Add to Cart</span>
                  <span className="md:hidden">Cart</span>
                </NavLink>

                {totalcart > 0 && (
                  <span className="absolute -top-2 -right-2 inline-flex items-center justify-center rounded-full bg-red-500 text-white text-[10px] px-1.5 py-0.5 min-w-[18px] border border-slate-900">
                    {totalcart}
                  </span>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </motion.header>

      {/* Products grid */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between gap-3 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            {selectedCategory === "All"
              ? "All Products"
              : `${selectedCategory} Products`}
          </h2>
          <span className="text-slate-400 text-sm md:text-base">
            {filteredProducts.length} item
            {filteredProducts.length !== 1 ? "s" : ""}
          </span>
        </div>

        <AnimatePresence mode="wait">
          {filteredProducts.length === 0 ? (
            <motion.p
              key="empty"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-slate-400 text-sm"
            >
              No products found. Try changing the category or search term.
            </motion.p>
          ) : (
            <motion.div
              key="grid"
              variants={gridVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            >
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  variants={cardVariants}
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex flex-col bg-slate-900/80 rounded-2xl border border-slate-800 shadow-md overflow-hidden transition-all duration-200"
                >
                  <motion.img
                    src={product.images?.[0]}
                    alt={product.name}
                    className="w-full h-40 md:h-48 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.25 }}
                  />
                  <div className="p-4 flex flex-col flex-1">
                    <p className="text-[10px] uppercase tracking-wide text-blue-400 mb-1">
                      {product.category}
                    </p>
                    <h3 className="text-sm md:text-base font-semibold mb-1 line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-lg font-bold text-orange-400 mb-1">
                     {product.title}
                    </p>
                    <p className="text-lg font-bold text-emerald-400 mb-1">
                      ₹{Number(product.price || 0).toFixed(2)}
                    </p>
                    <p className="text-[11px] text-slate-400 mb-3">
                      {product.inStock === "true" || product.inStock === true
                        ? "In Stock"
                        : "Out of Stock"}
                    </p>

                    <motion.button
                      onClick={() => addToCart({ ...product })}
                      whileTap={{ scale: 0.96 }}
                      className="mt-auto w-full bg-blue-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-950 transition"
                    >
                      Add to Cart
                    </motion.button>
                    
                  </div>
                </motion.div>
              ))}
              <Pagination page={page} setpage ={setpage} hasmore ={filteredProducts.length === limit}/>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default Products;
