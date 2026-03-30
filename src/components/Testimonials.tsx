import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Director, Dept. of Records",
    text: "DocuGov AI transformed our 30-year paper archive into a searchable digital system in weeks. The AI classification alone saved us thousands of manual hours.",
  },
  {
    name: "Dr. Rajesh Kumar",
    role: "CIO, State Health Ministry",
    text: "The security and compliance features gave us complete confidence. Patient records are now accessible to authorized staff in seconds, not days.",
  },
  {
    name: "Amanda Chen",
    role: "University Registrar",
    text: "Students can now verify their transcripts instantly. The blockchain verification feature has eliminated certificate fraud entirely.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(199_89%_48%_/_0.05)_0%,_transparent_60%)]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Testimonials</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-4">
            Trusted by <span className="gradient-text">Leaders</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-6"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">"{t.text}"</p>
              <div>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
