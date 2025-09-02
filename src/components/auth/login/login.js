import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, useNavigate, Link } from "react-router-dom";


/**
* 🔐 AuthContext + Provider
* - Maneja token y usuario
* - Persiste en localStorage
* - Provee helpers: login, logout, apiFetch
*/
const AuthContext = createContext(null);


function useAuth() {
const ctx = useContext(AuthContext);
if (!ctx) throw new Error("useAuth must be used within <AuthProvider>");
return ctx;
}


function AuthProvider({ children }) {
const [token, setToken] = useState(null);
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);


// Restaurar sesión al montar
useEffect(() => {
const saved = localStorage.getItem("auth.session");
if (saved) {
try {
const { token: t, user: u } = JSON.parse(saved);
if (t) {
setToken(t);
setUser(u ?? null);
}
} catch {}
}
setLoading(false);
}, []);


// Guardar sesión cuando cambie
useEffect(() => {
if (token) {
localStorage.setItem("auth.session", JSON.stringify({ token, user }));
} else {
localStorage.removeItem("auth.session");
}
}, [token, user]);

async function login(email, password) {
// ⬇️ Ajusta la URL a tu backend
const res = await fetch("/api/login", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ email, password }),
});


if (!res.ok) {
const msg = await safeError(res);
throw new Error(msg || "Credenciales inválidas");
}


// Espera que el backend responda: { token: string, user: { ... } }
const data = await res.json();
if (!data?.token) throw new Error("Respuesta de login inválida (falta token)");


setToken(data.token);
setUser(data.user ?? null);
}


function logout() {
// (opcional) golpear /api/logout en tu backend si existe
setToken(null);
setUser(null);
// localStorage se limpia por el effect
}


/**
* apiFetch: helper para llamadas autenticadas
* - agrega Authorization: Bearer <token>
* - renueva token si tu API lo soporta (placeholder)
*/
async function apiFetch(input, init = {}) {
const headers = new Headers(init.headers || {});
if (token) headers.set("Authorization", `Bearer ${token}`);
const res = await fetch(input, { ...init, headers });


if (res.status === 401) {
// Token inválido/expirado => limpiar sesión
setToken(null);
setUser(null);
}
return res;
}


const value = useMemo(() => ({ token, user, loading, login, logout, apiFetch }), [token, user, loading]);


return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}