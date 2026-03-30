import { motion } from "framer-motion";
import { User, Mail, Phone, Building, MapPin, Camera, Save } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Profile = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 max-w-3xl mx-auto">
    <h1 className="text-2xl font-display font-bold text-foreground">My Profile</h1>

    {/* Avatar */}
    <Card className="glass border-border">
      <CardContent className="p-6 flex flex-col sm:flex-row items-center gap-6">
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-display font-bold">
            RK
          </div>
          <button className="absolute bottom-0 right-0 p-1.5 rounded-full bg-primary text-primary-foreground">
            <Camera className="h-3.5 w-3.5" />
          </button>
        </div>
        <div>
          <h2 className="text-xl font-display font-bold text-foreground">Rajesh Kumar</h2>
          <p className="text-muted-foreground">System Administrator</p>
          <p className="text-xs text-muted-foreground mt-1">Member since March 2024</p>
        </div>
      </CardContent>
    </Card>

    {/* Form */}
    <Card className="glass border-border">
      <CardHeader><CardTitle className="text-lg font-display">Personal Information</CardTitle></CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: "First Name", icon: User, value: "Rajesh" },
            { label: "Last Name", icon: User, value: "Kumar" },
            { label: "Email", icon: Mail, value: "rajesh@gov.in" },
            { label: "Phone", icon: Phone, value: "+91 98765 43210" },
            { label: "Department", icon: Building, value: "Land Revenue" },
            { label: "Location", icon: MapPin, value: "New Delhi, India" },
          ].map((f) => (
            <div key={f.label} className="space-y-2">
              <label className="text-sm font-medium text-foreground">{f.label}</label>
              <div className="relative">
                <f.icon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input defaultValue={f.value} className="pl-10 bg-muted/50 border-border" />
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Bio</label>
          <textarea className="w-full min-h-[80px] rounded-md border border-border bg-muted/50 px-3 py-2 text-sm text-foreground" defaultValue="System administrator with 10+ years of experience in government document management." />
        </div>
        <div className="flex justify-end">
          <Button variant="hero" className="gap-2"><Save className="h-4 w-4" /> Save Changes</Button>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

export default Profile;
