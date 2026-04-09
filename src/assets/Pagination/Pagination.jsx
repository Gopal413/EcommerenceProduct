import React from 'react'

function Pagination({page,setpage,hasmore}) {
 
  return (
    
    <div className="mt-10  flex items-end justify-center gap-1 text-sm">
  <button
    onClick={() => setpage((p) => Math.max(1, p - 1))}
    disabled={page === 1}
    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-slate-300 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition"
  >
    <svg
      className="w-3.5 h-3.5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    </svg>
    Prev
  </button>

  <span className="px-3 py-1.5 text-sm text-slate-100 bg-slate-800/60 border border-slate-700 rounded-lg">
    Page {page}
  </span>

  <button
    onClick={() => setpage((p) => p + 1)}
    disabled={!hasmore}
    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-slate-300 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition"
  >
    Next
    <svg
      className="w-3.5 h-3.5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  </button>
</div>

  );
}

export default Pagination
