import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, CheckCircle, Clock, XCircle, QrCode, Search, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const verifications = [
  { id: "VER-2024-001", doc: "Land_Title_2024.pdf", status: "verified", date: "2024-03-15", method: "AI + Manual" },
  { id: "VER-2024-002", doc: "Birth_Cert_9827.pdf", status: "verified", date: "2024-03-14", method: "AI Auto" },
  { id: "VER-2024-003", doc: "Tax_Record_441.pdf", status: "pending", date: "2024-03-13", method: "Pending" },
  { id: "VER-2024-004", doc: "Permit_Expired_22.pdf", status: "rejected", date: "2024-03-11", method: "AI + Manual" },
  { id: "VER-2024-005", doc: "Property_Deed_556.pdf", status: "verified", date: "2024-03-10", method: "AI Auto" },
];

const statusStyles: Record<string, { bg: string; icon: typeof CheckCircle }> = {
  verified: { bg: "bg-accent/10 text-accent border-accent/20", icon: CheckCircle },
  pending: { bg: "bg-secondary/10 text-secondary border-secondary/20", icon: Clock },
  rejected: { bg: "bg-destructive/10 text-destructive border-destructive/20", icon: XCircle },
};

const Verification = () => {
  const [qrMode, setQrMode] = useState(false);
  const [verifyId, setVerifyId] = useState("");
  const [verifyResult, setVerifyResult] = useState<null | "verified" | "not_found">(null);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setVerifyResult(verifyId.startsWith("VER") ? "verified" : "not_found");
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div>
        <h1 className="text-2xl font-display font-bold text-foreground">Document Verification</h1>
        <p className="text-muted-foreground mt-1">Verify document authenticity using ID or QR code</p>
      </div>

      {/* Quick Verify */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="glass border-border">
          <CardHeader>
            <CardTitle className="text-lg font-display flex items-center gap-2">
              <Search className="h-5 w-5 text-primary" /> Verify by ID
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleVerify} className="space-y-4">
              <Input placeholder="Enter Verification ID (e.g., VER-2024-001)" value={verifyId} onChange={(e) => { setVerifyId(e.target.value); setVerifyResult(null); }} className="bg-muted/50 border-border" />
              <Button variant="hero" className="w-full" type="submit">Verify Document</Button>
            </form>
            {verifyResult && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`mt-4 p-4 rounded-lg border ${verifyResult === "verified" ? "bg-accent/5 border-accent/20" : "bg-destructive/5 border-destructive/20"}`}>
                <div className="flex items-center gap-2">
                  {verifyResult === "verified" ? <CheckCircle className="h-5 w-5 text-accent" /> : <XCircle className="h-5 w-5 text-destructive" />}
                  <span className="font-medium text-foreground">{verifyResult === "verified" ? "Document Verified ✓" : "Document Not Found"}</span>
                </div>
              </motion.div>
            )}
          </CardContent>
        </Card>

        <Card className="glass border-border">
          <CardHeader>
            <CardTitle className="text-lg font-display flex items-center gap-2">
              <QrCode className="h-5 w-5 text-primary" /> QR Code Verification
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center py-8">
            <div className="p-6 rounded-2xl bg-muted/50 border border-border mb-4">
              <QrCode className="h-20 w-20 text-primary/40" />
            </div>
            <p className="text-sm text-muted-foreground mb-3">Scan QR code on document to verify</p>
            <Button variant="hero-outline" onClick={() => setQrMode(!qrMode)}>
              {qrMode ? "Close Scanner" : "Open Camera"}
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Verification History */}
      <Card className="glass border-border">
        <CardHeader><CardTitle className="text-lg font-display">Verification History</CardTitle></CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-3 text-muted-foreground font-medium">ID</th>
                  <th className="text-left p-3 text-muted-foreground font-medium">Document</th>
                  <th className="text-left p-3 text-muted-foreground font-medium hidden sm:table-cell">Date</th>
                  <th className="text-left p-3 text-muted-foreground font-medium hidden md:table-cell">Method</th>
                  <th className="text-left p-3 text-muted-foreground font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {verifications.map((v) => {
                  const st = statusStyles[v.status];
                  return (
                    <tr key={v.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                      <td className="p-3 font-mono text-xs text-foreground">{v.id}</td>
                      <td className="p-3 flex items-center gap-2"><FileText className="h-3.5 w-3.5 text-primary" />{v.doc}</td>
                      <td className="p-3 text-muted-foreground hidden sm:table-cell">{v.date}</td>
                      <td className="p-3 text-muted-foreground hidden md:table-cell">{v.method}</td>
                      <td className="p-3"><Badge variant="outline" className={st.bg}><st.icon className="h-3 w-3 mr-1" />{v.status}</Badge></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Verification;
