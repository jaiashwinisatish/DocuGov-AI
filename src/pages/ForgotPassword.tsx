import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FileText, Mail, ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ForgotPassword = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
        <div className="flex items-center gap-2 mb-8 justify-center">
          <div className="gradient-btn rounded-lg p-2"><FileText className="h-5 w-5" /></div>
          <span className="font-display text-xl font-bold text-foreground">DocuGov <span className="gradient-text">AI</span></span>
        </div>

        {!submitted ? (
          <>
            <h1 className="text-2xl font-display font-bold text-foreground mb-2">Reset your password</h1>
            <p className="text-muted-foreground mb-8">Enter your email and we'll send you a reset link</p>

            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input type="email" placeholder="name@example.com" className="pl-10 bg-muted/50 border-border" required />
                </div>
              </div>
              <Button variant="hero" className="w-full" type="submit">Send Reset Link</Button>
            </form>
          </>
        ) : (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-xl font-display font-bold text-foreground mb-2">Check your email</h2>
            <p className="text-muted-foreground mb-6">We've sent a password reset link to your email address.</p>
          </motion.div>
        )}

        <Link to="/login" className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground mt-6 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to sign in
        </Link>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
