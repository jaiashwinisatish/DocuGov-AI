import { motion } from "framer-motion";
import {
  FileText, CheckCircle, Clock, AlertTriangle, Upload, ScanLine, Search,
  TrendingUp, Users, Shield, ArrowUpRight
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const stats = [
  { label: "Total Documents", value: "12,847", icon: FileText, change: "+12%", color: "text-primary" },
  { label: "Verified", value: "10,234", icon: CheckCircle, change: "+8%", color: "text-accent" },
  { label: "Pending Review", value: "1,893", icon: Clock, change: "-3%", color: "text-secondary" },
  { label: "Flagged Issues", value: "720", icon: AlertTriangle, change: "-15%", color: "text-destructive" },
];

const quickActions = [
  { label: "Upload Document", icon: Upload, path: "/dashboard/documents/upload", variant: "hero" as const },
  { label: "OCR Scan", icon: ScanLine, path: "/dashboard/ai/ocr", variant: "hero-outline" as const },
  { label: "Smart Search", icon: Search, path: "/dashboard/ai/search", variant: "hero-outline" as const },
];

const recentActivity = [
  { action: "Document Uploaded", file: "Land_Title_2024.pdf", user: "Admin", time: "2 min ago", status: "success" },
  { action: "Verification Complete", file: "Birth_Cert_9827.pdf", user: "System AI", time: "15 min ago", status: "success" },
  { action: "OCR Processing", file: "Tax_Record_441.jpg", user: "System AI", time: "32 min ago", status: "pending" },
  { action: "Classification Updated", file: "License_Application.pdf", user: "Admin", time: "1 hr ago", status: "success" },
  { action: "Document Flagged", file: "Permit_Expired_22.pdf", user: "System AI", time: "2 hrs ago", status: "flagged" },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const DashboardHome = () => (
  <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
    {/* Stats */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s) => (
        <motion.div key={s.label} variants={item}>
          <Card className="glass border-border hover:border-primary/30 transition-colors">
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-3">
                <div className={`p-2 rounded-lg bg-muted/50 ${s.color}`}>
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-medium text-accent flex items-center gap-1">
                  {s.change} <TrendingUp className="h-3 w-3" />
                </span>
              </div>
              <p className="text-2xl font-display font-bold text-foreground">{s.value}</p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>

    {/* Quick Actions */}
    <motion.div variants={item}>
      <Card className="glass border-border">
        <CardHeader><CardTitle className="text-lg font-display">Quick Actions</CardTitle></CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          {quickActions.map((a) => (
            <Link key={a.path} to={a.path}>
              <Button variant={a.variant} className="gap-2">
                <a.icon className="h-4 w-4" /> {a.label}
              </Button>
            </Link>
          ))}
        </CardContent>
      </Card>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Recent Activity */}
      <motion.div variants={item} className="lg:col-span-2">
        <Card className="glass border-border">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-display">Recent Activity</CardTitle>
            <Link to="/dashboard/documents" className="text-xs text-primary hover:underline flex items-center gap-1">
              View all <ArrowUpRight className="h-3 w-3" />
            </Link>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentActivity.map((a, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                <div className={`w-2 h-2 rounded-full shrink-0 ${
                  a.status === "success" ? "bg-accent" : a.status === "pending" ? "bg-secondary" : "bg-destructive"
                }`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{a.action}</p>
                  <p className="text-xs text-muted-foreground truncate">{a.file}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-xs text-muted-foreground">{a.user}</p>
                  <p className="text-xs text-muted-foreground">{a.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </motion.div>

      {/* System Overview */}
      <motion.div variants={item}>
        <Card className="glass border-border">
          <CardHeader><CardTitle className="text-lg font-display">System Overview</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            {[
              { label: "Storage Used", value: "67%", icon: FileText },
              { label: "Active Users", value: "342", icon: Users },
              { label: "Security Score", value: "98%", icon: Shield },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                <s.icon className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground flex-1">{s.label}</span>
                <span className="text-sm font-bold text-foreground">{s.value}</span>
              </div>
            ))}
            <div className="pt-2">
              <div className="flex justify-between text-xs text-muted-foreground mb-1">
                <span>Storage</span><span>67 / 100 GB</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full rounded-full w-[67%]" style={{ background: "var(--gradient-primary)" }} />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </motion.div>
);

export default DashboardHome;
