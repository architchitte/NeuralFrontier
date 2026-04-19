import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip, ReferenceArea } from 'recharts';

export default function RegimeChart({ selectedTicker }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    
    const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';
    axios.get(`${API_BASE}/api/history/${selectedTicker}`)
      .then(res => {
        if (isMounted) {
          setData(res.data);
          setIsLoading(false);
        }
      })
      .catch(err => {
        console.error("Error fetching history", err);
        if (isMounted) {
          setData([]);
          setIsLoading(false);
        }
      });
      
    return () => { isMounted = false; };
  }, [selectedTicker]);

  if (isLoading) {
    return (
      <div className="col-span-12 lg:col-span-8 glass-card bg-surface-container-lowest p-8 rounded-xl shadow-sm overflow-hidden flex flex-col min-h-[400px] items-center justify-center">
         <div className="w-12 h-12 border-4 border-tertiary/20 border-t-tertiary rounded-full animate-spin"></div>
      </div>
    );
  }

  // Generate ReferenceAreas based on regime logic fading into transparency gradient at the bottom
  const renderBackgrounds = () => {
    if (!data || data.length === 0) return null;
    return data.map((d, index) => {
      if (index === data.length - 1) return null;
      const nextD = data[index + 1];
      const fillUrl = d.regime === 'high' ? 'url(#highVolGradient)' : 'url(#lowVolGradient)';
      
      return (
         <ReferenceArea 
             key={index} 
             x1={d.time} 
             x2={nextD.time} 
             fill={fillUrl} 
             strokeOpacity={0} 
         />
      );
    });
  };

  return (
    <div className="col-span-12 lg:col-span-8 glass-card bg-surface-container-lowest p-8 rounded-xl shadow-sm overflow-hidden flex flex-col min-h-[400px]">
      <div className="flex justify-between items-end mb-8 relative z-10">
        <div>
          <h2 className="font-headline text-xl text-on-surface">Price Motion Analytics</h2>
          <p className="text-xs font-label text-on-surface-variant uppercase tracking-widest mt-1">{selectedTicker} / INR • 1H Intervals</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-error/20"></div>
            <span className="text-[10px] font-label text-on-surface-variant uppercase tracking-widest">High Vol</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-tertiary/20"></div>
            <span className="text-[10px] font-label text-on-surface-variant uppercase tracking-widest">Low Vol</span>
          </div>
        </div>
      </div>
      
      <div className="flex-grow relative min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
            {/* Embedded Definitions mapping to Recharts engine for SVGs */}
            <defs>
              <linearGradient id="splineFill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#161d1a" stopOpacity={0.1} />
                <stop offset="100%" stopColor="#161d1a" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="highVolGradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#ba1a1a" stopOpacity={0.05} />
                <stop offset="100%" stopColor="#ba1a1a" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="lowVolGradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#006b5e" stopOpacity={0.05} />
                <stop offset="100%" stopColor="#006b5e" stopOpacity={0} />
              </linearGradient>
            </defs>
            
            {renderBackgrounds()}
            
            {/* The single dashed baseline mapped strictly to the specification mapping */}
            <XAxis 
              dataKey="time" 
              axisLine={{ stroke: '#c3c7c4', strokeDasharray: '4', strokeWidth: 0.5 }} 
              tickLine={false} 
              tick={{ fontFamily: 'Space Grotesk', fontSize: 9, fill: '#737875', opacity: 0.6 }} 
              padding={{ left: 10, right: 10 }}
              dy={10}
            />
            {/* Format Rupee structurally utilizing institutional alignment truncations aligned to Lakhs space */}
            <YAxis 
              domain={['auto', 'auto']} 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontFamily: 'Space Grotesk', fontSize: 9, fill: '#737875', opacity: 0.6 }}
              orientation="right"
              width={55}
              tickFormatter={(val) => {
                if (val >= 100000) {
                     return `₹${parseFloat((val / 100000).toFixed(1))}L`;
                } else if (val >= 1000) {
                     return `₹${parseFloat((val / 1000).toFixed(1))}k`;
                }
                return `₹${val.toFixed(0)}`;
              }}
            />
            <Tooltip 
              contentStyle={{ backgroundColor: '#ffffff', borderRadius: '4px', border: '1px solid #e2eae5', padding: '12px', fontSize: '12px', fontFamily: "Space Grotesk, sans-serif" }}
              itemStyle={{ color: '#006b5e' }}
              labelStyle={{ color: '#434845', marginBottom: '4px' }}
              formatter={(value) => [`₹${Number(value).toLocaleString('en-IN')}`, 'Price']}
            />
            <Area 
                type="monotone" 
                dataKey="price" 
                name="Price (INR)" 
                stroke="#161d1a" 
                strokeWidth={1.5} 
                fillOpacity={1}
                fill="url(#splineFill)"
                activeDot={{ r: 4, strokeWidth: 0, fill: '#161d1a' }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
