import Link from "next/link";
import { navigation } from "@/lib/navigation";
import { Sparkles } from "lucide-react";

export function Sidebar() {
  return <aside className="sidebar">
    <div className="brand"><div className="brandMark"><Sparkles size={20}/></div><div><strong>Nexus AI</strong><span>Commercial Intelligence</span></div></div>
    <nav>{navigation.map(({href,label,icon:Icon}) => <Link href={href} key={href}><Icon size={18}/><span>{label}</span></Link>)}</nav>
    <div className="sidebarFoot"><div className="avatar">SA</div><div><strong>Salih</strong><span>Administrator</span></div></div>
  </aside>;
}
