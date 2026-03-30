import { useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard, FileText, Upload, Search, ScanLine, Shield,
  User, Settings, Menu, X, ChevronDown, LogOut, Bell, FileCheck,
  FolderOpen, Brain, Lock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const menuItems = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    label: "Documents",
    icon: FolderOpen,
    children: [
      { label: "All Documents", icon: FileText, path: "/dashboard/documents" },
      { label: "Upload", icon: Upload, path: "/dashboard/documents/upload" },
    ],
  },
  {
    label: "AI Tools",
    icon: Brain,
    children: [
      { label: "OCR Scanner", icon: ScanLine, path: "/dashboard/ai/ocr" },
      { label: "Classification", icon: FileCheck, path: "/dashboard/ai/classify" },
      { label: "Smart Search", icon: Search, path: "/dashboard/ai/search" },
    ],
  },
  {
    label: "Verification",
    icon: Shield,
    path: "/dashboard/verification",
  },
  {
    label: "Access Control",
    icon: Lock,
    path: "/dashboard/access",
  },
  {
    label: "Profile",
    icon: User,
    path: "/dashboard/profile",
  },
  {
    label: "Settings",
    icon: Settings,
    path: "/dashboard/settings",
  },
];

const SidebarItem = ({
  item,
  collapsed,
  currentPath,
}: {
  item: (typeof menuItems)[0];
  collapsed: boolean;
  currentPath: string;
}) => {
  const [open, setOpen] = useState(
    item.children?.some((c) => currentPath.startsWith(c.path)) ?? false
  );
  const isActive = item.path ? currentPath === item.path : false;

  if (item.children) {
    return (
      <div>
        <button
          onClick={() => setOpen(!open)}
          className={cn(
            "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors",
            "text-muted-foreground hover:text-foreground hover:bg-muted/50",
            open && "text-foreground"
          )}
        >
          <item.icon className="h-4 w-4 shrink-0" />
          {!collapsed && (
            <>
              <span className="flex-1 text-left">{item.label}</span>
              <ChevronDown
                className={cn(
                  "h-3 w-3 transition-transform",
                  open && "rotate-180"
                )}
              />
            </>
          )}
        </button>
        <AnimatePresence>
          {open && !collapsed && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="ml-4 overflow-hidden"
            >
              {item.children.map((child) => (
                <Link
                  key={child.path}
                  to={child.path}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                    currentPath === child.path
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  <child.icon className="h-3.5 w-3.5 shrink-0" />
                  <span>{child.label}</span>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <Link
      to={item.path!}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors",
        isActive
          ? "bg-primary/10 text-primary font-medium"
          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
      )}
    >
      <item.icon className="h-4 w-4 shrink-0" />
      {!collapsed && <span>{item.label}</span>}
    </Link>
  );
};

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background flex">
      {/* Desktop Sidebar */}
      <aside
        className={cn(
          "hidden lg:flex flex-col border-r border-border bg-sidebar transition-all duration-300",
          sidebarOpen ? "w-64" : "w-16"
        )}
      >
        <div className="flex items-center gap-2 p-4 border-b border-border">
          <div className="gradient-btn rounded-lg p-2 shrink-0">
            <FileText className="h-4 w-4" />
          </div>
          {sidebarOpen && (
            <span className="font-display text-lg font-bold text-foreground whitespace-nowrap">
              DocuGov <span className="gradient-text">AI</span>
            </span>
          )}
        </div>

        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {menuItems.map((item) => (
            <SidebarItem
              key={item.label}
              item={item}
              collapsed={!sidebarOpen}
              currentPath={location.pathname}
            />
          ))}
        </nav>

        <div className="p-3 border-t border-border">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="flex items-center gap-3 w-full rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
          >
            <Menu className="h-4 w-4 shrink-0" />
            {sidebarOpen && <span>Collapse</span>}
          </button>
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              className="fixed left-0 top-0 bottom-0 w-64 bg-sidebar border-r border-border z-50 lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-4 border-b border-border">
                <div className="flex items-center gap-2">
                  <div className="gradient-btn rounded-lg p-2">
                    <FileText className="h-4 w-4" />
                  </div>
                  <span className="font-display text-lg font-bold text-foreground">
                    DocuGov <span className="gradient-text">AI</span>
                  </span>
                </div>
                <button onClick={() => setMobileOpen(false)}>
                  <X className="h-5 w-5 text-muted-foreground" />
                </button>
              </div>
              <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
                {menuItems.map((item) => (
                  <SidebarItem
                    key={item.label}
                    item={item}
                    collapsed={false}
                    currentPath={location.pathname}
                  />
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="h-14 border-b border-border bg-card/50 backdrop-blur-sm flex items-center justify-between px-4 sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (window.innerWidth < 1024) setMobileOpen(true);
                else setSidebarOpen(!sidebarOpen);
              }}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Menu className="h-5 w-5" />
            </button>
            <h1 className="text-sm font-medium text-foreground hidden sm:block">
              {menuItems
                .flatMap((i) => (i.children ? i.children : [i as { label: string; path: string }]))
                .find((i) => location.pathname === (i as { path?: string }).path)?.label || "Dashboard"}
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <User className="h-4 w-4" />
            </Button>
            <Link to="/">
              <Button variant="ghost" size="icon" className="text-muted-foreground">
                <LogOut className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
