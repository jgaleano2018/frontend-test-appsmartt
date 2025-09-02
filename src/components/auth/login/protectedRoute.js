/**
* 🔒 ProtectedRoute (v6):
* - Si autenticado => renderiza children
* - Si cargando => muestra spinner
* - Si no autenticado => redirige a /login
*/
function ProtectedRoute({ children }) {
const { token, loading } = useAuth();
if (loading) return <FullPageLoader label="Cargando sesión..." />;
if (!token) return <Navigate to="/login" replace />;
return children;
}


/**
* 🧭 App Shell con Router
*/
export default function App() {
return (
<AuthProvider>
<BrowserRouter>
<Layout>
<Routes>
<Route path="/login" element={<LoginPage />} />
<Route
path="/dashboard"
element={
<ProtectedRoute>
<DashboardPage />
</ProtectedRoute>
}
/>
<Route path="/" element={<HomePage />} />
<Route path="*" element={<NotFoundPage />} />
</Routes>
</Layout>
</BrowserRouter>
</AuthProvider>
);
}