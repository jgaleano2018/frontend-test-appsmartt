function HomePage() {
return (
<div className="grid gap-4">
<h1 className="text-2xl font-semibold">Bienvenido 👋</h1>
<p className="text-slate-700">Esta demo incluye login, Context API, rutas protegidas, redirección al dashboard y logout.</p>
<ul className="list-disc ml-6 text-slate-700">
<li>Envía POST a <code>/api/login</code> y guarda el token</li>
<li>Protege <code>/dashboard</code></li>
<li>Logout borra token y limpia sesión</li>
</ul>
</div>
);
}