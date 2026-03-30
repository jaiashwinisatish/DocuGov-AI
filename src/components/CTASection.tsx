import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden p-12 md:p-16 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/10" />
          <div className="absolute inset-0 glass" />

          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Start Managing Documents <span className="gradient-text">Smartly</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Join thousands of government agencies already using DocuGov AI to modernize their document workflows.
            </p>
            <Button variant="hero" size="lg" className="gap-2">
              Join Now <ArrowRight size={18} />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
