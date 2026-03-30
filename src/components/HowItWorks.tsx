import { motion } from "framer-motion";
import { Upload, Cpu, Database } from "lucide-react";

const steps = [
  { icon: Upload, num: "01", title: "Upload / Scan Documents", desc: "Upload digital files or scan physical documents directly into the platform." },
  { icon: Cpu, num: "02", title: "AI Digitizes & Classifies", desc: "Our AI engine extracts text, classifies content, and organizes metadata automatically." },
  { icon: Database, num: "03", title: "Store, Verify & Access", desc: "Documents are securely stored, verified, and instantly accessible to authorized users." },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">How It Works</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-4">
            Three Simple <span className="gradient-text">Steps</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From paper to digital in minutes — powered by AI every step of the way.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center relative"
            >
              <div className="w-20 h-20 mx-auto rounded-2xl glass flex items-center justify-center mb-6 relative">
                <s.icon className="h-8 w-8 text-primary" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full gradient-btn text-xs flex items-center justify-center font-bold">
                  {s.num}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
