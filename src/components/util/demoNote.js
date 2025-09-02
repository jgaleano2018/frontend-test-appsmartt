function DemoNote() {
return (
<details className="max-w-sm mx-auto mt-6 text-sm text-slate-600">
<summary className="cursor-pointer">Cómo integrar con tu API</summary>
<div className="mt-2 space-y-2">
<p>
1) En <code>login()</code> cambia <code>/api/login</code> por tu endpoint real.
Debe devolver <code>{`{ token: string, user?: object }`}</code>.
</p>
<p>
2) En <code>DashboardPage</code> cambia <code>/api/me</code> por un recurso protegido.
<code>apiFetch()</code> añade <code>Authorization: Bearer &lt;token&gt;</code>.
</p>
<p>
3) <strong>Logout</strong> limpia el token y te envía a <code>/login</code>.
</p>
<p>
4) La sesión persiste en <code>localStorage</code> con la clave <code>auth.session</code>.
</p>
</div>
</details>
);
}