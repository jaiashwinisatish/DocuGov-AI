import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FileText, Mail, Lock, Eye, EyeOff, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-background flex">
      <div className="hidden lg:flex flex-1 items-center justify-center p-12" style={{ background: "var(--gradient-hero)" }}>
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="max-w-md">
          <div className="flex items-center gap-3 mb-8">
            <div className="gradient-btn rounded-xl p-3"><FileText className="h-8 w-8" /></div>
            <span className="font-display text-3xl font-bold text-foreground">DocuGov <span className="gradient-text">AI</span></span>
          </div>
          <h2 className="text-2xl font-display font-bold text-foreground mb-4">Join the Future of Document Management</h2>
          <p className="text-muted-foreground text-lg">Create your account and start managing government documents with AI-powered tools.</p>
        </motion.div>
      </div>

      <div className="flex-1 flex items-center justify-center p-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
          <div className="lg:hidden flex items-center gap-2 mb-8 justify-center">
            <div className="gradient-btn rounded-lg p-2"><FileText className="h-5 w-5" /></div>
            <span className="font-display text-xl font-bold text-foreground">DocuGov <span className="gradient-text">AI</span></span>
          </div>

          <h1 className="text-2xl font-display font-bold text-foreground mb-2">Create an account</h1>
          <p className="text-muted-foreground mb-8">Get started with DocuGov AI</p>

          <form onSubmit={(e) => { e.preventDefault(); window.location.href = "/dashboard"; }} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">First Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="John" className="pl-10 bg-muted/50 border-border" required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Last Name</label>
                <Input placeholder="Doe" className="bg-muted/50 border-border" required />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input type="email" placeholder="name@example.com" className="pl-10 bg-muted/50 border-border" required />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input type={showPassword ? "text" : "password"} placeholder="••••••••" className="pl-10 pr-10 bg-muted/50 border-border" required />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <input type="checkbox" id="terms" className="mt-1 accent-primary" required />
              <label htmlFor="terms" className="text-sm text-muted-foreground">
                I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>
              </label>
            </div>

            <Button variant="hero" className="w-full" type="submit">Create Account</Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Already have an account? <Link to="/login" className="text-primary hover:underline font-medium">Sign in</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;
