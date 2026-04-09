
import React, { useContext, useMemo } from "react";
import { ProductContext } from "../UserContext/ProductProvider";
import { Link } from "react-router-dom";
import Layout from "../Header/Layout";
import NoProduct from "./NoProduct";

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
    return <div className="flex flex-1 relative"> <Layout/>
    <div className=" flex-1 overflow-y-auto">
      <NoProduct/>
    </div>
    </div>;
  }

  return (
    <div className="min-h-screen flex items-start justify-center bg-slate-100 px-4 py-10">
  <Layout />

  <div className="w-full max-w-3xl rounded-3xl bg-white shadow-xl px-5 py-6 sm:px-7 sm:py-7 border border-slate-200">
    <div className="mb-5 flex items-center justify-between gap-3">
      <Link
        to="/product"
        className="inline-flex items-center text-xs font-medium text-slate-500 hover:text-slate-800"
      >
        <span className="mr-1 text-base">←</span>
        Back to Products
      </Link>

      <h2 className="text-lg font-semibold text-slate-900">
        Your Cart
      </h2>
    </div>

    {safeItems.length === 0 && (
      <p className="rounded-2xl bg-slate-50 px-4 py-6 text-center text-sm text-slate-500 border border-dashed border-slate-200">
        Your cart is empty. Add some products to get started.
      </p>
    )}

    {safeItems.map((item) => (
      <div
        key={item.id}
        className="mb-3 flex flex-col gap-3 rounded-2xl bg-slate-50 px-3 py-3 sm:flex-row sm:items-center sm:gap-4 border border-slate-200 hover:border-slate-300 transition"
      >
        <img
          src={item.thumbnail}
          alt={item.name}
          className="h-16 w-16 rounded-xl object-cover ring-1 ring-slate-200"
        />

        <div className="flex-1 min-w-0">
          <p className="truncate text-sm font-medium text-slate-900">
            {item.name}
          </p>
          <p className="mt-0.5 text-xs text-slate-500">
            {item.category}
          </p>
          <p className="mt-1 text-xs font-semibold text-emerald-600">
            ₹{item.price} each
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => updateItems(item.id, "DEC")}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-sm text-slate-700 hover:bg-slate-200"
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

        <div className="flex flex-col items-end gap-1">
          <p className="text-sm font-semibold text-slate-900">
            ₹{item.price * item.quantity}
          </p>
          <button
            onClick={() => removeItem(item.id)}
            className="text-[11px] font-medium text-rose-500 underline-offset-2 hover:underline"
          >
            Remove
          </button>
        </div>
      </div>
    ))}

    <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4">
      <p className="text-sm text-slate-500">
        Total ({safeItems.length} items)
      </p>
      <p className="text-base font-semibold text-slate-900">
        Total: ₹{total}
      </p>
    </div>
  </div>
</div>
  );
}

export default AddToCarts;

