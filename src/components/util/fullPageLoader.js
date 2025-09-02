function FullPageLoader({ label = "Cargando..." }) {
return (
<div className="min-h-[40vh] grid place-items-center">
<div className="flex items-center gap-3 text-slate-600">
<span className="inline-block h-4 w-4 rounded-full border-2 border-slate-300 border-t-transparent animate-spin" />
<span>{label}</span>
</div>
</div>
);
}