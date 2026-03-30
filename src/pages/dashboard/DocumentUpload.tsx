import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Upload, FileText, X, CheckCircle, CloudUpload } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface FileItem {
  name: string;
  size: string;
  progress: number;
  status: "uploading" | "complete" | "error";
}

const DocumentUpload = () => {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState<FileItem[]>([]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    const dropped = Array.from(e.dataTransfer.files);
    addFiles(dropped);
  }, []);

  const addFiles = (newFiles: File[]) => {
    const items: FileItem[] = newFiles.map((f) => ({
      name: f.name,
      size: `${(f.size / 1024 / 1024).toFixed(2)} MB`,
      progress: 0,
      status: "uploading" as const,
    }));
    setFiles((prev) => [...prev, ...items]);
    // Simulate upload progress
    items.forEach((_, idx) => {
      const interval = setInterval(() => {
        setFiles((prev) => {
          const updated = [...prev];
          const targetIdx = prev.length - items.length + idx;
          if (updated[targetIdx]) {
            updated[targetIdx] = {
              ...updated[targetIdx],
              progress: Math.min(updated[targetIdx].progress + 15, 100),
              status: updated[targetIdx].progress >= 85 ? "complete" : "uploading",
            };
          }
          return updated;
        });
      }, 300);
      setTimeout(() => clearInterval(interval), 3000);
    });
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 max-w-3xl mx-auto">
      <div>
        <h1 className="text-2xl font-display font-bold text-foreground">Upload Documents</h1>
        <p className="text-muted-foreground mt-1">Drag & drop or browse to upload government documents</p>
      </div>

      {/* Drop Zone */}
      <Card
        className={`glass border-2 border-dashed transition-colors cursor-pointer ${
          dragActive ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
        }`}
        onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
        onDragLeave={() => setDragActive(false)}
        onDrop={handleDrop}
        onClick={() => document.getElementById("file-input")?.click()}
      >
        <CardContent className="flex flex-col items-center justify-center py-16">
          <motion.div animate={{ y: dragActive ? -10 : 0 }} className="mb-4">
            <div className="p-4 rounded-2xl bg-primary/10">
              <CloudUpload className="h-10 w-10 text-primary" />
            </div>
          </motion.div>
          <p className="text-foreground font-medium mb-1">Drop files here or click to browse</p>
          <p className="text-sm text-muted-foreground">Supports PDF, JPG, PNG, TIFF (Max 50MB)</p>
          <input
            id="file-input"
            type="file"
            multiple
            accept=".pdf,.jpg,.jpeg,.png,.tiff"
            className="hidden"
            onChange={(e) => e.target.files && addFiles(Array.from(e.target.files))}
          />
        </CardContent>
      </Card>

      {/* Document Metadata */}
      <Card className="glass border-border">
        <CardHeader><CardTitle className="text-lg font-display">Document Details</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Document Title</label>
              <Input placeholder="Enter title" className="bg-muted/50 border-border" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Category</label>
              <select className="w-full h-10 rounded-md border border-border bg-muted/50 px-3 text-sm text-foreground">
                <option value="">Select category</option>
                <option>Land Records</option>
                <option>Birth Certificates</option>
                <option>Tax Records</option>
                <option>Licenses & Permits</option>
                <option>Legal Documents</option>
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Description</label>
            <textarea
              className="w-full min-h-[80px] rounded-md border border-border bg-muted/50 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground"
              placeholder="Optional description..."
            />
          </div>
        </CardContent>
      </Card>

      {/* File List */}
      {files.length > 0 && (
        <Card className="glass border-border">
          <CardHeader><CardTitle className="text-lg font-display">Uploaded Files</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            {files.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 p-3 rounded-lg bg-muted/30"
              >
                <FileText className="h-5 w-5 text-primary shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{f.name}</p>
                  <p className="text-xs text-muted-foreground">{f.size}</p>
                  {f.status === "uploading" && (
                    <div className="h-1.5 bg-muted rounded-full mt-1 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: "var(--gradient-primary)", width: `${f.progress}%` }}
                        animate={{ width: `${f.progress}%` }}
                      />
                    </div>
                  )}
                </div>
                {f.status === "complete" ? (
                  <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                ) : (
                  <button onClick={() => setFiles(files.filter((_, j) => j !== i))}>
                    <X className="h-4 w-4 text-muted-foreground hover:text-destructive" />
                  </button>
                )}
              </motion.div>
            ))}
          </CardContent>
        </Card>
      )}

      <div className="flex justify-end gap-3">
        <Button variant="hero-outline">Cancel</Button>
        <Button variant="hero">
          <Upload className="h-4 w-4" /> Upload Documents
        </Button>
      </div>
    </motion.div>
  );
};

export default DocumentUpload;
