import { Shield, CheckCircle, Zap, Lock, TrendingUp, Users, ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router';
import { GridBackground } from '../components/GridBackground';
export default function Landing() {
const navigate = useNavigate();
 const features = [
    {
      icon: Shield,
      title: 'Instant Verification',
      description: 'Get real-time results about the authenticity of any news article using advanced AI.',
    },
    {
      icon: Lock,
      title: 'Deep Analysis',
      description: 'Examine sources, patterns and signals to determine the credibility of information.',
    },
    {
      icon: TrendingUp,
      title: 'Trust Score',
      description: 'Receive a detailed trust percentage for each verified news item.',
    },
    {
      icon: Zap,
      title: 'Blazing Fast',
      description: 'Verify news instantly without waiting or dealing with complex processes.',
    },
    {
      icon: Users,
      title: 'For Everyone',
      description: 'Designed for anyone who wants to fight misinformation online.',
    },
    {
      icon: CheckCircle,
      title: 'Reliable',
      description: 'Proven technology to detect fake news and misleading content.',
    },
  ];

  const stats = [
    { number: '1M+', label: 'Verified News' },
    { number: '99%', label: 'Accuracy' },
    { number: '24/7', label: 'Availability' },
    { number: '0s', label: 'Response Time' },
  ];

  return (
    <GridBackground>
       <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <nav className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Shield className="text-white" size={28} />
          </div>
          <span className="text-white text-2xl font-bold">VerifyNews AI</span>
        </div>
        <button
          onClick={() => navigate('/auth')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-blue-500/50"
        >
          Login
        </button>
      </nav>

      <main className="relative z-10">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center space-y-8">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 rounded-full px-4 py-2 backdrop-blur-sm">
                <Sparkles size={16} className="text-blue-400" />
                <span className="text-blue-300 text-sm font-medium">Powered by Advanced AI</span>
              </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Stop <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Disinformation</span>
            </h1>

            <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Instantly verify the authenticity of news with our AI. Fight fake news and make informed decisions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <button
                onClick={() => navigate('/app')}
                className="group bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-2xl hover:shadow-blue-500/50 flex items-center justify-center gap-2"
              >
                Try Demo
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-16">
              {stats.map((stat, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 hover:border-blue-500/50 transition-all">
                  <div className="text-3xl font-bold text-blue-400">{stat.number}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 sm:mt-32 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white">How It Works</h2>
              <ol className="space-y-4">
                {[
                  'Copy the URL of the news article you want to verify',
                  'Paste it into our AI verifier',
                  'Get a detailed analysis in seconds',
                  'Make decisions based on real data',
                ].map((step, index) => (
                  <li key={index} className="flex gap-4 items-start">
                    <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold text-white">
                      {index + 1}
                    </div>
                    <p className="text-slate-300 text-lg pt-1">{step}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-2xl p-8 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                    <p className="text-slate-400 text-sm mb-2">Enter URL:</p>
                    <p className="text-slate-300">https://example.com/article</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                    <p className="text-slate-400 text-sm mb-2">Result:</p>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={20} className="text-green-400" />
                      <span className="text-green-400 font-semibold">Verified - 92% Trust</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Key Features</h2>
            <p className="text-xl text-slate-400">Everything you need to fight misinformation</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-blue-500/50 transition-all hover:bg-slate-800/80 group"
                >
                  <div className="bg-blue-600/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600/40 transition-all">
                    <Icon className="text-blue-400" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <footer className="relative z-10 border-t border-slate-800 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Shield size={24} className="text-blue-400" />
              <span className="text-slate-300">VerifyNews AI 2025</span>
            </div>
            <p className="text-slate-400 text-sm">
              Fighting misinformation with AI technology
            </p>
          </div>
        </div>
      </footer>
    </GridBackground>
  );
}