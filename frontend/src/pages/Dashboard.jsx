import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TopNavBar from '../components/TopNavBar';
import AssetDock from '../components/AssetDock';
import PredictionHero from '../components/PredictionHero';
import RegimeChart from '../components/RegimeChart';
import MetricGrid from '../components/MetricGrid';
import ForensicRegime from '../components/ForensicRegime';

export default function Dashboard() {
  const [selectedTicker, setSelectedTicker] = useState('BTC');
  const [predictionData, setPredictionData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    
    // Pulse animation logic: always show loading for at least a brief moment for transition smoothness
    setIsLoading(true);
    
    axios.get(`http://localhost:8000/predict/${selectedTicker}`)
      .then(res => {
        if (isMounted) {
          setPredictionData(res.data);
          // Small artificial delay to let the nice pulses show off briefly
          setTimeout(() => {
            if (isMounted) setIsLoading(false);
          }, 400); 
        }
      })
      .catch(err => {
        console.error("Error fetching inference", err);
        if (isMounted) {
          setPredictionData({
            prediction: "OFFLINE / ERROR",
            confidence: 0,
            current_price_inr: 0
          });
          setIsLoading(false);
        }
      });
      
    return () => { isMounted = false; };
  }, [selectedTicker]);

  return (
    <div className="bg-surface text-on-surface font-body antialiased min-h-screen">
      <TopNavBar />
      <main className="pt-8 pb-12 px-8 max-w-[1920px] mx-auto space-y-8">
        <AssetDock 
          selectedTicker={selectedTicker} 
          onSelectTicker={setSelectedTicker} 
          isLoading={isLoading} 
        />
        
        <div className="grid grid-cols-12 gap-6">
          <PredictionHero data={predictionData} isLoading={isLoading} />
          <RegimeChart selectedTicker={selectedTicker} />
          <MetricGrid data={predictionData} isLoading={isLoading} />
          <ForensicRegime />
        </div>
      </main>
    </div>
  );
}
