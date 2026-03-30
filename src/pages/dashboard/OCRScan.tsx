import { useState } from "react";
import { motion } from "framer-motion";
import { ScanLine, Upload, FileText, Copy, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const sampleOCR = `GOVERNMENT OF INDIA
MINISTRY OF HOME AFFAIRS

Certificate No: GI-2024-78934
Date of Issue: March 15, 2024

This is to certify that the document bearing 
reference number LT/2024/7893 has been 
verified and authenticated by the authorized 
government body.

Authorized Signatory: Dr. Rajesh Kumar
Designation: Deputy Secretary
Department: Land Revenue & Registration

Digital Signature: ████████████████
Blockchain Hash: 0x3f8a...7e2d`;

const OCRScan = () => {
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);

  const handleScan = () => {
    setScanning(true);
    setResult("");
    let i = 0;
    const interval = setInterval(() => {
      setResult(sampleOCR.slice(0, i));
      i += 5;
      if (i > sampleOCR.length) {
        clearInterval(interval);
        setScanning(false);
        setResult(sampleOCR);
      }
    }, 20);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-display font-bold text-foreground">AI OCR Scanner</h1>
        <p className="text-muted-foreground mt-1">Upload an image or scanned document to extract text using AI</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upload */}
        <Card className="glass border-border">
          <CardHeader><CardTitle className="text-lg font-display">Upload Image</CardTitle></CardHeader>
          <CardContent>
            <div
              className="border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer hover:border-primary/50 transition-colors"
              onClick={() => document.getElementById("ocr-input")?.click()}
            >
              <Upload className="h-10 w-10 text-primary/50 mx-auto mb-3" />
              <p className="text-sm text-foreground font-medium">Click to upload image</p>
              <p className="text-xs text-muted-foreground mt-1">JPG, PNG, TIFF supported</p>
              <input id="ocr-input" type="file" accept="image/*" className="hidden" onChange={handleScan} />
            </div>

            <Button variant="hero" className="w-full mt-4 gap-2" onClick={handleScan} disabled={scanning}>
              <ScanLine className={`h-4 w-4 ${scanning ? "animate-pulse" : ""}`} />
              {scanning ? "Scanning..." : "Start OCR Scan"}
            </Button>
          </CardContent>
        </Card>

        {/* Result */}
        <Card className="glass border-border">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-display">Extracted Text</CardTitle>
            {result && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => { navigator.clipboard.writeText(result); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
                className="gap-1"
              >
                {copied ? <CheckCircle className="h-3.5 w-3.5 text-accent" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? "Copied" : "Copy"}
              </Button>
            )}
          </CardHeader>
          <CardContent>
            <div className="bg-muted/50 rounded-lg p-4 min-h-[300px] border border-border font-mono text-sm">
              {result ? (
                <pre className="whitespace-pre-wrap text-foreground">{result}</pre>
              ) : (
                <div className="flex flex-col items-center justify-center h-[300px] text-muted-foreground">
                  <FileText className="h-10 w-10 mb-3 opacity-30" />
                  <p className="text-sm">Extracted text will appear here</p>
                </div>
              )}
              {scanning && <span className="inline-block w-2 h-4 bg-primary animate-pulse ml-0.5" />}
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

export default OCRScan;
