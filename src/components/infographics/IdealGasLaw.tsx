import React, { useState } from 'react';
import { Thermometer, Gauge, Beaker, Scale, ChevronDown, ChevronUp } from 'lucide-react';

export const IdealGasLaw: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="glass rounded-2xl p-8">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between mb-6 hover:bg-white/5 rounded-lg p-2 -m-2 transition-all"
      >
        <h3 className="text-white font-semibold text-xl">Understanding the Ideal Gas Law</h3>
        {isExpanded ? (
          <ChevronUp className="w-6 h-6 text-white/70" />
        ) : (
          <ChevronDown className="w-6 h-6 text-white/70" />
        )}
      </button>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isExpanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mb-8">
          <div className="glass-card rounded-xl p-6 mb-6">
            <div className="text-center">
              <p className="text-white/60 text-sm mb-2">The Fundamental Equation</p>
              <div className="text-5xl font-bold text-white mb-4">
                PV = nRT
              </div>
              <p className="text-white/80">
                Relates pressure, volume, amount, and temperature of an ideal gas
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 glass rounded-lg">
                  <Gauge className="w-6 h-6 text-blue-300" />
                </div>
                <div className="text-3xl font-bold text-white">P</div>
              </div>
              <h3 className="text-white font-semibold mb-2">Pressure</h3>
              <p className="text-white/70 text-sm mb-2">
                Force per unit area exerted by gas molecules
              </p>
              <div className="text-white/50 text-xs">
                Units: Pa, atm, bar, psi
              </div>
            </div>

            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 glass rounded-lg">
                  <Beaker className="w-6 h-6 text-green-300" />
                </div>
                <div className="text-3xl font-bold text-white">V</div>
              </div>
              <h3 className="text-white font-semibold mb-2">Volume</h3>
              <p className="text-white/70 text-sm mb-2">
                Space occupied by the gas
              </p>
              <div className="text-white/50 text-xs">
                Units: m³, L, ft³
              </div>
            </div>

            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 glass rounded-lg">
                  <Scale className="w-6 h-6 text-purple-300" />
                </div>
                <div className="text-3xl font-bold text-white">n</div>
              </div>
              <h3 className="text-white font-semibold mb-2">Amount</h3>
              <p className="text-white/70 text-sm mb-2">
                Number of moles of gas
              </p>
              <div className="text-white/50 text-xs">
                Units: mol
              </div>
            </div>

            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 glass rounded-lg">
                  <Thermometer className="w-6 h-6 text-red-300" />
                </div>
                <div className="text-3xl font-bold text-white">T</div>
              </div>
              <h3 className="text-white font-semibold mb-2">Temperature</h3>
              <p className="text-white/70 text-sm mb-2">
                Average kinetic energy of molecules
              </p>
              <div className="text-white/50 text-xs">
                Units: K (Kelvin)
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-xl p-6 mb-6">
          <h3 className="text-xl font-semibold text-white mb-4">Gas Constant (R)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass rounded-lg p-4">
              <div className="text-white/60 text-sm mb-1">Universal Gas Constant</div>
              <div className="text-2xl font-bold text-white">8.314 J/(mol·K)</div>
            </div>
            <div className="glass rounded-lg p-4">
              <div className="text-white/60 text-sm mb-1">Alternative Value</div>
              <div className="text-2xl font-bold text-white">0.08206 L·atm/(mol·K)</div>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Key Relationships</h3>
          <div className="space-y-4">
            <div className="glass rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-medium">Boyle's Law</span>
                <span className="text-white/60 text-sm">(constant T, n)</span>
              </div>
              <div className="text-xl text-white">P₁V₁ = P₂V₂</div>
              <p className="text-white/70 text-sm mt-2">
                Pressure and volume are inversely proportional
              </p>
            </div>

            <div className="glass rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-medium">Charles's Law</span>
                <span className="text-white/60 text-sm">(constant P, n)</span>
              </div>
              <div className="text-xl text-white">V₁/T₁ = V₂/T₂</div>
              <p className="text-white/70 text-sm mt-2">
                Volume and temperature are directly proportional
              </p>
            </div>

            <div className="glass rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-medium">Avogadro's Law</span>
                <span className="text-white/60 text-sm">(constant P, T)</span>
              </div>
              <div className="text-xl text-white">V₁/n₁ = V₂/n₂</div>
              <p className="text-white/70 text-sm mt-2">
                Volume and amount are directly proportional
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
