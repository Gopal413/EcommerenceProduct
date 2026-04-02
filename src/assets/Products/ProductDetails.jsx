import React, { useContext } from 'react'
import { useLocation, useParams ,Link} from 'react-router-dom'
import { ProductContext } from '../UserContext/ProductProvider';
import { motion, AnimatePresence } from "framer-motion";

function ProductDetails() {
  const { addToCart } = useContext(ProductContext);
    const location = useLocation()
    const {id} = useParams()

    // const {addToCart} = useContext(ProductContext);
    //console.log("addtocart",addToCart)
    const products = location.state?.product


  return (
    // <div className="min-h-screen bg-gray-50 py-12 px-4">
    //   <Link to="/product" className="text-blue-600 hover:underline mb-6 inline-block">
    //     ← Back to Products
    //   </Link>

    //   <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
    //     <div className="grid md:grid-cols-2 gap-8">
    //       {/* Image */}
    //       <img
    //         src={products.images[0]}
    //         alt={products.name}
    //         className="w-full h-96 object-cover rounded-xl"
    //       />

    //       {/* Details */}
    //       <div>
    //         <p className="text-sm text-blue-600 font-semibold">{products.category}</p>
    //         <h1 className="text-3xl font-bold mt-2">{products.name}</h1>
    //         <p className="text-3xl font-bold text-green-600 mt-4">
    //           ${Number(products.price || 0).toFixed(2)}
    //         </p>
    //         <p className="mt-4 text-gray-600">
    //           {products.inStock ? '✅ In Stock' : '❌ Out of Stock'}
    //         </p>
            
    //         {products.description && (
    //           <p className="mt-4 text-gray-700">{products.description}</p>
    //         )}

    //         <motion.button
    //                   onClick={() => addToCart({ ...products })}
    //                   whileTap={{ scale: 0.96 }}
    //                   className="mt-auto w-full bg-blue-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-950 transition"
    //                 >
    //                   Add to Cart
    //                 </motion.button>
    //       </div>
    //     </div>
    //   </div>
    //   </div>

    <div className="min-h-screen bg-slate-950 py-10 px-4">
  <div className="max-w-5xl mx-auto">
    {/* Back + breadcrumb */}
    <div className="mb-4 flex items-center justify-between gap-3">
      <Link
        to="/product"
        className="inline-flex items-center text-xs font-medium text-slate-400 hover:text-slate-100"
      >
        <span className="mr-1 text-base">←</span>
        Back to Products
      </Link>
      <p className="text-[11px] text-slate-500">
        Home / <span className="text-slate-300">Products</span> /{" "}
        <span className="text-slate-100">{products.name}</span>
      </p>
    </div>

    {/* Card */}
    <div className="bg-slate-900/80 rounded-3xl shadow-2xl border border-slate-800 p-6 sm:p-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Image + badges */}
        <div className="space-y-3">
          <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900">
            <img
              src={products.images[0]}
              alt={products.name}
              className="w-full h-80 object-cover"
            />
            {products.inStock && (
              <span className="absolute top-3 left-3 rounded-full bg-emerald-500 text-xs font-semibold text-slate-950 px-2.5 py-1 shadow">
                In Stock
              </span>
            )}
            {products.tag && (
              <span className="absolute top-3 right-3 rounded-full bg-sky-500 text-xs font-semibold text-slate-950 px-2.5 py-1 shadow">
                {products.tag}
              </span>
            )}
          </div>

          {/* Small thumbnails (if multiple images) */}
          {products.images?.length > 1 && (
            <div className="flex gap-2">
              {products.images.slice(0, 3).map((img, idx) => (
                <div
                  key={idx}
                  className="w-14 h-14 rounded-xl overflow-hidden border border-slate-800 bg-slate-900"
                >
                  <img
                    src={img}
                    alt={`${products.name} preview ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div className="flex flex-col">
          <p className="text-xs font-semibold text-sky-400 uppercase tracking-[0.18em]">
            {products.category}
          </p>

          <h1 className="mt-2 text-2xl sm:text-3xl font-semibold text-slate-50">
            {products.name}
          </h1>

          <div className="mt-3 flex items-center gap-3">
            <p className="text-2xl sm:text-3xl font-bold text-emerald-400">
              ₹{Number(products.price || 0).toFixed(2)}
            </p>
            {products.mrp && (
              <p className="text-xs text-slate-500 line-through">
                ₹{Number(products.mrp).toFixed(2)}
              </p>
            )}
          </div>

          <p className="mt-2 text-xs text-slate-400">
            {products.inStock ? "Available for fast delivery" : "Currently unavailable"}
          </p>

          {products.description && (
            <p className="mt-4 text-sm leading-relaxed text-slate-200">
              {products.description}
            </p>
          )}

          {/* Info row */}
          <div className="mt-4 grid grid-cols-2 gap-3 text-[11px] text-slate-400">
            <div className="rounded-xl border border-slate-800 bg-slate-900 px-3 py-2">
              <p className="font-semibold text-slate-200">Delivery</p>
              <p>2–5 business days</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900 px-3 py-2">
              <p className="font-semibold text-slate-200">Return Policy</p>
              <p>Easy 7‑day return</p>
            </div>
          </div>

          {/* Add to cart */}
          <motion.button
            onClick={() => addToCart({ ...products })}
            whileTap={{ scale: 0.96 }}
            className="mt-6 w-full bg-emerald-500 text-slate-950 py-2.5 rounded-xl text-sm font-semibold hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={products.inStock}
          >
            🛒 Add to Cart
          </motion.button>
        </div>
      </div>
    </div>
  </div>
  </div>
);

}

export default ProductDetails
