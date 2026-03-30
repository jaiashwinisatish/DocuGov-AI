import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-illustration.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(260_60%_20%_/_0.3)_0%,_transparent_60%)]" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-secondary/10 blur-[120px]" />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-6"
          >
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse-glow" />
            Trusted by 200+ Government Agencies
          </motion.div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            AI-Powered{" "}
            <span className="gradient-text">Government Document</span>{" "}
            Management
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
            Securely store, digitize, verify, and manage government documents
            with cutting-edge AI. End-to-end encryption meets intelligent
            automation.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="hero" className="gap-2">
              Get Started <ArrowRight size={16} />
            </Button>
            <Button variant="hero-outline" className="gap-2">
              <Play size={16} /> View Demo
            </Button>
          </div>

          <div className="flex items-center gap-6 mt-10 text-sm text-muted-foreground">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs font-bold text-foreground"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <span>Join 10,000+ users today</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <div className="relative animate-float">
            <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-3xl" />
            <img
              src={heroImg}
              alt="AI Document Management Platform"
              className="relative rounded-2xl border border-border shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
