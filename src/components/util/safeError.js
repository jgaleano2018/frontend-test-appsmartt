/** Helpers **/
async function safeError(res) {
try {
const data = await res.json();
return data?.message || data?.error || res.statusText;
} catch {
return res.statusText;
}
}