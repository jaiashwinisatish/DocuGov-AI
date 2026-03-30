import { motion } from "framer-motion";
import { Brain, FileText, Tag, ArrowRight, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const results = [
  { file: "Land_Title_2024.pdf", category: "Legal – Property", confidence: 97, tags: ["Land", "Title", "Property"] },
  { file: "Birth_Certificate.pdf", category: "Identity – Civil", confidence: 99, tags: ["Birth", "Certificate", "Identity"] },
  { file: "Tax_Record_441.pdf", category: "Financial – Tax", confidence: 94, tags: ["Tax", "Revenue", "Financial"] },
  { file: "License_App.pdf", category: "Regulatory – License", confidence: 91, tags: ["License", "Permit", "Regulatory"] },
  { file: "Court_Order_88.pdf", category: "Legal – Judicial", confidence: 88, tags: ["Court", "Order", "Legal"] },
];

const Classification = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
    <div>
      <h1 className="text-2xl font-display font-bold text-foreground">Auto Classification</h1>
      <p className="text-muted-foreground mt-1">AI-powered document classification using machine learning</p>
    </div>

    {/* Summary */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {[
        { label: "Total Classified", value: "10,234", icon: FileText },
        { label: "Categories", value: "24", icon: Tag },
        { label: "Avg Confidence", value: "94%", icon: Brain },
      ].map((s) => (
        <Card key={s.label} className="glass border-border">
          <CardContent className="p-5 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10"><s.icon className="h-5 w-5 text-primary" /></div>
            <div>
              <p className="text-xl font-display font-bold text-foreground">{s.value}</p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>

    {/* Results */}
    <Card className="glass border-border">
      <CardHeader><CardTitle className="text-lg font-display">Recent Classifications</CardTitle></CardHeader>
      <CardContent className="space-y-3">
        {results.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
          >
            <FileText className="h-5 w-5 text-primary shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{r.file}</p>
              <div className="flex flex-wrap gap-1 mt-1">
                {r.tags.map((t) => (
                  <Badge key={t} variant="outline" className="text-xs bg-muted/50 border-border text-muted-foreground">{t}</Badge>
                ))}
              </div>
            </div>
            <div className="text-right shrink-0">
              <div className="flex items-center gap-1 text-sm font-medium text-foreground">
                <ArrowRight className="h-3 w-3 text-primary" /> {r.category}
              </div>
              <div className="flex items-center gap-1 text-xs text-accent mt-1">
                <CheckCircle className="h-3 w-3" /> {r.confidence}% confidence
              </div>
            </div>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  </motion.div>
);

export default Classification;
