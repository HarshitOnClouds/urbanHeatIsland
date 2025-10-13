import { Thermometer, MapPin, TrendingUp, Satellite, ArrowRight, Leaf, Sun } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-green-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="pt-8 px-6 md:px-12">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg shadow-lg">
              <Thermometer className="w-6 h-6" />
            </div>
            <span className="text-xl font-semibold tracking-tight">UHI Analytics</span>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-6 md:px-12 py-16">
          <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full text-sm font-medium text-orange-300">
                  <Satellite className="w-4 h-4" />
                  <span>Powered by Google Earth Engine</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Urban Heat Island
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-pink-500">
                    Analysis Platform
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                  Visualize and analyze urban heat patterns in Roorkee, Haridwar using satellite data.
                  Track vegetation changes, temperature variations, and identify critical heat zones over time.
                </p>
              </div>

              {/* Feature Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="group p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-500/20 rounded-lg group-hover:scale-110 transition-transform">
                      <MapPin className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">Interactive Maps</h3>
                      <p className="text-xs text-slate-400">Explore spatial patterns with dynamic layers</p>
                    </div>
                  </div>
                </div>

                <div className="group p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-green-500/20 rounded-lg group-hover:scale-110 transition-transform">
                      <Leaf className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">NDVI Analysis</h3>
                      <p className="text-xs text-slate-400">Monitor vegetation health changes</p>
                    </div>
                  </div>
                </div>

                <div className="group p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-orange-500/20 rounded-lg group-hover:scale-110 transition-transform">
                      <Sun className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">LST Tracking</h3>
                      <p className="text-xs text-slate-400">Track land surface temperature trends</p>
                    </div>
                  </div>
                </div>

                <div className="group p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-red-500/20 rounded-lg group-hover:scale-110 transition-transform">
                      <TrendingUp className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">Hotspot Detection</h3>
                      <p className="text-xs text-slate-400">Identify critical urban heat zones</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">2019-2024</div>
                  <div className="text-sm text-slate-400">Data Coverage</div>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div>
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Sentinel-2</div>
                  <div className="text-sm text-slate-400">Satellite Source</div>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div>
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">30m</div>
                  <div className="text-sm text-slate-400">Resolution</div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Element */}
            <div className="relative">
              <div className="relative aspect-square">
                {/* Center circle - main visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-80 h-80">
                    {/* Outer ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-orange-500/30 animate-spin" style={{animationDuration: '20s'}}></div>
                    <div className="absolute inset-4 rounded-full border-2 border-blue-500/30 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
                    <div className="absolute inset-8 rounded-full border-2 border-green-500/30 animate-spin" style={{animationDuration: '10s'}}></div>

                    {/* Center gradient circle */}
                    <div className="absolute inset-12 rounded-full bg-gradient-to-br from-orange-500/40 via-red-500/40 to-pink-500/40 backdrop-blur-xl flex items-center justify-center shadow-2xl">
                      <div className="text-center space-y-2">
                        <Thermometer className="w-16 h-16 mx-auto text-white" />
                        <div className="text-4xl font-bold">UHI</div>
                        <div className="text-sm text-slate-200">Analytics</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating icons */}
                <div className="absolute top-8 right-8 p-3 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 rounded-xl animate-bounce" style={{animationDuration: '3s'}}>
                  <Satellite className="w-6 h-6 text-blue-300" />
                </div>
                <div className="absolute bottom-12 left-8 p-3 bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-xl animate-bounce" style={{animationDuration: '3s', animationDelay: '1s'}}>
                  <Leaf className="w-6 h-6 text-green-300" />
                </div>
                <div className="absolute top-1/3 left-4 p-3 bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 rounded-xl animate-bounce" style={{animationDuration: '3s', animationDelay: '2s'}}>
                  <Sun className="w-6 h-6 text-orange-300" />
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer with CTA */}
        <footer className="pb-8 px-6 md:px-12">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-sm text-slate-400">
              <p>Analyzing urban heat patterns • Sentinel-2 & Landsat-8/9 data</p>
              <p className="mt-1">March-May seasonal analysis • Export capabilities included</p>
            </div>

            <a
              href="https://harshitgeospatialproject.projects.earthengine.app/view/urban-heat-island"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl font-semibold text-lg shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 hover:scale-105 transition-all duration-300 flex items-center gap-3"
            >
              <span>Try It Out</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
