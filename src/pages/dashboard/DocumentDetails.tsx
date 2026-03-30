import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FileText, ArrowLeft, Download, Trash2, Edit, CheckCircle, Clock, Calendar, HardDrive, Tag, User, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const DocumentDetails = () => {
  const { id } = useParams();

  const doc = {
    id,
    name: "Land_Title_2024.pdf",
    category: "Land Records",
    date: "2024-03-15",
    size: "2.4 MB",
    status: "verified",
    uploadedBy: "Admin User",
    description: "Official land title document for property registration in District 7, Block C.",
    pages: 4,
    ocrCompleted: true,
    classification: "Legal – Property",
    verifiedBy: "System AI",
    verifiedDate: "2024-03-15",
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-3">
        <Link to="/dashboard/documents">
          <Button variant="ghost" size="icon"><ArrowLeft className="h-4 w-4" /></Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-2xl font-display font-bold text-foreground">{doc.name}</h1>
          <p className="text-muted-foreground mt-1">{doc.description}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="hero-outline" size="sm"><Edit className="h-4 w-4 mr-1" /> Edit</Button>
          <Button variant="hero" size="sm"><Download className="h-4 w-4 mr-1" /> Download</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Document Preview */}
        <div className="lg:col-span-2">
          <Card className="glass border-border">
            <CardHeader><CardTitle className="text-lg font-display">Document Preview</CardTitle></CardHeader>
            <CardContent>
              <div className="bg-muted/50 rounded-lg h-[500px] flex items-center justify-center border border-border">
                <div className="text-center">
                  <FileText className="h-16 w-16 text-primary/30 mx-auto mb-4" />
                  <p className="text-muted-foreground">Document preview would render here</p>
                  <p className="text-sm text-muted-foreground mt-1">{doc.pages} pages • {doc.size}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Metadata */}
        <div className="space-y-6">
          <Card className="glass border-border">
            <CardHeader><CardTitle className="text-lg font-display">Details</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              {[
                { icon: Tag, label: "Category", value: doc.category },
                { icon: Calendar, label: "Upload Date", value: doc.date },
                { icon: HardDrive, label: "File Size", value: doc.size },
                { icon: User, label: "Uploaded By", value: doc.uploadedBy },
                { icon: FileText, label: "Pages", value: String(doc.pages) },
              ].map((m) => (
                <div key={m.label} className="flex items-center gap-3">
                  <m.icon className="h-4 w-4 text-muted-foreground shrink-0" />
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground">{m.label}</p>
                    <p className="text-sm font-medium text-foreground">{m.value}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="glass border-border">
            <CardHeader><CardTitle className="text-lg font-display">Verification</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                  <CheckCircle className="h-3 w-3 mr-1" /> Verified
                </Badge>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Verified By</p>
                  <p className="text-sm font-medium text-foreground">{doc.verifiedBy}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Verified Date</p>
                  <p className="text-sm font-medium text-foreground">{doc.verifiedDate}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-border">
            <CardHeader><CardTitle className="text-lg font-display">AI Analysis</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">OCR Completed</span>
                <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">Yes</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Classification</span>
                <span className="text-sm font-medium text-foreground">{doc.classification}</span>
              </div>
            </CardContent>
          </Card>

          <Button variant="ghost" className="w-full text-destructive hover:text-destructive hover:bg-destructive/10 gap-2">
            <Trash2 className="h-4 w-4" /> Delete Document
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default DocumentDetails;
