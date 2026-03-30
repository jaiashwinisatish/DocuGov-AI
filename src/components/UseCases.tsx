import { motion } from "framer-motion";
import { Building2, HeartPulse, GraduationCap, User } from "lucide-react";

const cases = [
  { icon: Building2, title: "Government Offices", desc: "Streamline citizen record management, policy documents, and inter-departmental workflows." },
  { icon: HeartPulse, title: "Hospitals", desc: "Digitize patient records, lab reports, and medical histories with HIPAA compliance." },
  { icon: GraduationCap, title: "Universities", desc: "Manage transcripts, certificates, and research papers with instant verification." },
  { icon: User, title: "Citizens", desc: "Access, verify, and share your personal government documents from anywhere." },
];

const UseCases = () => {
  return (
    <section id="use-cases" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Use Cases</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-4">
            Who Benefits from <span className="gradient-text">DocuGov AI</span>?
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass rounded-xl p-6 text-center cursor-default transition-all duration-300 hover:border-primary/30"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <c.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
