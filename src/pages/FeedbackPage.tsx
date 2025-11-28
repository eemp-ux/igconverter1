import React from 'react';
import { Mail, Coffee, MessageSquare, Lightbulb, Wrench, Sparkles } from 'lucide-react';

export const FeedbackPage: React.FC = () => {
  return (
    <div className="p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Feedback & Support
          </h1>
          <p className="text-white/80 text-lg">
            Help us improve the Industrial Gas Converter
          </p>
        </header>

        <div className="space-y-6">
          {/* Contact Section */}
          <div className="glass rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="w-6 h-6 text-white" />
              <h2 className="text-2xl font-semibold text-white">Get in Touch</h2>
            </div>
            
            <p className="text-white/80 mb-6">
              We'd love to hear from you! Whether you have feedback, suggestions for improvements, 
              bug reports, or ideas for new features, please reach out:
            </p>

            <div className="glass rounded-xl p-6 bg-white/10">
              <a 
                href="mailto:mong_peng@outlook.com"
                className="text-white text-xl font-medium hover:text-white/80 transition-colors flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                mong_peng@outlook.com
              </a>
            </div>

            {/* Feedback Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="glass rounded-xl p-4 flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-white/80 mt-1" />
                <div>
                  <h3 className="text-white font-medium mb-1">General Feedback</h3>
                  <p className="text-white/60 text-sm">Share your thoughts and experiences</p>
                </div>
              </div>

              <div className="glass rounded-xl p-4 flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-white/80 mt-1" />
                <div>
                  <h3 className="text-white font-medium mb-1">Improvements</h3>
                  <p className="text-white/60 text-sm">Suggest enhancements and optimizations</p>
                </div>
              </div>

              <div className="glass rounded-xl p-4 flex items-start gap-3">
                <Wrench className="w-5 h-5 text-white/80 mt-1" />
                <div>
                  <h3 className="text-white font-medium mb-1">Bug Fixes</h3>
                  <p className="text-white/60 text-sm">Report issues or errors you encounter</p>
                </div>
              </div>

              <div className="glass rounded-xl p-4 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-white/80 mt-1" />
                <div>
                  <h3 className="text-white font-medium mb-1">New Features</h3>
                  <p className="text-white/60 text-sm">Request additional functionality</p>
                </div>
              </div>
            </div>
          </div>

          {/* Coffee Section */}
          <div className="glass rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Coffee className="w-6 h-6 text-white" />
              <h2 className="text-2xl font-semibold text-white">Buy Me a Coffee</h2>
            </div>
            
            <p className="text-white/80 mb-6">
              If you find the Industrial Gas Converter useful and it helps you in your work, 
              consider supporting its development by buying me a coffee! Your support helps 
              maintain and improve this tool.
            </p>

            <div className="glass rounded-xl p-8 bg-white/10 text-center">
              <Coffee className="w-16 h-16 text-white mx-auto mb-4" />
              <p className="text-white text-lg font-medium mb-2">
                Support IGC Development
              </p>
              <p className="text-white/60 text-sm">
                Every coffee helps keep this tool free and improving!
              </p>
            </div>
          </div>

          {/* Thank You Note */}
          <div className="glass rounded-2xl p-6 text-center">
            <p className="text-white/80">
              Thank you for using the Industrial Gas Converter. Your feedback and support 
              make this tool better for everyone in the industry!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
