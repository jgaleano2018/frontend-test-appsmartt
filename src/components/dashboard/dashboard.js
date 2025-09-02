function DashboardPage() {
const { user, apiFetch } = useAuth();
const [profile, setProfile] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");


useEffect(() => {
let alive = true;
(async () => {
try {
// ⬇️ Ajusta a tu endpoint protegido
const res = await apiFetch("/api/me");
if (!res.ok) throw new Error("No se pudo cargar el perfil");
const data = await res.json();
if (alive) setProfile(data);
} catch (e) {
if (alive) setError(e.message || "Error");
} finally {
if (alive) setLoading(false);
}
})();
return () => { alive = false; };
}, [apiFetch]);


if (loading) return <FullPageLoader label="Cargando dashboard..." />;


return (
<div className="grid gap-4">
<h1 className="text-2xl font-semibold">Dashboard</h1>
{error && <div className="text-sm text-red-600">{error}</div>}
<div className="grid md:grid-cols-2 gap-4">
<Card title="Usuario">
<pre className="text-sm overflow-auto">{JSON.stringify(user ?? profile?.user ?? profile, null, 2)}</pre>
</Card>
<Card title="Ejemplo de datos protegidos">
<pre className="text-sm overflow-auto">{JSON.stringify(profile, null, 2)}</pre>
</Card>
</div>
</div>
);
}