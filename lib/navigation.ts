import { BarChart3, Boxes, Building2, ChartNoAxesCombined, ClipboardList, LayoutDashboard, PackageSearch, Settings, Sparkles, Store } from "lucide-react";

export const navigation = [
  { href: "/dashboard", label: "Executive Dashboard", icon: LayoutDashboard },
  { href: "/analytics", label: "Sales Analytics", icon: BarChart3 },
  { href: "/products", label: "Products", icon: PackageSearch },
  { href: "/inventory", label: "Inventory", icon: Boxes },
  { href: "/purchasing", label: "Purchase Planning", icon: ClipboardList },
  { href: "/suppliers", label: "Suppliers", icon: Building2 },
  { href: "/forecast", label: "Demand Forecast", icon: ChartNoAxesCombined },
  { href: "/settings", label: "Administration", icon: Settings },
];
