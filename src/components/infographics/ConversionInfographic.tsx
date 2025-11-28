import React, { useState } from 'react';
import { Calculator, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

export const ConversionInfographic: React.FC = () => {
  const [isFormulasOpen, setIsFormulasOpen] = useState(false);
  const [isExampleOpen, setIsExampleOpen] = useState(false);

  return (
    <div className="glass rounded-2xl p-8">
      {/* Conversion Formulas */}
      <div className="glass-card rounded-xl mb-8 overflow-hidden">
        <button
          onClick={() => setIsFormulasOpen(!isFormulasOpen)}
          className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-all"
        >
          <div className="flex items-center gap-3">
            <Calculator className="w-6 h-6 text-purple-300" />
            <h3 className="text-xl font-semibold text-white">Conversion Formulas</h3>
          </div>
          {isFormulasOpen ? (
            <ChevronUp className="w-6 h-6 text-white/70" />
          ) : (
            <ChevronDown className="w-6 h-6 text-white/70" />
          )}
        </button>

        <div
          className={`transition-all duration-300 ease-in-out ${
            isFormulasOpen ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="px-6 pb-6">
            <div className="space-y-6">
              {/* Formula 1: Volume at different conditions */}
              <div className="glass rounded-lg p-6">
                <div className="text-white/80 text-sm mb-3">Converting volume between different temperature and pressure conditions:</div>
                <div className="bg-white/10 rounded-lg p-5 mb-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-3">
                      V₂ = V₁ × (P₁/P₂) × (T₂/T₁)
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/80 text-sm">
                  <div>
                    <div className="font-semibold mb-2">Where:</div>
                    <div className="space-y-1 ml-4">
                      <div>• V₁ = Initial volume</div>
                      <div>• V₂ = Final volume</div>
                      <div>• P₁ = Initial pressure</div>
                      <div>• P₂ = Final pressure</div>
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold mb-2">&nbsp;</div>
                    <div className="space-y-1 ml-4">
                      <div>• T₁ = Initial temperature (K)</div>
                      <div>• T₂ = Final temperature (K)</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formula 2: Nm³ to Sm³ */}
              <div className="glass rounded-lg p-6">
                <div className="text-white/80 text-sm mb-3">Converting from Nm³ to Sm³:</div>
                <div className="bg-white/10 rounded-lg p-5">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-3">
                      Sm³ = Nm³ × (T_Sm³/T_Nm³)
                    </div>
                    <div className="text-2xl font-semibold text-white/90 mt-4">
                      Sm³ = Nm³ × (288.15/273.15)
                    </div>
                    <div className="text-xl font-semibold text-white/80 mt-3">
                      Sm³ = Nm³ × 1.0549
                    </div>
                  </div>
                </div>
              </div>

              {/* Formula 3: Volume to Mass */}
              <div className="glass rounded-lg p-6">
                <div className="text-white/80 text-sm mb-3">Converting volume to mass:</div>
                <div className="bg-white/10 rounded-lg p-5 mb-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-3">
                      m = V × ρ
                    </div>
                  </div>
                </div>
                <div className="text-white/80 text-sm">
                  <div className="font-semibold mb-2">Where:</div>
                  <div className="space-y-1 ml-4">
                    <div>• m = mass (kg)</div>
                    <div>• V = volume (m³)</div>
                    <div>• ρ = density at reference conditions (kg/m³)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Worked Example */}
      <div className="glass-card rounded-xl overflow-hidden">
        <button
          onClick={() => setIsExampleOpen(!isExampleOpen)}
          className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-all"
        >
          <div className="flex items-center gap-3">
            <ArrowRight className="w-6 h-6 text-green-300" />
            <h3 className="text-xl font-semibold text-white">
              Worked Example: Converting 100 Nm³ of Nitrogen to Sm³
            </h3>
          </div>
          {isExampleOpen ? (
            <ChevronUp className="w-6 h-6 text-white/70" />
          ) : (
            <ChevronDown className="w-6 h-6 text-white/70" />
          )}
        </button>

        <div
          className={`transition-all duration-300 ease-in-out ${
            isExampleOpen ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="px-6 pb-6">
            <div className="space-y-6">
              {/* Given Information */}
              <div className="glass rounded-lg p-5">
                <div className="text-white font-semibold mb-3">Given:</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-white/80">
                  <div>• Volume: 100 Nm³</div>
                  <div>• Gas: Nitrogen (N₂)</div>
                  <div>• T₁ (Nm³): 273.15 K (0°C)</div>
                  <div>• T₂ (Sm³): 288.15 K (15°C)</div>
                  <div>• P₁ = P₂: 1 atm</div>
                </div>
              </div>

              {/* Solution Steps */}
              <div className="glass rounded-lg p-5">
                <div className="text-white font-semibold mb-4">Solution:</div>
                
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-white/70 text-sm mb-2">Step 1: Apply the conversion formula</div>
                    <div className="text-white text-lg font-mono">
                      V₂ = V₁ × (P₁/P₂) × (T₂/T₁)
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-white/70 text-sm mb-2">Step 2: Since pressure is constant (P₁ = P₂ = 1 atm)</div>
                    <div className="text-white text-lg font-mono">
                      V₂ = V₁ × (T₂/T₁)
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-white/70 text-sm mb-2">Step 3: Substitute values</div>
                    <div className="text-white text-lg font-mono">
                      Sm³ = 100 × (288.15/273.15)
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-white/70 text-sm mb-2">Step 4: Calculate</div>
                    <div className="text-white text-lg font-mono">
                      Sm³ = 100 × 1.0549
                    </div>
                  </div>

                  <div className="bg-green-500/20 border-2 border-green-400/50 rounded-lg p-5">
                    <div className="text-white/70 text-sm mb-2">Final Answer:</div>
                    <div className="text-white text-2xl font-bold">
                      100 Nm³ = 105.49 Sm³
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Insight */}
              <div className="glass rounded-lg p-5 border-l-4 border-blue-400">
                <div className="text-blue-300 font-semibold mb-2">💡 Key Insight:</div>
                <div className="text-white/80">
                  When converting between Nm³ and Sm³ at the same pressure, the volume ratio equals the temperature ratio. 
                  Since Sm³ is measured at a higher temperature (15°C vs 0°C), the same amount of gas occupies more volume, 
                  resulting in a larger Sm³ value.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
