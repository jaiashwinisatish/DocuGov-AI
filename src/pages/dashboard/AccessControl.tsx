import { motion } from "framer-motion";
import { Shield, Users, Lock, Eye, Edit, Trash2, Plus, Crown, UserCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const users = [
  { name: "Rajesh Kumar", email: "rajesh@gov.in", role: "Admin", status: "Active", lastLogin: "2 hrs ago" },
  { name: "Priya Sharma", email: "priya@gov.in", role: "Manager", status: "Active", lastLogin: "5 hrs ago" },
  { name: "Amit Singh", email: "amit@gov.in", role: "Viewer", status: "Active", lastLogin: "1 day ago" },
  { name: "Neha Patel", email: "neha@gov.in", role: "Editor", status: "Inactive", lastLogin: "7 days ago" },
];

const roles = [
  { name: "Admin", count: 2, permissions: ["Full Access", "User Management", "Settings"], icon: Crown, color: "text-destructive" },
  { name: "Manager", count: 5, permissions: ["Upload", "Edit", "Verify", "View"], icon: Shield, color: "text-secondary" },
  { name: "Editor", count: 12, permissions: ["Upload", "Edit", "View"], icon: Edit, color: "text-primary" },
  { name: "Viewer", count: 28, permissions: ["View Only"], icon: Eye, color: "text-accent" },
];

const AccessControl = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-display font-bold text-foreground">Access Control</h1>
        <p className="text-muted-foreground mt-1">Manage users, roles, and permissions</p>
      </div>
      <Button variant="hero" className="gap-2"><Plus className="h-4 w-4" /> Add User</Button>
    </div>

    {/* Roles Overview */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {roles.map((r) => (
        <Card key={r.name} className="glass border-border hover:border-primary/30 transition-colors">
          <CardContent className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className={`p-2 rounded-lg bg-muted/50 ${r.color}`}><r.icon className="h-5 w-5" /></div>
              <div>
                <p className="font-medium text-foreground">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.count} users</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1">
              {r.permissions.map((p) => (
                <Badge key={p} variant="outline" className="text-xs bg-muted/50 border-border text-muted-foreground">{p}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>

    {/* Users Table */}
    <Card className="glass border-border">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-display">Team Members</CardTitle>
        <Badge variant="outline" className="bg-muted/50 border-border"><Users className="h-3 w-3 mr-1" /> {users.length} users</Badge>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-3 text-muted-foreground font-medium">User</th>
                <th className="text-left p-3 text-muted-foreground font-medium hidden sm:table-cell">Role</th>
                <th className="text-left p-3 text-muted-foreground font-medium hidden md:table-cell">Status</th>
                <th className="text-left p-3 text-muted-foreground font-medium hidden lg:table-cell">Last Login</th>
                <th className="text-right p-3 text-muted-foreground font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.email} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium text-xs">
                        {u.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{u.name}</p>
                        <p className="text-xs text-muted-foreground">{u.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-3 hidden sm:table-cell">
                    <Badge variant="outline" className="bg-muted/50 border-border">{u.role}</Badge>
                  </td>
                  <td className="p-3 hidden md:table-cell">
                    <span className={`inline-flex items-center gap-1 text-xs ${u.status === "Active" ? "text-accent" : "text-muted-foreground"}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${u.status === "Active" ? "bg-accent" : "bg-muted-foreground"}`} />
                      {u.status}
                    </span>
                  </td>
                  <td className="p-3 text-muted-foreground hidden lg:table-cell">{u.lastLogin}</td>
                  <td className="p-3 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8"><Edit className="h-3.5 w-3.5" /></Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive"><Trash2 className="h-3.5 w-3.5" /></Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

export default AccessControl;
