function LoginPage() {
const { login, token } = useAuth();
const nav = useNavigate();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");
const [submitting, setSubmitting] = useState(false);


useEffect(() => {
if (token) nav("/dashboard", { replace: true });
}, [token, nav]);


async function handleSubmit(e) {
e.preventDefault();
setError("");
setSubmitting(true);
try {
await login(email, password);
nav("/dashboard", { replace: true }); // ✅ redirigir tras login
} catch (err) {
setError(err.message || "Error iniciando sesión");
} finally {
setSubmitting(false);
}
}


return (
<div className="max-w-sm mx-auto">
<h1 className="text-2xl font-semibold mb-4">Iniciar sesión</h1>
<form onSubmit={handleSubmit} className="grid gap-3 bg-white p-6 rounded-2xl shadow-sm border">
<label className="grid gap-1">
<span className="text-sm text-slate-600">Email</span>
<input
type="email"
className="border rounded-xl px-3 py-2"
value={email}
onChange={(e) => setEmail(e.target.value)}
required
/>
</label>
<label className="grid gap-1">
<span className="text-sm text-slate-600">Password</span>
<input
type="password"
className="border rounded-xl px-3 py-2"
value={password}
onChange={(e) => setPassword(e.target.value)}
required
/>
</label>
{error && (
<div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-3 py-2">{error}</div>
)}
<button
type="submit"
className="mt-2 bg-black text-white rounded-2xl px-4 py-2 disabled:opacity-50"
disabled={submitting}
>
{submitting ? "Ingresando..." : "Entrar"}
</button>
</form>
<DemoNote />
</div>
);
}