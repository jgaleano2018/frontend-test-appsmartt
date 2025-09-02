/** Utilidades UI **/
function Card({ title, children }) {
return (
<div className="bg-white rounded-2xl border shadow-sm p-4">
<div className="font-medium mb-2">{title}</div>
{children}
</div>
);
}