import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ShieldCheck, CheckCircle2, CircleDashed, UploadCloud, LockKeyhole } from 'lucide-react';
import { Button } from '../ui/button';

interface ContractManagerPageProps {
  onBack: () => void;
}

export function ContractManagerPage({ onBack }: ContractManagerPageProps) {
  const [currentStep, setCurrentStep] = useState(2); // 0 = Created, 1 = Funds Escrowed, 2 = In Progress, 3 = Delivered, 4 = Completed
  
  const contract = {
    title: "React Dashboard Bug Fixes",
    workerName: "Priya Sharma",
    hirerName: "TechCo Inc",
    totalAmount: "₹20,000",
    escrowAmount: "₹20,000",
    status: "In Progress",
    deadline: "2026-04-30",
  };

  const steps = [
    { title: "Contract Created", desc: "Terms agreed by both parties", completed: currentStep >= 0 },
    { title: "Funds Escrowed", desc: `${contract.totalAmount} secured in vault`, completed: currentStep >= 1 },
    { title: "Work In Progress", desc: `Worker is building deliverables`, completed: currentStep >= 2 },
    { title: "Deliverables Uploaded", desc: "Waiting for Hirer approval", completed: currentStep >= 3 },
    { title: "Payment Released", desc: "Funds transferred to worker", completed: currentStep >= 4 }
  ];

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div className="border-b border-white/10 bg-black/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={onBack} className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Button>
          <div className="flex items-center gap-2 text-green-400 font-semibold">
            <ShieldCheck className="w-5 h-5" />
            Secure Escrow Contract
          </div>
        </div>
      </div>
      
      <div className="flex-1 container mx-auto px-4 py-8 max-w-5xl">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Left: Escrow Info & Actions */}
          <div className="md:col-span-1 space-y-6">
            <div className="glass p-6 rounded-3xl border border-white/10 bg-white/5">
               <h2 className="text-xl font-bold mb-6 font-clash">{contract.title}</h2>
               
               <div className="space-y-4 mb-8">
                 <div className="flex justify-between text-sm">
                   <span className="text-gray-400">Worker</span>
                   <span className="font-semibold text-white">{contract.workerName}</span>
                 </div>
                 <div className="flex justify-between text-sm">
                   <span className="text-gray-400">Total Contract Value</span>
                   <span className="font-semibold text-white">{contract.totalAmount}</span>
                 </div>
                 <div className="flex justify-between text-sm">
                   <span className="text-gray-400">Deadline</span>
                   <span className="font-semibold text-white">{contract.deadline}</span>
                 </div>
               </div>
               
               <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 mb-8">
                 <div className="flex items-center gap-2 mb-2">
                   <LockKeyhole className="w-4 h-4 text-green-400" />
                   <span className="text-sm font-bold text-green-400">SECURE VAULT</span>
                 </div>
                 <div className="text-2xl font-bold font-mono text-white mb-1">
                   {contract.escrowAmount}
                 </div>
                 <div className="text-xs text-gray-400">Funds are locked in escrow until milestones are approved.</div>
               </div>

               <div className="space-y-3">
                 <Button className="w-full gap-2 border-white/20" variant="outline" disabled={currentStep !== 2} onClick={() => setCurrentStep(3)}>
                   <UploadCloud className="w-4 h-4" />
                   (Worker) Submit Work
                 </Button>
                 <Button className="w-full gap-2 bg-green-500 hover:bg-green-600 text-black font-bold" disabled={currentStep !== 3} onClick={() => setCurrentStep(4)}>
                   <CheckCircle2 className="w-4 h-4" />
                   (Hirer) Approve & Pay
                 </Button>
               </div>
            </div>
          </div>

          {/* Right: Milestone Timeline */}
          <div className="md:col-span-2">
             <div className="glass p-8 rounded-3xl border border-white/10 bg-white/5 h-full">
               <h3 className="text-2xl font-bold mb-8">Contract Timeline</h3>
               
               <div className="relative border-l border-white/10 ml-4 space-y-12 pb-8">
                 {steps.map((step, idx) => (
                   <div key={idx} className="relative pl-8">
                     {/* Timeline Node */}
                     <div className={`absolute -left-3 top-[-2px] w-6 h-6 rounded-full flex items-center justify-center bg-black
                       ${step.completed ? 'text-green-500' : currentStep === idx - 1 ? 'text-blue-500 animate-pulse' : 'text-gray-600'}
                     `}>
                       {step.completed ? (
                         <CheckCircle2 className="w-6 h-6 bg-black" />
                       ) : (
                         <CircleDashed className="w-6 h-6 bg-black" />
                       )}
                     </div>
                     
                     <h4 className={`text-lg font-semibold ${step.completed ? 'text-white' : 'text-gray-400'}`}>
                       {step.title}
                     </h4>
                     <p className="text-sm text-gray-500 mt-1">{step.desc}</p>
                     
                     {/* Add extra context if it's the current step */}
                     {idx === 2 && currentStep === 2 && (
                       <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl text-sm text-blue-200">
                         Worker is currently working on this milestone. Expected delivery by {contract.deadline}.
                       </motion.div>
                     )}
                     
                     {idx === 3 && currentStep === 3 && (
                       <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                         <p className="text-sm text-yellow-200 font-semibold mb-2">Deliverables available for review!</p>
                         <div className="flex gap-2">
                           <Button size="sm" variant="outline" className="text-xs">Download Attachment_1.zip</Button>
                         </div>
                       </motion.div>
                     )}
                   </div>
                 ))}
               </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
