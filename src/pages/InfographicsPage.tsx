import React from 'react';
import { BookOpen } from 'lucide-react';
import { IdealGasLaw } from '../components/infographics/IdealGasLaw';
import { ConversionInfographic } from '../components/infographics/ConversionInfographic';

export const InfographicsPage: React.FC = () => {
  return (
    <div className="p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <BookOpen className="w-10 h-10 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Gas Behavior Guide
            </h1>
          </div>
          <p className="text-white/80 text-lg">
            Understanding ideal gas law and volume conversions
          </p>
        </header>

        <div className="space-y-12">
          <section>
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-5xl font-bold text-white/40">1</span>
              <h2 className="text-3xl font-bold text-white">Ideal Gas Law</h2>
            </div>
            <IdealGasLaw />
          </section>

          <section>
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-5xl font-bold text-white/40">2</span>
              <h2 className="text-3xl font-bold text-white">Gas Volume Conversion Guide</h2>
            </div>
            <ConversionInfographic />
          </section>
        </div>
      </div>
    </div>
  );
};
