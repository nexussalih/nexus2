import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="loginPage">
      <section className="loginPanel">
        <div className="loginBrand"><div className="brandMark">N</div><div><strong>Nexus AI</strong><span>Commercial Intelligence Platform</span></div></div>
        <div className="loginCopy">
          <span className="eyebrow">ENTERPRISE COMMERCIAL CONTROL</span>
          <h1>Turn sales and inventory data into purchasing decisions.</h1>
          <p>One workspace for performance, stock risk, demand forecasting, and supply planning.</p>
        </div>
        <div className="loginStats"><div><strong>18</strong><span>Iraqi markets</span></div><div><strong>360°</strong><span>Commercial view</span></div><div><strong>AI</strong><span>Decision support</span></div></div>
      </section>
      <section className="loginFormWrap">
        <form className="loginForm">
          <span className="eyebrow">SECURE ACCESS</span>
          <h2>Sign in to Nexus AI</h2>
          <p>Demo access is enabled for Sprint 1.</p>
          <label>Email address<input type="email" defaultValue="admin@nexus.local" /></label>
          <label>Password<input type="password" defaultValue="NexusDemo2026" /></label>
          <Link className="loginButton" href="/dashboard">Sign in</Link>
          <div className="demoNotice"><strong>Demo environment</strong><span>Authentication will be connected to the production user database in Sprint 2.</span></div>
        </form>
      </section>
    </main>
  );
}
