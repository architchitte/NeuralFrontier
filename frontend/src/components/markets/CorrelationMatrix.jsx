import React from 'react';

export default function CorrelationMatrix({ matrix }) {
  const tickers = ["BTC", "ETH", "SOL", "ADA"];

  return (
    <section className="col-span-12 lg:col-span-7 bg-surface-container-low p-8 rounded-xl overflow-hidden">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-headline font-semibold text-on-surface">Alpha Decay & Cross-Protocol Tracking</h2>
        <span className="text-xs font-label text-outline uppercase">4x4 Matrix Analysis</span>
      </div>
      
      <div className="grid grid-cols-5 gap-px bg-outline-variant/10 rounded-lg overflow-hidden border border-outline-variant/10">
        <div className="bg-surface-container-high p-4"></div>
        {tickers.map(t => (
            <div key={t} className="bg-surface-container-high p-4 text-center font-label text-xs font-bold text-outline uppercase">{t}</div>
        ))}

        {tickers.map(rowTicker => (
          <React.Fragment key={rowTicker}>
            <div className="bg-surface-container-high p-4 flex items-center font-label text-xs font-bold text-outline">
                {rowTicker}
            </div>
            {tickers.map(colTicker => {
              const val = matrix[rowTicker]?.[colTicker];
              const isIdentity = rowTicker === colTicker;
              const formattedVal = val !== undefined ? val.toFixed(2) : '-';
              
              if (isIdentity) {
                  return (
                      <div key={`${rowTicker}-${colTicker}`} className="bg-tertiary-container/40 p-4 text-center font-label font-bold text-tertiary text-sm flex items-center justify-center">
                          {formattedVal}
                      </div>
                  );
              }
              
              return (
                 <div key={`${rowTicker}-${colTicker}`} className="bg-surface-container p-4 text-center font-label text-on-surface text-sm flex items-center justify-center hover:bg-surface-container-high transition-colors">
                     {formattedVal}
                 </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
