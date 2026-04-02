import React from "react";
import { Link } from "react-router-dom";

function NoProduct() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
      <div className="max-w-md w-full rounded-2xl border border-slate-800 bg-slate-900/80 px-6 py-6 text-center shadow-xl">
        <h2 className="text-lg font-semibold text-slate-50">
          No product selected
        </h2>
        <p className="mt-2 text-sm text-slate-400">
          Please choose a product from the list before opening this page.
        </p>

        <Link
          to="/product"
          className="mt-5 inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition"
        >
          ← Go to Products
        </Link>
      </div>
    </div>
  );
}

export default NoProduct;
