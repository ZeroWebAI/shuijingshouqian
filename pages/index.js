import React, { useState, useEffect } from 'react';
import { Sparkles, Star, Moon, Sun, Zap, ChevronRight, Phone, Save, Eye, Heart, TrendingUp, Shield, Gem, Crown, X } from 'lucide-react';

export default function CrystalDivination() {
  const [step, setStep] = useState('home');
  const [birthDate, setBirthDate] = useState({ year: '', month: '', day: '', hour: '' });
  const [result, setResult] = useState(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contact, setContact] = useState({ phone: '', line: '' });
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10
    }));
    setParticles(newParticles);
  }, []);

  const wuxing = {
    金: { 
      color: 'from-amber-200 via-yellow-100 to-amber-300',
      glowColor: 'shadow-amber-500/50',
      icon: '金',
      character: '剛毅果斷',
      description: '五行屬金之人，性格堅毅，做事果斷，有領導才能。金主義，重信守諾，為人正直。',
      personality: ['果斷', '堅毅', '理性', '重信義'],
      lucky: { color: '白色、金色', number: '4、9', direction: '西方', month: '秋季' }
    },
    木: { 
      color: 'from-emerald-200 via-green-100 to-emerald-300',
      glowColor: 'shadow-emerald-500/50',
      icon: '木',
      character: '生機勃勃',
      description: '五行屬木之人，充滿生機活力，善於成長發展。木主仁，為人仁慈，富有同情心。',
      personality: ['仁慈', '進取', '創新', '靈活'],
      lucky: { color: '綠色、青色', number: '3、8', direction: '東方', month: '春季' }
    },
    水: { 
      color: 'from-cyan-200 via-blue-100 to-cyan-300',
      glowColor: 'shadow-cyan-500/50',
      icon: '水',
      character: '智慧靈動',
      description: '五行屬水之人，聰明靈動，善於思考。水主智，思維敏捷，適應力強，善於變通。',
      personality: ['聰慧', '靈活', '善變', '包容'],
      lucky: { color: '黑色、藍色', number: '1、6', direction: '北方', month: '冬季' }
    },
    火: { 
      color: 'from-rose-200 via-red-100 to-rose-300',
      glowColor: 'shadow-rose-500/50',
      icon: '火',
      character: '熱情奔放',
      description: '五行屬火之人，熱情如火，積極向上。火主禮，為人熱情，善於社交，富有感染力。',
      personality: ['熱情', '積極', '外向', '樂觀'],
      lucky: { color: '紅色、紫色', number: '2、7', direction: '南方', month: '夏季' }
    },
    土: { 
      color: 'from-amber-200 via-orange-100 to-amber-300',
      glowColor: 'shadow-orange-500/50',
      icon: '土',
      character: '穩重踏實',
      description: '五行屬土之人，性格穩重，踏實可靠。土主信，誠實守信，做事有始有終，值得信賴。',
      personality: ['穩重', '誠信', '務實', '包容'],
      lucky: { color: '黃色、棕色', number: '5、10', direction: '中央', month: '四季末' }
    }
  };

  const fortunes = [
    { icon: Heart, title: '感情運勢', desc: '今年桃花運旺盛，有望遇到心儀對象' },
    { icon: TrendingUp, title: '事業運勢', desc: '事業發展順利，會有貴人相助' },
    { icon: Gem, title: '財富運勢', desc: '財運亨通，投資需謹慎' },
    { icon: Shield, title: '健康運勢', desc: '身體健康，注意作息規律' }
  ];

  const calculateWuxing = (date) => {
    const sum = parseInt(date.year) + parseInt(date.month) + parseInt(date.day) + parseInt(date.hour);
    const elements = ['金', '木', '水', '火', '土'];
    return elements[sum % 5];
  };

  const handleCalculate = () => {
    if (!birthDate.year || !birthDate.month || !birthDate.day || !birthDate.hour) {
      alert('請填寫完整的生日資料');
      return;
    }
    const element = calculateWuxing(birthDate);
    setResult(element);
    setStep('result');
  };

  const handleSaveContact = () => {
    if (!contact.phone && !contact.line) {
      alert('請至少填寫一項聯絡方式');
      return;
    }
    console.log('聯絡方式已儲存:', contact);
    setShowContactForm(false);
    alert('感謝您！我們會盡快與您聯繫');
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 25%, #16213e 50%, #0f0f1e 75%, #0a0a0f 100%)'
    }}>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-purple-400/20"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `float ${particle.duration}s ease-in-out ${particle.delay}s infinite`,
              boxShadow: '0 0 10px rgba(167, 139, 250, 0.3)'
            }}
          />
        ))}
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
          50% { transform: translateY(-30px) translateX(20px); opacity: 0.8; }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(167, 139, 250, 0.5); }
          50% { box-shadow: 0 0 40px rgba(167, 139, 250, 0.8), 0 0 60px rgba(167, 139, 250, 0.4); }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
      `}</style>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        {step === 'home' && (
          <div className="text-center space-y-12 animate-fade-in">
            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="relative">
                  <Crown className="w-24 h-24 text-purple-300" style={{ 
                    filter: 'drop-shadow(0 0 20px rgba(216, 180, 254, 0.8))',
                    animation: 'glow 3s ease-in-out infinite'
                  }} />
                  <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-yellow-300 animate-pulse" />
                </div>
              </div>
              
              <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-200 via-pink-200 to-purple-300 bg-clip-text text-transparent"
                  style={{ textShadow: '0 0 40px rgba(216, 180, 254, 0.5)' }}>
                水晶占卜閣
              </h1>
              
              <p className="text-2xl text-purple-200 font-light tracking-wide">
                探索你的命運之謎 · 照亮前行之路
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Star, title: '五行測算', desc: '根據生辰八字，精準分析五行屬性' },
                { icon: Moon, title: '運勢解析', desc: '深度解讀您的未來運勢走向' },
                { icon: Sun, title: '專業指導', desc: '資深大師一對一諮詢服務' }
              ].map((item, i) => (
                <div key={i} className="group bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-500 hover:scale-105"
                     style={{ boxShadow: '0 8px 32px rgba(139, 92, 246, 0.2)' }}>
                  <item.icon className="w-12 h-12 text-purple-300 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-purple-100 mb-3">{item.title}</h3>
                  <p className="text-purple-300/80">{item.desc}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => setStep('input')}
              className="group relative px-12 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white text-xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
              style={{ boxShadow: '0 10px 40px rgba(168, 85, 247, 0.4)' }}
            >
              <span className="relative z-10 flex items-center gap-3">
                開始占卜
                <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        )}

        {step === 'input' && (
          <div className="max-w-2xl mx-auto space-y-8 animate-fade-in">
            <div className="text-center space-y-4">
              <Zap className="w-16 h-16 text-yellow-300 mx-auto animate-pulse" />
              <h2 className="text-4xl font-bold text-purple-100">請輸入您的生辰資料</h2>
              <p className="text-purple-300">精確的時間會帶來更準確的占卜結果</p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-md rounded-3xl p-10 border border-purple-500/30"
                 style={{ boxShadow: '0 20px 60px rgba(139, 92, 246, 0.3)' }}>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { label: '出生年份', key: 'year', placeholder: '例如：1990' },
                  { label: '出生月份', key: 'month', placeholder: '1-12' },
                  { label: '出生日期', key: 'day', placeholder: '1-31' },
                  { label: '出生時辰', key: 'hour', placeholder: '0-23' }
                ].map((field) => (
                  <div key={field.key} className="space-y-3">
                    <label className="block text-purple-200 font-medium text-lg">{field.label}</label>
                    <input
                      type="number"
                      placeholder={field.placeholder}
                      value={birthDate[field.key]}
                      onChange={(e) => setBirthDate({...birthDate, [field.key]: e.target.value})}
                      className="w-full px-6 py-4 bg-purple-950/50 border-2 border-purple-500/30 rounded-xl text-white text-lg focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all outline-none"
                    />
                  </div>
                ))}
              </div>

              <div className="flex gap-4 mt-8">
                <button
                  onClick={() => setStep('home')}
                  className="flex-1 px-8 py-4 bg-purple-800/50 rounded-xl text-purple-200 font-medium hover:bg-purple-800/70 transition-all"
                >
                  返回
                </button>
                <button
                  onClick={handleCalculate}
                  className="flex-1 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-bold hover:shadow-xl transform hover:scale-105 transition-all"
                  style={{ boxShadow: '0 10px 30px rgba(168, 85, 247, 0.4)' }}
                >
                  開始測算
                </button>
              </div>
            </div>
          </div>
        )}

        {step === 'result' && result && (
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <div className="text-center space-y-6">
              <div className={`inline-block px-8 py-4 bg-gradient-to-r ${wuxing[result].color} rounded-full ${wuxing[result].glowColor} shadow-2xl`}>
                <span className="text-5xl font-bold text-gray-800">{wuxing[result].icon}</span>
              </div>
              <h2 className="text-4xl font-bold text-purple-100">您的五行屬性：{result}</h2>
              <p className="text-2xl text-purple-300">{wuxing[result].character}</p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-md rounded-3xl p-10 border border-purple-500/30 space-y-8"
                 style={{ boxShadow: '0 20px 60px rgba(139, 92, 246, 0.3)' }}>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-purple-100 flex items-center gap-3">
                  <Star className="w-7 h-7" />
                  性格特質
                </h3>
                <p className="text-lg text-purple-200 leading-relaxed">{wuxing[result].description}</p>
                <div className="flex flex-wrap gap-3 mt-4">
                  {wuxing[result].personality.map((trait, i) => (
                    <span key={i} className="px-5 py-2 bg-purple-800/50 rounded-full text-purple-200 border border-purple-500/30">
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(wuxing[result].lucky).map(([key, value]) => (
                  <div key={key} className="bg-purple-950/30 rounded-xl p-5 border border-purple-500/20">
                    <div className="text-purple-300 mb-2">
                      {key === 'color' && '幸運色彩'}
                      {key === 'number' && '幸運數字'}
                      {key === 'direction' && '幸運方位'}
                      {key === 'month' && '旺運時節'}
                    </div>
                    <div className="text-xl font-bold text-purple-100">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {fortunes.map((fortune, i) => (
                <div key={i} className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300"
                     style={{ boxShadow: '0 8px 32px rgba(139, 92, 246, 0.2)' }}>
                  <fortune.icon className="w-10 h-10 text-purple-300 mb-4" />
                  <h4 className="text-xl font-bold text-purple-100 mb-2">{fortune.title}</h4>
                  <p className="text-purple-300">{fortune.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 backdrop-blur-sm rounded-2xl p-8 border-2 border-yellow-500/40 text-center space-y-4"
                 style={{ boxShadow: '0 0 40px rgba(251, 191, 36, 0.2)' }}>
              <Eye className="w-12 h-12 text-yellow-300 mx-auto" />
              <h3 className="text-2xl font-bold text-yellow-100">想要更詳細的分析？</h3>
              <p className="text-yellow-200/80">留下您的聯絡方式，讓專業大師為您深度解析</p>
              <button
                onClick={() => setShowContactForm(true)}
                className="px-10 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full text-white font-bold hover:shadow-xl transform hover:scale-105 transition-all inline-flex items-center gap-3"
              >
                <Phone className="w-5 h-5" />
                預約諮詢
              </button>
            </div>

            <button
              onClick={() => {
                setStep('home');
                setResult(null);
                setBirthDate({ year: '', month: '', day: '', hour: '' });
              }}
              className="w-full px-8 py-4 bg-purple-800/50 rounded-xl text-purple-200 font-medium hover:bg-purple-800/70 transition-all"
            >
              重新測算
            </button>
          </div>
        )}
      </div>

      {showContactForm && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-3xl p-8 max-w-md w-full border border-purple-500/50 relative"
               style={{ boxShadow: '0 20px 60px rgba(139, 92, 246, 0.5)' }}>
            <button
              onClick={() => setShowContactForm(false)}
              className="absolute top-4 right-4 text-purple-300 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-6">
              <Save className="w-12 h-12 text-purple-300 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-purple-100">留下您的聯絡方式</h3>
              <p className="text-purple-300 mt-2">我們會盡快與您聯繫</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-purple-200 mb-2">手機號碼</label>
                <input
                  type="tel"
                  placeholder="請輸入手機號碼"
                  value={contact.phone}
                  onChange={(e) => setContact({...contact, phone: e.target.value})}
                  className="w-full px-4 py-3 bg-purple-950/50 border border-purple-500/30 rounded-xl text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all outline-none"
                />
              </div>

              <div>
                <label className="block text-purple-200 mb-2">LINE ID</label>
                <input
                  type="text"
                  placeholder="請輸入 LINE ID"
                  value={contact.line}
                  onChange={(e) => setContact({...contact, line: e.target.value})}
                  className="w-full px-4 py-3 bg-purple-950/50 border border-purple-500/30 rounded-xl text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all outline-none"
                />
              </div>

              <button
                onClick={handleSaveContact}
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-bold hover:shadow-xl transform hover:scale-105 transition-all mt-6"
              >
                提交
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}