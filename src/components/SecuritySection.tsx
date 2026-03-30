import { motion } from "framer-motion";
import { ShieldCheck, Lock, Fingerprint } from "lucide-react";

const items = [
  { icon: Lock, title: "End-to-End Encryption", desc: "AES-256 encryption protects documents at rest and in transit. Zero-knowledge architecture." },
  { icon: ShieldCheck, title: "Government-Grade Security", desc: "Compliant with FedRAMP, FISMA, and international data protection regulations." },
  { icon: Fingerprint, title: "Blockchain Verification", desc: "Immutable audit trails powered by blockchain ensure tamper-proof document history." },
];

const SecuritySection = () => {
  return (
    <section id="security" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(260_60%_20%_/_0.1)_0%,_transparent_70%)]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Security</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-4">
            Built for <span className="gradient-text">Maximum Security</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Your documents deserve the highest level of protection available.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-8 text-center group hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-3 text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
