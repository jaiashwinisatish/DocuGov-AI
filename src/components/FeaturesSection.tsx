import { motion } from "framer-motion";
import { Shield, ScanLine, Brain, BadgeCheck, Lock, Search } from "lucide-react";

const features = [
  { icon: Shield, title: "Secure Digital Storage", desc: "Government-grade encrypted storage with redundant backups and compliance certifications." },
  { icon: ScanLine, title: "AI OCR Document Scanning", desc: "Extract text from scanned documents with 99.5% accuracy using advanced OCR models." },
  { icon: Brain, title: "Auto Classification (ML)", desc: "Machine learning automatically categorizes and tags documents by type and department." },
  { icon: BadgeCheck, title: "Document Verification", desc: "Verify document authenticity with digital signatures and blockchain-backed audit trails." },
  { icon: Lock, title: "Role-Based Access Control", desc: "Granular permissions ensure only authorized personnel access sensitive documents." },
  { icon: Search, title: "Real-Time Search & Retrieval", desc: "Find any document in milliseconds with AI-powered semantic search across all archives." },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(199_89%_48%_/_0.05)_0%,_transparent_60%)]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Features</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-4">
            Everything You Need to <span className="gradient-text">Digitize</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive suite of AI-powered tools designed for modern government document workflows.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-6 group hover:border-primary/30 transition-all duration-300 glow-border"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
