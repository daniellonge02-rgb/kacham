/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Bell, 
  Smartphone, 
  Globe, 
  Ticket, 
  Database, 
  Home, 
  Wallet, 
  Clock, 
  User, 
  Eye, 
  EyeOff,
  Plus,
  ArrowUpRight,
  ArrowDownLeft
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- Utilities ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Brand Components & Icons ---
const LogoMark = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={cn("w-10 h-10", className)}>
    <circle cx="50" cy="50" r="45" fill="none" stroke="#fd5b24" strokeWidth="8" />
    <path d="M50 15 A35 35 0 0 1 85 50 L50 50 Z" fill="#ffc107" />
    <path d="M85 50 A35 35 0 0 1 50 85 L50 50 Z" fill="#28a745" />
    <path d="M50 85 A35 35 0 0 1 15 50 L50 50 Z" fill="#ef4444" />
    <circle cx="50" cy="50" r="8" fill="black" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={cn("w-6 h-6 text-[#1877F2]", className)} fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={cn("w-6 h-6 text-[#25D366]", className)} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.628 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={cn("w-6 h-6 text-[#FF0000]", className)} fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={cn("w-6 h-6 text-black", className)} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

// --- Sub-Components ---
const ActionButton = ({ icon: Icon, label }: { icon: any, label: string }) => (
  <motion.button 
    whileTap={{ scale: 0.95 }}
    className="flex flex-col items-center gap-2 group flex-1"
  >
    <div className="w-full aspect-square max-w-[72px] rounded-3xl bg-white shadow-[0_4px_20px_rgb(0,0,0,0.04)] flex items-center justify-center text-gray-400 group-hover:text-brand-orange transition-all border border-gray-100/50">
      <Icon size={24} strokeWidth={1.5} />
    </div>
    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter whitespace-nowrap">{label}</span>
  </motion.button>
);

const RestrictionToggle = ({ icon: Icon, label, enabled, onToggle }: { icon: any, label: string, enabled: boolean, onToggle: () => void }) => (
  <div className="flex items-center justify-between p-4 bg-white/60 rounded-[1.25rem] shadow-sm border border-white/40">
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
        <Icon className="w-5 h-5" />
      </div>
      <span className="font-bold text-sm tracking-tight text-brand-dark opacity-80">{label}</span>
    </div>
    <button 
      onClick={onToggle}
      className={cn(
        "w-11 h-6 rounded-full transition-all relative flex items-center px-1 shadow-inner",
        enabled ? "bg-brand-green" : "bg-gray-200"
      )}
    >
      <motion.div 
        animate={{ x: enabled ? 20 : 0 }}
        className="w-4 h-4 bg-white rounded-full shadow-md"
      />
    </button>
  </div>
);

