/** UI Components (Tailwind) **/
function Layout({ children }) {
const { token, logout } = useAuth();
const nav = useNavigate();


return (
<div className="min-h-screen bg-slate-50">
<header className="sticky top-0 z-10 bg-white border-b">
<div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
<Link to="/" className="text-xl font-bold">MyApp</Link>
<nav className="flex items-center gap-3">
<Link className="text-sm hover:underline" to="/">Inicio</Link>
<Link className="text-sm hover:underline" to="/dashboard">Dashboard</Link>
{token ? (
<button
onClick={() => {
logout();
nav("/login", { replace: true });
}}
className="text-sm px-3 py-1.5 rounded-2xl border hover:bg-slate-100"
>
Logout
</button>
) : (
<Link className="text-sm px-3 py-1.5 rounded-2xl border" to="/login">Login</Link>
)}
</nav>
</div>
</header>
<main className="max-w-5xl mx-auto px-4 py-8">{children}</main>
</div>
);
}