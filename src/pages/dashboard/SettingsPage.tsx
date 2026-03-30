import { useState } from "react";
import { motion } from "framer-motion";
import { Settings, Bell, Lock, Globe, Palette, Save, Shield, Eye, EyeOff } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SettingsPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-display font-bold text-foreground">Settings</h1>

      {/* Appearance */}
      <Card className="glass border-border">
        <CardHeader>
          <CardTitle className="text-lg font-display flex items-center gap-2"><Palette className="h-5 w-5 text-primary" /> Appearance</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">Theme</p>
              <p className="text-xs text-muted-foreground">Choose your preferred theme</p>
            </div>
            <div className="flex gap-2">
              {["Dark", "Light", "System"].map((t) => (
                <button key={t} className={`px-4 py-2 rounded-lg text-sm border transition-colors ${t === "Dark" ? "bg-primary/10 border-primary text-primary" : "bg-muted/50 border-border text-muted-foreground hover:text-foreground"}`}>
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">Language</p>
              <p className="text-xs text-muted-foreground">Select display language</p>
            </div>
            <select className="h-9 rounded-md border border-border bg-muted/50 px-3 text-sm text-foreground">
              <option>English</option><option>Hindi</option><option>Tamil</option><option>Bengali</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card className="glass border-border">
        <CardHeader>
          <CardTitle className="text-lg font-display flex items-center gap-2"><Bell className="h-5 w-5 text-primary" /> Notifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { label: "Email Notifications", desc: "Receive email for document updates" },
            { label: "Document Verification Alerts", desc: "Get notified when documents are verified" },
            { label: "Security Alerts", desc: "Alerts for suspicious activity" },
          ].map((n, i) => (
            <div key={n.label} className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">{n.label}</p>
                <p className="text-xs text-muted-foreground">{n.desc}</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked={i < 2} className="sr-only peer" />
                <div className="w-10 h-5 bg-muted rounded-full peer peer-checked:bg-primary transition-colors after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-foreground after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-5" />
              </label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Security */}
      <Card className="glass border-border">
        <CardHeader>
          <CardTitle className="text-lg font-display flex items-center gap-2"><Shield className="h-5 w-5 text-primary" /> Security</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Current Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input type={showPassword ? "text" : "password"} placeholder="••••••••" className="pl-10 pr-10 bg-muted/50 border-border" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">New Password</label>
              <Input type="password" placeholder="••••••••" className="bg-muted/50 border-border" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Confirm Password</label>
              <Input type="password" placeholder="••••••••" className="bg-muted/50 border-border" />
            </div>
          </div>
          <div className="flex items-center justify-between pt-2">
            <div>
              <p className="text-sm font-medium text-foreground">Two-Factor Authentication</p>
              <p className="text-xs text-muted-foreground">Add an extra layer of security</p>
            </div>
            <Button variant="hero-outline" size="sm">Enable 2FA</Button>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button variant="hero" className="gap-2"><Save className="h-4 w-4" /> Save Settings</Button>
      </div>
    </motion.div>
  );
};

export default SettingsPage;
