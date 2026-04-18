import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const dummyData = [
  { time: '10:00', volatility: 0.1 },
  { time: '11:00', volatility: 0.3 },
  { time: '12:00', volatility: 0.2 },
  { time: '13:00', volatility: 0.5 },
  { time: '14:00', volatility: 0.8 },
  { time: '15:00', volatility: 0.4 },
];

function App() {
  const [status, setStatus] = useState('Connecting...');

  useEffect(() => {
    fetch('http://localhost:8000/')
      .then(res => res.json())
      .then(data => setStatus(data.message))
      .catch((err) => setStatus('Backend disconnected'));
  }, []);

  return (
    <div className="min-h-screen p-8 bg-[#0F172A] text-textMain selection:bg-primary/30">
      <header className="mb-12 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-light tracking-tight">
            Neural <span className="font-semibold text-primary">Frontier</span>
          </h1>
          <p className="text-textMuted mt-2 font-mono text-sm uppercase tracking-widest text-secondary">
            Algorithmic Volatility Analytics
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className={`w-3 h-3 rounded-full ${status === 'Backend disconnected' ? 'bg-danger' : 'bg-success animate-pulse'}`}></div>
          <span className="font-mono text-sm text-textMuted">{status}</span>
        </div>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel p-6 lg:col-span-2 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
          <h2 className="text-xl font-medium mb-6">Real-Time Volatility Index (BTC)</h2>
           <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dummyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="time" stroke="#94A3B8" />
                <YAxis stroke="#94A3B8" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1E293B', border: 'none', borderRadius: '8px' }}
                  itemStyle={{ color: '#38BDF8' }}
                />
                <Line type="monotone" dataKey="volatility" stroke="#38BDF8" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col gap-8"
        >
          <div className="glass-panel p-6 relative overflow-hidden group hover:border-primary/30 transition-colors cursor-pointer">
             <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none group-hover:bg-accent/20 transition-all"></div>
             <h3 className="text-textMuted font-mono text-xs uppercase tracking-wider mb-2">Current Risk Level</h3>
             <div className="text-5xl font-light text-accent">Elevated</div>
          </div>
          
          <div className="glass-panel p-6 flex-grow">
            <h3 className="text-textMuted font-mono text-xs uppercase tracking-wider mb-4">Model Pipeline</h3>
            <div className="space-y-4">
              {['Data Ingestion', 'Feature Engineering', 'LSTM Inference'].map((step, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-surface border border-white/10 flex items-center justify-center text-xs font-mono text-textMuted">
                    0{idx + 1}
                  </div>
                  <span className="text-sm font-medium">{step}</span>
                  <div className="ml-auto w-2 h-2 rounded-full bg-success"></div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </main>
    </div>
  );
}

export default App;
