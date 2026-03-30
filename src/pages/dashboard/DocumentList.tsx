import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Search, Filter, Grid, List, Eye, Download, Trash2, MoreVertical, CheckCircle, Clock, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const documents = [
  { id: "1", name: "Land_Title_2024.pdf", category: "Land Records", date: "2024-03-15", size: "2.4 MB", status: "verified" },
  { id: "2", name: "Birth_Certificate_9827.pdf", category: "Certificates", date: "2024-03-14", size: "1.1 MB", status: "verified" },
  { id: "3", name: "Tax_Record_441.pdf", category: "Tax Records", date: "2024-03-13", size: "3.8 MB", status: "pending" },
  { id: "4", name: "License_Application.pdf", category: "Licenses", date: "2024-03-12", size: "0.9 MB", status: "verified" },
  { id: "5", name: "Permit_Expired_22.pdf", category: "Permits", date: "2024-03-11", size: "1.6 MB", status: "rejected" },
  { id: "6", name: "Property_Deed_556.pdf", category: "Land Records", date: "2024-03-10", size: "4.2 MB", status: "verified" },
  { id: "7", name: "Marriage_Cert_1123.pdf", category: "Certificates", date: "2024-03-09", size: "0.8 MB", status: "pending" },
  { id: "8", name: "Business_License_789.pdf", category: "Licenses", date: "2024-03-08", size: "1.3 MB", status: "verified" },
];

const statusConfig: Record<string, { color: string; icon: typeof CheckCircle }> = {
  verified: { color: "bg-accent/10 text-accent border-accent/20", icon: CheckCircle },
  pending: { color: "bg-secondary/10 text-secondary border-secondary/20", icon: Clock },
  rejected: { color: "bg-destructive/10 text-destructive border-destructive/20", icon: AlertTriangle },
};

const DocumentList = () => {
  const [view, setView] = useState<"table" | "grid">("table");
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  const filtered = documents.filter(
    (d) =>
      d.name.toLowerCase().includes(search.toLowerCase()) &&
      (!filterCategory || d.category === filterCategory)
  );

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-display font-bold text-foreground">Documents</h1>
          <p className="text-muted-foreground mt-1">{documents.length} documents total</p>
        </div>
        <Link to="/dashboard/documents/upload">
          <Button variant="hero" className="gap-2"><FileText className="h-4 w-4" /> Upload New</Button>
        </Link>
      </div>

      {/* Filters */}
      <Card className="glass border-border">
        <CardContent className="p-4 flex flex-wrap gap-3 items-center">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search documents..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10 bg-muted/50 border-border" />
          </div>
          <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} className="h-10 rounded-md border border-border bg-muted/50 px-3 text-sm text-foreground">
            <option value="">All Categories</option>
            <option>Land Records</option>
            <option>Certificates</option>
            <option>Tax Records</option>
            <option>Licenses</option>
            <option>Permits</option>
          </select>
          <div className="flex gap-1 border border-border rounded-lg p-1">
            <button onClick={() => setView("table")} className={`p-1.5 rounded ${view === "table" ? "bg-primary/10 text-primary" : "text-muted-foreground"}`}><List className="h-4 w-4" /></button>
            <button onClick={() => setView("grid")} className={`p-1.5 rounded ${view === "grid" ? "bg-primary/10 text-primary" : "text-muted-foreground"}`}><Grid className="h-4 w-4" /></button>
          </div>
        </CardContent>
      </Card>

      {/* Table View */}
      {view === "table" ? (
        <Card className="glass border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 text-muted-foreground font-medium">Document</th>
                  <th className="text-left p-4 text-muted-foreground font-medium hidden md:table-cell">Category</th>
                  <th className="text-left p-4 text-muted-foreground font-medium hidden sm:table-cell">Date</th>
                  <th className="text-left p-4 text-muted-foreground font-medium hidden lg:table-cell">Size</th>
                  <th className="text-left p-4 text-muted-foreground font-medium">Status</th>
                  <th className="text-right p-4 text-muted-foreground font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((doc) => {
                  const st = statusConfig[doc.status];
                  return (
                    <tr key={doc.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <FileText className="h-4 w-4 text-primary shrink-0" />
                          <Link to={`/dashboard/documents/${doc.id}`} className="font-medium text-foreground hover:text-primary truncate max-w-[200px]">{doc.name}</Link>
                        </div>
                      </td>
                      <td className="p-4 text-muted-foreground hidden md:table-cell">{doc.category}</td>
                      <td className="p-4 text-muted-foreground hidden sm:table-cell">{doc.date}</td>
                      <td className="p-4 text-muted-foreground hidden lg:table-cell">{doc.size}</td>
                      <td className="p-4">
                        <Badge variant="outline" className={st.color}>
                          <st.icon className="h-3 w-3 mr-1" /> {doc.status}
                        </Badge>
                      </td>
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <Link to={`/dashboard/documents/${doc.id}`}><Button variant="ghost" size="icon" className="h-8 w-8"><Eye className="h-3.5 w-3.5" /></Button></Link>
                          <Button variant="ghost" size="icon" className="h-8 w-8"><Download className="h-3.5 w-3.5" /></Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive"><Trash2 className="h-3.5 w-3.5" /></Button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>
      ) : (
        /* Grid View */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((doc) => {
            const st = statusConfig[doc.status];
            return (
              <motion.div key={doc.id} whileHover={{ y: -2 }}>
                <Card className="glass border-border hover:border-primary/30 transition-colors">
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-2 rounded-lg bg-primary/10"><FileText className="h-5 w-5 text-primary" /></div>
                      <Badge variant="outline" className={st.color}>{doc.status}</Badge>
                    </div>
                    <Link to={`/dashboard/documents/${doc.id}`}>
                      <h3 className="font-medium text-foreground hover:text-primary truncate mb-1">{doc.name}</h3>
                    </Link>
                    <p className="text-xs text-muted-foreground">{doc.category} • {doc.size}</p>
                    <p className="text-xs text-muted-foreground mt-1">{doc.date}</p>
                    <div className="flex gap-1 mt-3 pt-3 border-t border-border/50">
                      <Link to={`/dashboard/documents/${doc.id}`}><Button variant="ghost" size="sm" className="h-7 text-xs"><Eye className="h-3 w-3 mr-1" /> View</Button></Link>
                      <Button variant="ghost" size="sm" className="h-7 text-xs"><Download className="h-3 w-3 mr-1" /> Download</Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      )}
    </motion.div>
  );
};

export default DocumentList;
