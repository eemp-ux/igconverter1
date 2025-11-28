import React from 'react';
import { ConversionResult } from '../types';

interface ResultsDisplayProps {
  result: ConversionResult | null;
  resultCustomTemp: number;
  onResultCustomTempChange: (temp: number) => void;
  isLiquidMode: boolean;
}

export const ResultsDisplay: React.FC<ResultsDisplayProps> = ({
  result,
  resultCustomTemp,
  onResultCustomTempChange,
}) => {
  if (!result) {
    return (
      <div className="glass rounded-2xl p-6">
        <h2 className="text-white font-semibold mb-4">Results</h2>
        <p className="text-white/60">Enter a value to see conversions</p>
      </div>
    );
  }

  const formatValue = (value: number) => {
    return value.toFixed(4);
  };

  return (
    <div className="glass rounded-2xl p-6">
      <h2 className="text-white font-semibold mb-4">Results</h2>
      
      <div className="space-y-3">
        <div className="glass-card rounded-xl p-4">
          <div className="text-white/70 text-sm mb-1">Nm³ (0°C, 1 atm)</div>
          <div className="text-2xl font-bold text-white">{formatValue(result.nm3)}</div>
        </div>

        <div className="glass-card rounded-xl p-4">
          <div className="text-white/70 text-sm mb-1">Sm³ (15°C, 1 atm)</div>
          <div className="text-2xl font-bold text-white">{formatValue(result.sm3_15)}</div>
        </div>

        <div className="glass-card rounded-xl p-4">
          <div className="text-white/70 text-sm mb-1">Sm³ (21°C, 1 atm)</div>
          <div className="text-2xl font-bold text-white">{formatValue(result.sm3_21)}</div>
        </div>

        <div className="glass-card rounded-xl p-4">
          <div className="text-white/70 text-sm mb-1">Sm³ (27°C, 1 atm)</div>
          <div className="text-2xl font-bold text-white">{formatValue(result.sm3_27)}</div>
        </div>

        <div className="glass-card rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="text-white/70 text-sm">Sm³ (Custom Temp)</div>
            <input
              type="number"
              value={resultCustomTemp}
              onChange={(e) => onResultCustomTempChange(parseFloat(e.target.value) || 0)}
              className="glass-input rounded-lg px-3 py-1 w-24 text-white text-sm"
              step="0.1"
            />
          </div>
          <div className="text-2xl font-bold text-white">{formatValue(result.sm3_custom)}</div>
        </div>

        <div className="glass-card rounded-xl p-4">
          <div className="text-white/70 text-sm mb-1">kg</div>
          <div className="text-2xl font-bold text-white">{formatValue(result.kg)}</div>
        </div>

        <div className="glass-card rounded-xl p-4">
          <div className="text-white/70 text-sm mb-1">Liters (Gas)</div>
          <div className="text-2xl font-bold text-white">{formatValue(result.liters_gas)}</div>
        </div>

        <div className="glass-card rounded-xl p-4">
          <div className="text-white/70 text-sm mb-1">Liters (Liquid)</div>
          <div className="text-2xl font-bold text-white">{formatValue(result.liters_liquid)}</div>
        </div>
      </div>
    </div>
  );
};
