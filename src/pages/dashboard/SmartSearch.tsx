import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, FileText, SlidersHorizontal, Calendar, Tag, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const searchResults = [
  { name: "Land_Title_2024.pdf", category: "Land Records", relevance: 98, snippet: "...official land title document for property registration in District 7..." },
  { name: "Property_Deed_556.pdf", category: "Land Records", relevance: 92, snippet: "...deed of sale for property located at Block C, Sector 14..." },
  { name: "Tax_Assessment_2024.pdf", category: "Tax Records", relevance: 85, snippet: "...annual property tax assessment for fiscal year 2024..." },
  { name: "Building_Permit_34.pdf", category: "Permits", relevance: 78, snippet: "...construction permit approved for residential building..." },
];

const SmartSearch = () => {
  const [query, setQuery] = useState("");
  const [searched, setSearched] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) setSearched(true);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 max-w-3xl mx-auto">
      <div className="text-center">
        <h1 className="text-2xl font-display font-bold text-foreground">Smart Search</h1>
        <p className="text-muted-foreground mt-1">AI-powered document search with natural language queries</p>
      </div>

      <form onSubmit={handleSearch} className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          placeholder="Search documents using natural language..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-12 pr-12 h-14 text-base bg-muted/50 border-border rounded-xl"
        />
        <button type="button" onClick={() => setShowFilters(!showFilters)} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
          <SlidersHorizontal className="h-5 w-5" />
        </button>
      </form>

      <AnimatePresence>
        {showFilters && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <Card className="glass border-border">
              <CardContent className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="space-y-1">
                  <label className="text-xs text-muted-foreground flex items-center gap-1"><Tag className="h-3 w-3" /> Category</label>
                  <select className="w-full h-9 rounded-md border border-border bg-muted/50 px-3 text-sm text-foreground">
                    <option>All</option><option>Land Records</option><option>Certificates</option><option>Tax Records</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-muted-foreground flex items-center gap-1"><Calendar className="h-3 w-3" /> Date Range</label>
                  <select className="w-full h-9 rounded-md border border-border bg-muted/50 px-3 text-sm text-foreground">
                    <option>Any time</option><option>Last 7 days</option><option>Last 30 days</option><option>Last year</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-muted-foreground flex items-center gap-1"><Star className="h-3 w-3" /> Status</label>
                  <select className="w-full h-9 rounded-md border border-border bg-muted/50 px-3 text-sm text-foreground">
                    <option>All</option><option>Verified</option><option>Pending</option><option>Rejected</option>
                  </select>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {!searched ? (
        <div className="text-center py-16">
          <Search className="h-16 w-16 text-primary/20 mx-auto mb-4" />
          <p className="text-muted-foreground">Type a query to search across all documents</p>
          <div className="flex flex-wrap gap-2 justify-center mt-4">
            {["property title district 7", "birth certificate 2024", "tax assessment"].map((q) => (
              <button key={q} onClick={() => { setQuery(q); setSearched(true); }} className="text-xs px-3 py-1.5 rounded-full bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted border border-border transition-colors">
                {q}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">{searchResults.length} results for "<span className="text-foreground">{query}</span>"</p>
          {searchResults.map((r, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
              <Card className="glass border-border hover:border-primary/30 transition-colors cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium text-foreground">{r.name}</h3>
                        <Badge variant="outline" className="text-xs bg-muted/50 border-border">{r.category}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{r.snippet}</p>
                    </div>
                    <span className="text-xs font-medium text-accent shrink-0">{r.relevance}% match</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default SmartSearch;
