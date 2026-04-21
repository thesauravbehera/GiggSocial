import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Bot, Send, ArrowLeft, Sparkles, Wand2, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/button';

interface AIMatchmakerPageProps {
  onBack: () => void;
}

export function AIMatchmakerPage({ onBack }: AIMatchmakerPageProps) {
  const [prompt, setPrompt] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleMatch = () => {
    if (!prompt.trim()) return;
    setIsAnalyzing(true);
    
    // Simulate AI parsing delay
    setTimeout(() => {
      setIsAnalyzing(false);
      setResult({
        category: "Development & IT",
        suggestedBudget: "₹15,000 - ₹25,000",
        requiredSkills: ["React.js", "Frontend Development", "Bug Fixing"],
        summary: "You are looking for a reliable Frontend Developer capable of jumping into an existing dashboard to resolve UI issues and bugs over a 2-week period.",
        matches: [
          { name: "Priya Sharma", rating: 4.9, location: "Local", matchScore: 98, price: "₹20,000" },
          { name: "Amit Patel", rating: 5.0, location: "Remote", matchScore: 94, price: "₹18,500" }
        ]
      });
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div className="border-b border-white/10 bg-black/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={onBack} className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Button>
          <div className="flex items-center gap-2 text-primary font-semibold">
            <Sparkles className="w-5 h-5" />
            AI Gig Matchmaker
          </div>
        </div>
      </div>
      
      <div className="flex-1 container mx-auto px-4 py-8 max-w-4xl flex flex-col items-center justify-center">
        {!result && !isAnalyzing && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full text-center mb-8"
          >
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Bot className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-4 font-clash">Just tell us what you need.</h1>
            <p className="text-gray-400 max-w-xl mx-auto">
              Skip the forms. Describe your project in plain English, and our AI will automatically structure the gig, estimate the budget, and find the perfect verified workers instantly.
            </p>
          </motion.div>
        )}

        {!result && (
           <motion.div layout className="w-full relative">
             <textarea 
               value={prompt}
               onChange={(e) => setPrompt(e.target.value)}
               placeholder="e.g., I need a React developer for 2 weeks to fix some bugs on my dashboard..."
               className="w-full h-40 bg-white/5 border border-white/10 rounded-2xl p-6 text-lg text-white resize-none focus:outline-none focus:border-primary/50 transition-all"
             />
             <Button 
               size="lg" 
               className="absolute bottom-4 right-4 gap-2"
               onClick={handleMatch}
               disabled={!prompt.trim() || isAnalyzing}
             >
               {isAnalyzing ? (
                 <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}>
                   <Wand2 className="w-5 h-5" />
                 </motion.div>
               ) : (
                 <Send className="w-5 h-5" />
               )}
               {isAnalyzing ? 'Analyzing...' : 'Find Matches'}
             </Button>
           </motion.div>
        )}

        {result && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full grid md:grid-cols-2 gap-8"
          >
            {/* Gen AI Breakdown */}
            <div className="glass p-8 rounded-3xl border border-white/10 bg-white/5">
              <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                <Bot className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold">AI Analysis</h2>
              </div>
              <p className="text-gray-300 italic mb-6">"{result.summary}"</p>
              
              <div className="space-y-4">
                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-wider">Category</label>
                  <p className="font-medium">{result.category}</p>
                </div>
                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-wider">Estimated Budget</label>
                  <p className="font-medium text-green-400">{result.suggestedBudget}</p>
                </div>
                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-wider">Required Skills extracted</label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {result.requiredSkills.map((s: string) => (
                      <span key={s} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <Button className="w-full mt-8" variant="outline" onClick={() => setResult(null)}>
                Modify Request
              </Button>
            </div>

            {/* Matches */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                Top Verified Matches
              </h3>
              {result.matches.map((match: any, i: number) => (
                <div key={i} className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all cursor-pointer flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-lg mb-1">{match.name}</h4>
                    <p className="text-sm text-gray-400">{match.location} • ⭐ {match.rating}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 font-bold mb-1">{match.price}</div>
                    <div className="text-xs px-2 py-1 bg-green-500/20 text-green-300 rounded-full inline-block">
                      {match.matchScore}% Match
                    </div>
                  </div>
                </div>
              ))}
              
              <Button className="w-full mt-4 h-14 text-lg">
                Create Formal Gig Listing
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
