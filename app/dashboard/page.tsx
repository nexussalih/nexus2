import { KpiCard } from "@/components/kpi-card";
import { PageShell } from "@/components/page-shell";
const products=[
  ["iPhone 16 Pro 256GB","312","$337,428","68%","Healthy"],
  ["iPhone 16 128GB","286","$237,094","74%","Healthy"],
  ["iPhone 16 Pro Max 512GB","148","$207,052","41%","Reorder"],
  ["AirPods Pro 2","426","$105,648","82%","Healthy"],
];
export default function Dashboard(){return <PageShell><section className="pageHeading"><div><span className="eyebrow">EXECUTIVE OVERVIEW</span><h2>Business performance</h2><p>Current commercial position across sales, stock and purchasing.</p></div><button className="primaryButton">Generate management brief</button></section>
<div className="kpiGrid"><KpiCard label="Revenue — MTD" value="$2.48M" change="+12.4% vs last month"/><KpiCard label="Gross Profit" value="$286K" change="+8.7%" note="11.5% gross margin"/><KpiCard label="Inventory Value" value="$4.12M" change="-3.1%" note="62 days of cover"/><KpiCard label="Open Purchase Orders" value="$1.36M" change="14 active POs" note="Next arrival in 8 days"/></div>
<div className="gridTwo"><div className="card panel"><div className="panelHeader"><div><h3>Revenue performance</h3><p>Monthly revenue and target attainment</p></div><span className="pill">Last 6 months</span></div><div className="barChart">{[55,68,61,79,74,92].map((v,i)=><div className="barItem" key={i}><div className="bar" style={{height:`${v}%`}}></div><span>{["Feb","Mar","Apr","May","Jun","Jul"][i]}</span></div>)}</div></div>
<div className="card panel"><div className="panelHeader"><div><h3>Decision queue</h3><p>Items requiring management attention</p></div><span className="countBadge">4</span></div><div className="decision"><span className="risk high">HIGH</span><div><strong>iPhone 16 Pro Max 512GB</strong><p>Projected stockout in 13 days. Lead time is 30 days.</p></div></div><div className="decision"><span className="risk medium">MED</span><div><strong>Purchase order approval</strong><p>PO-2026-017 is above the standard approval threshold.</p></div></div><div className="decision"><span className="risk low">LOW</span><div><strong>Slow-moving inventory</strong><p>Four SKUs exceeded 120 days of stock cover.</p></div></div></div></div>
<div className="card tableCard"><div className="panelHeader"><div><h3>Product performance</h3><p>Highest revenue contributors this month</p></div><button className="secondaryButton">View all products</button></div><table><thead><tr><th>Product</th><th>Units</th><th>Revenue</th><th>Sell-through</th><th>Status</th></tr></thead><tbody>{products.map((r)=><tr key={r[0]}>{r.map((c,i)=><td key={i}>{i===4?<span className={c==="Reorder"?"status warn":"status"}>{c}</span>:c}</td>)}</tr>)}</tbody></table></div>
</PageShell>}
