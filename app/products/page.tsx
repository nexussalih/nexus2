import { PageShell } from "@/components/page-shell";
const rows=[
["iPhone 16 Pro Max","IP16PM-256-DT","Desert Titanium","256GB","$1,015","Active"],
["iPhone 16 Pro","IP16P-256-NT","Natural Titanium","256GB","$879","Active"],
["iPhone 16","IP16-128-BLK","Black","128GB","$665","Active"],
["AirPods Pro 2","APP2-USBC-WHT","White","USB-C","$182","Active"],
["iPhone 15 128GB","IP15-128-BLU","Blue","128GB","$548","Phase-out"],
];
export default function Products(){return <PageShell><section className="pageHeading"><div><span className="eyebrow">MASTER DATA</span><h2>Products & variants</h2><p>Manage commercial SKUs by model, color, storage, cost, and lifecycle.</p></div><button className="primaryButton">Add product</button></section><div className="filterRow"><input placeholder="Search SKU or product"/><select defaultValue="all"><option value="all">All brands</option><option>Apple</option></select><select defaultValue="active"><option value="active">Active products</option><option>All statuses</option></select><button className="secondaryButton">Import Excel</button></div><div className="card tableCard"><div className="panelHeader"><div><h3>Product catalogue</h3><p>5 demo SKUs configured</p></div><span className="pill">Last updated today</span></div><table><thead><tr><th>Product</th><th>SKU</th><th>Color</th><th>Variant</th><th>Landed cost</th><th>Status</th></tr></thead><tbody>{rows.map(r=><tr key={r[1]}>{r.map((c,i)=><td key={i}>{i===5?<span className={c==="Phase-out"?"status warn":"status"}>{c}</span>:c}</td>)}</tr>)}</tbody></table></div></PageShell>}
