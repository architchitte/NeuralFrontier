import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TopNavBar from '../components/TopNavBar';
import GlobalRegimeHero from '../components/markets/GlobalRegimeHero';
import VolatilityHeatmap from '../components/markets/VolatilityHeatmap';
import CorrelationMatrix from '../components/markets/CorrelationMatrix';
import MomentumCharts from '../components/markets/MomentumCharts';

export default function Markets() {
  const [marketData, setMarketData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    axios.get('http://localhost:8000/api/markets/summary')
      .then(res => {
        if (isMounted) {
          setMarketData(res.data);
          setIsLoading(false);
        }
      })
      .catch(err => {
        console.error("Failed to load generic market ecology.", err);
        if (isMounted) setIsLoading(false);
      });
    return () => { isMounted = false; };
  }, []);

  return (
    <div className="bg-surface text-on-surface font-body antialiased min-h-screen flex flex-col selection:bg-tertiary-container/50">
      <TopNavBar />
      
      <main className="flex-grow px-12 py-12 max-w-[1920px] mx-auto w-full relative overflow-hidden">
        {/* Background Geometric Accents */}
        <div className="absolute top-40 -right-20 w-96 h-96 border-[0.5px] border-tertiary-fixed-dim opacity-20 rounded-full bg-[radial-gradient(circle,#83d5c5_0.5px,transparent_0.5px)] bg-[size:80px_80px]"></div>
        <div className="absolute bottom-20 -left-20 w-64 h-64 border-[0.5px] border-tertiary-fixed-dim opacity-20 rounded-full bg-[radial-gradient(circle,#83d5c5_0.5px,transparent_0.5px)] bg-[size:80px_80px]"></div>

        <div className="mb-12">
          <h1 className="text-4xl font-headline font-bold text-on-surface tracking-tight">Strategic Map</h1>
          <p className="text-on-surface-variant font-body mt-2 opacity-70">Institutional market intelligence and algorithmic entropy tracking.</p>
        </div>

        {isLoading || !marketData ? (
          <div className="flex items-center justify-center min-h-[400px]">
             <div className="w-12 h-12 border-4 border-tertiary/20 border-t-tertiary rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-12 gap-8 relative z-10">
            <GlobalRegimeHero entropy={marketData.global_entropy} />
            <VolatilityHeatmap assets={marketData.assets} />
            <CorrelationMatrix matrix={marketData.correlation_matrix} />
            <MomentumCharts />
          </div>
        )}
      </main>
    </div>
  );
}
