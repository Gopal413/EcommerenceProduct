

function DashboardHome() {
  
  return (
  <div className="min-h-screen bg-slate-950 text-slate-50 px-4 py-8">
  <div className="max-w-6xl mx-auto space-y-6">
    {/* Header */}
    <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Products Dashboard</h1>
        <p className="text-xs text-slate-400 mt-1">
          Overview of your product items, stock and prices.
        </p>
      </div>
      <div className="flex items-center gap-2 text-xs">
        <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
          Total Products: 30
        </span>
        <span className="px-2.5 py-1 rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/30">
          Low Stock: 20
        </span>
      </div>
    </header>

    {/* Summary cards */}
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-sm">
        <p className="text-xs text-slate-400">Total Items</p>
        <p className="mt-1 text-xl font-semibold">15</p>
        <p className="mt-1 text-[11px] text-slate-500">Across all categories</p>
      </div>
      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-sm">
        <p className="text-xs text-slate-400">In Stock</p>
        <p className="mt-1 text-xl font-semibold text-emerald-400">23</p>
        <p className="mt-1 text-[11px] text-slate-500">Ready to sell</p>
      </div>
      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-sm">
        <p className="text-xs text-slate-400">Out of Stock</p>
        <p className="mt-1 text-xl font-semibold text-rose-400">10</p>
        <p className="mt-1 text-[11px] text-slate-500">Needs attention</p>
      </div>
      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-sm">
        <p className="text-xs text-slate-400">Avg. Price</p>
        <p className="mt-1 text-xl font-semibold">₹1,40,599</p>
        <p className="mt-1 text-[11px] text-slate-500">Per product</p>
      </div>
    </section>

    {/* Product list */}
    <section className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-semibold">Product Items</h2>
        <p className="text-[11px] text-slate-500">Showing latest added items</p>
      </div>

      <div className="space-y-2">
        {/* Row */}
        <div className="flex items-center gap-3 rounded-xl bg-slate-900 px-3 py-2 border border-slate-800">
          <div className="w-10 h-10 rounded-lg bg-slate-800 overflow-hidden">
            <img
              src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
              alt="Product 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium truncate">Essence Mascara Lash Princess</p>
            <p className="text-[11px] text-slate-500">beauty</p>
          </div>
          <p className="text-xs font-semibold text-slate-100">₹2,499</p>
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
            In Stock · 18
          </span>
        </div>

        <div className="flex items-center gap-3 rounded-xl bg-slate-900 px-3 py-2 border border-slate-800">
          <div className="w-10 h-10 rounded-lg bg-slate-800 overflow-hidden">
            <img
              src="https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/1.webp"
              alt="Product 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium truncate">Dior J'adore</p>
            <p className="text-[11px] text-slate-500">fragrances</p>
          </div>
          <p className="text-xs font-semibold text-slate-100">₹3,299</p>
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30">
            Low Stock · 4
          </span>
        </div>

        <div className="flex items-center gap-3 rounded-xl bg-slate-900 px-3 py-2 border border-slate-800">
          <div className="w-10 h-10 rounded-lg bg-slate-800 overflow-hidden">
            <img
              src="https://cdn.dummyjson.com/product-images/groceries/apple/1.webp"
              alt="Product 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium truncate">Apple</p>
            <p className="text-[11px] text-slate-500">groceries</p>
          </div>
          <p className="text-xs font-semibold text-slate-100">₹1,899</p>
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/30">
            Out of Stock
          </span>
        </div>
      </div>
    </section>
  </div>
</div>

);
}
 
export default DashboardHome