import { Sidebar } from "@/components/sidebar";
import { Topbar } from "@/components/topbar";
export function PageShell({children}:{children:React.ReactNode}){return <div className="appShell"><Sidebar/><div className="main"><Topbar/><main className="content">{children}</main></div></div>}
