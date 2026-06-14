function ProductCard({ name, price, description }) {
  return (
    <article className="rounded-3xl border border-white/10 bg-slate-900 p-5 text-slate-100 ring-1 ring-white/5">
      <div className="h-44 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-700" />
      <h2 className="mt-5 text-lg font-semibold text-white">{name}</h2>
      <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
      <div className="mt-5 flex items-center justify-between">
        <span className="text-lg font-semibold text-emerald-300">{price}</span>
        <button
          type="button"
          className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950"
        >
          Add to cart
        </button>
      </div>
    </article>
  );
}

export default ProductCard;