export default function App() {
  const [balanceVisible, setBalanceVisible] = useState(false);
  const [restrictions, setRestrictions] = useState({
    Facebook: false,
    WhatsApp: true,
    Youtube: false,
    X: true
  });

  const toggleRestriction = (key: keyof typeof restrictions) => {
    setRestrictions(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="max-w-md mx-auto min-h-dvh bg-[#F8F9FB] flex flex-col relative pb-28 overflow-x-hidden no-scrollbar font-sans">
      {/* Precision Header */}
      <header className="px-6 pt-10 pb-6 flex items-center justify-between sticky top-0 bg-[#F8F9FB]/80 backdrop-blur-xl z-50">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gray-200/50 overflow-hidden ring-4 ring-white shadow-sm">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jemi" alt="User" />
          </div>
          <div className="space-y-0.5">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Hello Jemi</p>
            <h1 className="font-bold text-base text-brand-dark tracking-tight">What would you like to do?</h1>
          </div>
        </div>
        <button className="relative w-10 h-10 flex items-center justify-center text-gray-400">
          <Bell size={24} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-brand-orange rounded-full border-2 border-[#F8F9FB]" />
        </button>
      </header>

      <main className="flex-1 px-6 space-y-10">
        {/* Screenshot Accurate Balance Card */}
        <section className="relative">
          <div className="bg-brand-dark rounded-[2rem] pt-10 pb-20 px-8 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
            <p className="text-[11px] font-bold text-white/40 uppercase tracking-[0.2em] mb-4">Available balance</p>
            <h2 className="text-3xl font-black tracking-tighter mb-8 tabular-nums">
              {balanceVisible ? "₦25,450.00" : "• • • •"}
            </h2>
            <motion.button 
              whileTap={{ scale: 0.95 }}
              onClick={() => setBalanceVisible(!balanceVisible)}
              className="bg-white text-brand-dark px-10 py-3 rounded-full font-bold text-xs shadow-xl active:bg-gray-100 transition-colors"
            >
              {balanceVisible ? "Hide balance" : "Fund wallet"}
            </motion.button>
          </div>

          {/* Action Cards Overlap */}
          <div className="flex justify-between gap-3 -mt-10 px-4">
            <ActionButton icon={Smartphone} label="Airtime" />
            <ActionButton icon={Database} label="Data" />
            <ActionButton icon={Ticket} label="Recharge Pins" />
            <ActionButton icon={Globe} label="Data Pins" />
          </div>
        </section>

        {/* Analysis Section */}
        <section className="space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lg tracking-tight text-brand-dark">Analysis</h3>
            <button className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">View analytics</button>
          </div>
          
          <div className="flex items-center gap-8 bg-white/40 p-6 rounded-[2rem] border border-white/60">
            <div className="w-32 h-32 flex-shrink-0 relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={USAGE_DATA}
                    innerRadius={40}
                    outerRadius={60}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {USAGE_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="flex-1 space-y-3">
              {USAGE_DATA.map((item) => (
                <div key={item.name} className="flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-gray-500 font-bold">{item.name}</span>
                  </div>
                  <span className="font-bold bg-gray-200/50 px-2 py-0.5 rounded text-[9px] text-gray-500">
                    {item.usage}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Restrictions */}
        <section className="space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lg tracking-tight text-brand-dark">Data restrictions</h3>
            <button className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">View all</button>
          </div>
          <div className="space-y-3">
            <RestrictionToggle icon={FacebookIcon} label="Facebook" enabled={restrictions.Facebook} onToggle={() => toggleRestriction('Facebook')} />
            <RestrictionToggle icon={WhatsAppIcon} label="WhatsApp" enabled={restrictions.WhatsApp} onToggle={() => toggleRestriction('WhatsApp')} />
            <RestrictionToggle icon={YoutubeIcon} label="Youtube" enabled={restrictions.Youtube} onToggle={() => toggleRestriction('Youtube')} />
            <RestrictionToggle icon={XIcon} label="X" enabled={restrictions.X} onToggle={() => toggleRestriction('X')} />
          </div>
        </section>

        {/* Recent Transactions */}
        <section className="space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lg tracking-tight text-brand-dark">Recent transactions</h3>
            <button className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">View all</button>
          </div>
          <div className="bg-white/40 rounded-[2rem] border border-white/60 overflow-hidden divide-y divide-white/40">
            {TRANSACTIONS.map((tx) => (
              <div key={tx.id} className="p-5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-white shadow-sm flex items-center justify-center text-gray-400">
                    <tx.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm tracking-tight text-brand-dark">{tx.title}</h4>
                    <p className="text-[9px] font-bold text-gray-300 uppercase tracking-widest leading-none mt-1">{tx.date}</p>
                  </div>
                </div>
                <span className={cn(
                  "font-bold text-sm",
                  tx.type === 'in' ? "text-brand-green" : "text-brand-dark"
                )}>
                  {tx.amount}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Screenshot Match Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-[#E5E5E5] px-10 py-6 flex justify-between items-center z-50 rounded-t-[2.5rem]">
        <div className="w-7 h-7 bg-gray-500 rounded shadow-inner opacity-80" />
        <div className="w-7 h-7 bg-gray-400 rounded shadow-inner opacity-40" />
        <div className="w-7 h-7 bg-gray-400 rounded shadow-inner opacity-40" />
        <div className="w-7 h-7 bg-gray-400 rounded shadow-inner opacity-40" />
      </nav>
    </div>
  );
}
