import React, { useState, useEffect } from 'react';
import { Sparkles, Star, Moon, Sun, Zap, ChevronRight, Phone, Save, Eye, Heart, TrendingUp, Shield, Gem, Crown, X } from 'lucide-react';

function CrystalDivination() {
  const [step, setStep] = useState('home');
  const [birthDate, setBirthDate] = useState({ year: '', month: '', day: '', hour: '' });
  const [result, setResult] = useState(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contact, setContact] = useState({ phone: '', line: '' });
  const [particles, setParticles] = useState([]);

  // 生成浮動粒子
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

  // 五行數據
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

  // 卦象數據
  const gua = [
    { name: '乾卦', symbol: '☰', meaning: '天行健，君子以自強不息', element: '金', detail: '乾為天，象徵剛健、進取、創造。此卦大吉，預示事業亨通，貴人相助。' },
    { name: '坤卦', symbol: '☷', meaning: '地勢坤，君子以厚德載物', element: '土', detail: '坤為地，象徵包容、承載、柔順。主穩健發展，厚積薄發，以柔克剛。' },
    { name: '震卦', symbol: '☳', meaning: '震驚百里，不喪匕鬯', element: '木', detail: '震為雷，象徵震動、奮起、行動。主新機遇來臨，需把握時機積極行動。' },
    { name: '巽卦', symbol: '☴', meaning: '隨風巽，君子以申命行事', element: '木', detail: '巽為風，象徵謙遜、順從、滲透。主循序漸進，以和為貴，柔能克剛。' },
    { name: '坎卦', symbol: '☵', meaning: '水流不盈，習坎有孚', element: '水', detail: '坎為水，象徵險難、智慧、流動。主需謹慎行事，以智慧化解困境。' },
    { name: '離卦', symbol: '☲', meaning: '重明以麗乎正，化成天下', element: '火', detail: '離為火，象徵光明、文明、美麗。主事業輝煌，名聲遠播，前途光明。' },
    { name: '艮卦', symbol: '☶', meaning: '艮其背，不獲其身', element: '土', detail: '艮為山，象徵止、靜、穩定。主需沉澱思考，靜待時機，不宜妄動。' },
    { name: '兌卦', symbol: '☱', meaning: '麗澤兌，君子以朋友講習', element: '金', detail: '兌為澤，象徵喜悅、交流、收穫。主人際和諧，合作共贏，喜事連連。' }
  ];

  // 水晶推薦數據（移除價格顯示）
  const crystalRecommendations = {
    金: [
      { name: '白水晶', effect: '淨化能量，提升氣場', detail: '白水晶被譽為「水晶之王」，能淨化全身磁場，增強記憶力，提升專注力。', icon: '💎', gradient: 'from-slate-100 via-gray-50 to-slate-200' },
      { name: '銀鈦晶', effect: '招財進寶，事業順利', detail: '銀鈦晶內含銀白色髮絲，象徵財富流動，能招正財偏財，提升事業運勢。', icon: '✨', gradient: 'from-gray-200 via-slate-100 to-gray-300' },
      { name: '白幽靈', effect: '平衡五行，增強自信', detail: '白幽靈內含天然礦物，能平衡五行能量，增強自信心，提升領導力。', icon: '🌟', gradient: 'from-zinc-50 via-gray-100 to-zinc-200' }
    ],
    木: [
      { name: '綠幽靈', effect: '招正財，事業運勢佳', detail: '綠幽靈被稱為「正財之石」，內含天然綠色礦物，能招正財，事業步步高升。', icon: '🍀', gradient: 'from-emerald-100 via-green-50 to-emerald-200' },
      { name: '綠髮晶', effect: '旺事業，增財運', detail: '綠髮晶內含綠色針狀礦物，象徵生機勃勃，能提升事業運，增強創造力。', icon: '🌿', gradient: 'from-green-200 via-emerald-100 to-green-300' },
      { name: '東陵玉', effect: '舒緩壓力，帶來好運', detail: '東陵玉色澤翠綠，能舒緩壓力，平和心境，帶來好運與健康。', icon: '🌱', gradient: 'from-green-50 via-emerald-50 to-green-100' }
    ],
    水: [
      { name: '海藍寶', effect: '增強溝通，提升智慧', detail: '海藍寶如海水般清澈，能增強溝通表達能力，提升智慧，帶來勇氣。', icon: '🌊', gradient: 'from-sky-100 via-blue-50 to-cyan-200' },
      { name: '藍髮晶', effect: '開發潛能，增強靈感', detail: '藍髮晶稀有珍貴，能開發潛能，增強直覺靈感，提升創造力。', icon: '💫', gradient: 'from-blue-200 via-cyan-100 to-blue-300' },
      { name: '托帕石', effect: '平和心境，帶來平安', detail: '托帕石色澤柔和，能平和心境，消除負面情緒，帶來平安喜樂。', icon: '🔮', gradient: 'from-blue-50 via-sky-50 to-blue-100' }
    ],
    火: [
      { name: '紅瑪瑙', effect: '增強活力，提升勇氣', detail: '紅瑪瑙色澤艷麗，能增強活力，提升勇氣，激發潛能，帶來好運。', icon: '❤️', gradient: 'from-red-100 via-rose-50 to-red-200' },
      { name: '石榴石', effect: '改善血氣，增進感情', detail: '石榴石如紅石榴般美麗，能改善血氣循環，增進感情，招桃花運。', icon: '💝', gradient: 'from-rose-200 via-red-100 to-rose-300' },
      { name: '紅紋石', effect: '招桃花，增進人緣', detail: '紅紋石色澤溫潤，能招桃花，增進人緣，提升魅力，帶來愛情運。', icon: '🌸', gradient: 'from-pink-100 via-rose-50 to-pink-200' }
    ],
    土: [
      { name: '黃水晶', effect: '招偏財，增強自信', detail: '黃水晶被譽為「財富之石」，能招偏財，增強自信，提升正能量。', icon: '👑', gradient: 'from-yellow-100 via-amber-50 to-yellow-200' },
      { name: '鈦晶', effect: '王者之石，至尊財運', detail: '鈦晶內含金色髮絲，被稱為「王者之石」，能招財納福，提升領導力。', icon: '⚡', gradient: 'from-amber-200 via-yellow-100 to-amber-300' },
      { name: '茶晶', effect: '穩定情緒，去除負能量', detail: '茶晶色澤沉穩，能穩定情緒，去除負能量，增強安全感，帶來平穩。', icon: '🟤', gradient: 'from-orange-100 via-amber-50 to-orange-200' }
    ]
  };

  // 計算五行
  const calculateWuxing = () => {
    const year = parseInt(birthDate.year);
    const elements = ['金', '木', '水', '火', '土'];
    const elementIndex = year % 5;
    return elements[elementIndex];
  };

  // 隨機抽卦
  const drawRandomGua = () => {
    const randomGua = gua[Math.floor(Math.random() * gua.length)];
    return randomGua;
  };

  // 生成詳細運勢
  const generateDetailedFortune = (element) => {
    return {
      career: {
        title: '事業運勢',
        score: 85 + Math.floor(Math.random() * 10),
        content: '2026年對您來說是事業突破的一年，上半年會遇到重要的貴人，為您的事業帶來新的機遇。建議把握3月和8月的關鍵時機，這兩個月份特別適合展開新項目或尋求合作。下半年運勢穩步上升，9月後將有重大突破，可能會獲得晉升或新的發展機會。',
        advice: '多參加社交活動，拓展人脈；把握機遇，勇於嘗試；保持謙虛，虛心學習。'
      },
      wealth: {
        title: '財運分析',
        score: 78 + Math.floor(Math.random() * 15),
        content: '財運整體呈上升趨勢，正財運穩定，偏財運在下半年會有明顯提升。上半年適合穩健投資，避免高風險項目。6月之後財運轉旺，可適當增加投資比重。年底將有意外之財，但需注意理財規劃，避免衝動消費。',
        advice: '制定理財計劃；分散投資風險；量入為出，避免借貸。'
      },
      love: {
        title: '感情運勢',
        score: 82 + Math.floor(Math.random() * 12),
        content: '單身者桃花運旺盛，特別是在春季和秋季，容易遇到心儀對象。建議多參加朋友聚會，擴大社交圈。已有伴侶者感情穩定，但需注意溝通，5月和10月可能會有小摩擦，需要耐心化解。年底適合談婚論嫁或提升關係。',
        advice: '保持真誠，用心經營；適當給予空間；多製造浪漫驚喜。'
      },
      health: {
        title: '健康運勢',
        score: 88 + Math.floor(Math.random() * 8),
        content: '整體健康狀況良好，但需注意作息規律，避免過度勞累。春季注意呼吸系統保養，夏季注意心血管健康，秋季加強鍛煉，冬季注意保暖。建議每週至少運動3次，保持充足睡眠，飲食均衡。',
        advice: '規律作息，早睡早起；適度運動，增強體質；定期體檢，預防為主。'
      }
    };
  };

  // 提交生辰八字
  const handleBirthdateSubmit = () => {
    if (!birthDate.year || !birthDate.month || !birthDate.day || !birthDate.hour) {
      alert('請填寫完整的生辰八字');
      return;
    }
    const element = calculateWuxing();
    const wuxingData = wuxing[element];
    const detailedFortune = generateDetailedFortune(element);
    
    setResult({
      type: 'wuxing',
      element: element,
      data: wuxingData,
      detailedFortune: detailedFortune,
      crystals: crystalRecommendations[element]
    });
    setStep('result');
  };

  // 隨機抽卦
  const handleRandomDraw = () => {
    const selectedGua = drawRandomGua();
    const wuxingData = wuxing[selectedGua.element];
    const detailedFortune = generateDetailedFortune(selectedGua.element);
    
    setResult({
      type: 'gua',
      gua: selectedGua,
      element: selectedGua.element,
      data: wuxingData,
      detailedFortune: detailedFortune,
      crystals: crystalRecommendations[selectedGua.element]
    });
    setStep('result');
  };

  // 保存結果
  const handleSaveResult = () => {
    if (!contact.phone && !contact.line) {
      alert('請至少填寫一個聯絡方式');
      return;
    }
    alert('保存成功！我們會在直播間為您準備專屬優惠！');
    setShowContactForm(false);
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 25%, #16213e 50%, #0f0f1e 75%, #0a0a0f 100%)'
    }}>
      {/* 動態粒子背景 */}
      <div className="fixed inset-0 z-0">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-30"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: i % 3 === 0 ? '#FFD700' : i % 3 === 1 ? '#FF6B6B' : '#4ECDC4',
              animation: `float ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
              boxShadow: '0 0 10px currentColor'
            }}
          />
        ))}
      </div>

      {/* 八卦圖案裝飾 */}
      <div className="fixed inset-0 z-0 opacity-5">
        <div className="absolute top-10 left-10 text-9xl text-amber-300">☯</div>
        <div className="absolute bottom-10 right-10 text-9xl text-amber-300">☯</div>
        <div className="absolute top-1/2 left-1/4 text-6xl text-red-300">☰</div>
        <div className="absolute top-1/3 right-1/4 text-6xl text-red-300">☷</div>
      </div>
      
      {/* 主要內容 */}
      <div className="relative z-10 max-w-5xl mx-auto p-4 md:p-8">
        
        {/* 首頁 */}
        {step === 'home' && (
          <div className="text-center py-16">
            {/* Logo 區域 */}
            <div className="mb-12 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full blur-3xl opacity-40 animate-pulse" 
                     style={{background: 'radial-gradient(circle, #FFD700 0%, #FF6B6B 50%, transparent 100%)'}} />
              </div>
              <div className="relative flex flex-col items-center">
                {/* 旋轉八卦 */}
                <div className="relative w-40 h-40 mb-6">
                  <div className="absolute inset-0 rounded-full border-4 border-amber-400 border-opacity-30 animate-spin" style={{animationDuration: '20s'}} />
                  <div className="absolute inset-2 rounded-full border-4 border-red-400 border-opacity-30 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-8xl opacity-90" style={{
                      background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.5))'
                    }}>☯</div>
                  </div>
                </div>
                
                <div className="flex space-x-3 mb-2">
                  <Star className="w-5 h-5 text-amber-400 animate-pulse" style={{animationDelay: '0s'}} />
                  <Star className="w-5 h-5 text-amber-400 animate-pulse" style={{animationDelay: '0.3s'}} />
                  <Star className="w-5 h-5 text-amber-400 animate-pulse" style={{animationDelay: '0.6s'}} />
                </div>
              </div>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-wider" style={{
              background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF6B6B 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 40px rgba(255, 215, 0, 0.3)',
              fontFamily: '"Noto Serif TC", serif'
            }}>
              水晶能量占卜
            </h1>
            
            <div className="flex items-center justify-center mb-4">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
              <Gem className="w-6 h-6 mx-4 text-amber-400" />
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
            </div>
            
            <p className="text-2xl mb-2" style={{color: '#D4AF37'}}>探索您的能量屬性</p>
            <p className="text-xl mb-16" style={{color: '#B8860B'}}>找到最適合您的守護水晶</p>
            
            <div className="space-y-6 max-w-2xl mx-auto">
              <button
                onClick={() => setStep('birthdate')}
                className="w-full group relative overflow-hidden font-bold py-8 px-10 rounded-2xl transform transition-all duration-300 hover:scale-105 flex items-center justify-between border-2"
                style={{
                  background: 'linear-gradient(135deg, rgba(139, 0, 0, 0.3) 0%, rgba(178, 34, 34, 0.3) 100%)',
                  borderColor: 'rgba(220, 20, 60, 0.5)',
                  boxShadow: '0 8px 32px rgba(220, 20, 60, 0.3), inset 0 0 20px rgba(255, 215, 0, 0.1)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 opacity-0 group-hover:opacity-20 transition-opacity" />
                <div className="flex items-center relative z-10">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center mr-5" 
                       style={{background: 'rgba(255, 215, 0, 0.2)', boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)'}}>
                    <Star className="w-9 h-9 text-amber-300" />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-amber-100 mb-1">生辰八字測算</div>
                    <div className="text-sm text-amber-300 font-normal">精準分析您的五行屬性</div>
                  </div>
                </div>
                <ChevronRight className="w-8 h-8 text-amber-300 relative z-10" />
              </button>
              
              <button
                onClick={() => setStep('random')}
                className="w-full group relative overflow-hidden font-bold py-8 px-10 rounded-2xl transform transition-all duration-300 hover:scale-105 flex items-center justify-between border-2"
                style={{
                  background: 'linear-gradient(135deg, rgba(25, 25, 112, 0.3) 0%, rgba(72, 61, 139, 0.3) 100%)',
                  borderColor: 'rgba(138, 43, 226, 0.5)',
                  boxShadow: '0 8px 32px rgba(138, 43, 226, 0.3), inset 0 0 20px rgba(255, 215, 0, 0.1)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity" />
                <div className="flex items-center relative z-10">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center mr-5"
                       style={{background: 'rgba(255, 215, 0, 0.2)', boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)'}}>
                    <Zap className="w-9 h-9 text-amber-300" />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-amber-100 mb-1">易經卦象占卜</div>
                    <div className="text-sm text-amber-300 font-normal">隨機抽取您的專屬卦象</div>
                  </div>
                </div>
                <ChevronRight className="w-8 h-8 text-amber-300 relative z-10" />
              </button>
            </div>

            <div className="mt-20 space-y-5">
              <div className="flex items-center justify-center text-amber-200 text-base">
                <Moon className="w-6 h-6 mr-3 text-amber-400" />
                <span>已有 <span className="text-amber-400 font-bold text-xl">18,888+</span> 人完成占卜</span>
              </div>
              
              <div className="flex justify-center space-x-12 text-amber-300">
                <div className="flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-green-400" />
                  <span>隱私保護</span>
                </div>
                <div className="flex items-center">
                  <Crown className="w-5 h-5 mr-2 text-amber-400" />
                  <span>專業命理</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 生辰八字輸入 */}
        {step === 'birthdate' && (
          <div className="py-8">
            <button onClick={() => setStep('home')} className="text-amber-300 mb-8 flex items-center hover:text-amber-200 transition text-lg">
              ← 返回
            </button>
            
            <div className="rounded-3xl p-10 shadow-2xl border-2 backdrop-blur-xl" style={{
              background: 'linear-gradient(135deg, rgba(139, 0, 0, 0.2) 0%, rgba(25, 25, 112, 0.2) 100%)',
              borderColor: 'rgba(255, 215, 0, 0.3)',
              boxShadow: '0 10px 50px rgba(0, 0, 0, 0.5), inset 0 0 30px rgba(255, 215, 0, 0.1)'
            }}>
              <div className="text-center mb-10">
                <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 relative"
                     style={{background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)', boxShadow: '0 0 40px rgba(255, 215, 0, 0.5)'}}>
                  <Star className="w-12 h-12 text-white" />
                  <div className="absolute inset-0 rounded-full border-2 border-amber-300 animate-ping opacity-50" />
                </div>
                <h2 className="text-4xl font-bold mb-3" style={{
                  background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  輸入您的生辰八字
                </h2>
                <p className="text-amber-200 text-lg">精準測算您的五行屬性</p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-base mb-3 text-amber-100 font-semibold flex items-center">
                    <Sun className="w-5 h-5 mr-3 text-amber-400" />
                    出生年份（西元）
                  </label>
                  <input
                    type="number"
                    placeholder="例如: 1990"
                    value={birthDate.year}
                    onChange={(e) => setBirthDate({...birthDate, year: e.target.value})}
                    className="w-full px-6 py-5 rounded-xl border-2 focus:outline-none text-white placeholder-amber-400 text-lg transition-all"
                    style={{
                      background: 'rgba(0, 0, 0, 0.4)',
                      borderColor: 'rgba(255, 215, 0, 0.3)',
                      boxShadow: 'inset 0 2px 10px rgba(0, 0, 0, 0.3)'
                    }}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-base mb-3 text-amber-100 font-semibold">出生月份</label>
                    <select
                      value={birthDate.month}
                      onChange={(e) => setBirthDate({...birthDate, month: e.target.value})}
                      className="w-full px-6 py-5 rounded-xl border-2 focus:outline-none text-white text-lg"
                      style={{
                        background: 'rgba(0, 0, 0, 0.4)',
                        borderColor: 'rgba(255, 215, 0, 0.3)',
                        boxShadow: 'inset 0 2px 10px rgba(0, 0, 0, 0.3)'
                      }}
                    >
                      <option value="" className="bg-gray-900">選擇月份</option>
                      {[...Array(12)].map((_, i) => (
                        <option key={i} value={i + 1} className="bg-gray-900">{i + 1}月</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-base mb-3 text-amber-100 font-semibold">出生日期</label>
                    <select
                      value={birthDate.day}
                      onChange={(e) => setBirthDate({...birthDate, day: e.target.value})}
                      className="w-full px-6 py-5 rounded-xl border-2 focus:outline-none text-white text-lg"
                      style={{
                        background: 'rgba(0, 0, 0, 0.4)',
                        borderColor: 'rgba(255, 215, 0, 0.3)',
                        boxShadow: 'inset 0 2px 10px rgba(0, 0, 0, 0.3)'
                      }}
                    >
                      <option value="" className="bg-gray-900">選擇日期</option>
                      {[...Array(31)].map((_, i) => (
                        <option key={i} value={i + 1} className="bg-gray-900">{i + 1}日</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-base mb-3 text-amber-100 font-semibold flex items-center">
                    <Moon className="w-5 h-5 mr-3 text-blue-400" />
                    出生時辰
                  </label>
                  <select
                    value={birthDate.hour}
                    onChange={(e) => setBirthDate({...birthDate, hour: e.target.value})}
                    className="w-full px-6 py-5 rounded-xl border-2 focus:outline-none text-white text-lg"
                    style={{
                      background: 'rgba(0, 0, 0, 0.4)',
                      borderColor: 'rgba(255, 215, 0, 0.3)',
                      boxShadow: 'inset 0 2px 10px rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    <option value="" className="bg-gray-900">選擇時辰</option>
                    <option value="23-1" className="bg-gray-900">子時 (23:00-01:00)</option>
                    <option value="1-3" className="bg-gray-900">丑時 (01:00-03:00)</option>
                    <option value="3-5" className="bg-gray-900">寅時 (03:00-05:00)</option>
                    <option value="5-7" className="bg-gray-900">卯時 (05:00-07:00)</option>
                    <option value="7-9" className="bg-gray-900">辰時 (07:00-09:00)</option>
                    <option value="9-11" className="bg-gray-900">巳時 (09:00-11:00)</option>
                    <option value="11-13" className="bg-gray-900">午時 (11:00-13:00)</option>
                    <option value="13-15" className="bg-gray-900">未時 (13:00-15:00)</option>
                    <option value="15-17" className="bg-gray-900">申時 (15:00-17:00)</option>
                    <option value="17-19" className="bg-gray-900">酉時 (17:00-19:00)</option>
                    <option value="19-21" className="bg-gray-900">戌時 (19:00-21:00)</option>
                    <option value="21-23" className="bg-gray-900">亥時 (21:00-23:00)</option>
                  </select>
                </div>
                
                <button
                  onClick={handleBirthdateSubmit}
                  className="w-full font-bold py-6 px-8 rounded-xl transform transition-all hover:scale-105 mt-10 text-xl border-2"
                  style={{
                    background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                    borderColor: '#FFA500',
                    boxShadow: '0 8px 30px rgba(255, 165, 0, 0.5)',
                    color: '#8B0000'
                  }}
                >
                  <Sparkles className="w-7 h-7 inline mr-3" />
                  開始測算
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 隨機抽卦 */}
        {step === 'random' && (
          <div className="py-8">
            <button onClick={() => setStep('home')} className="text-amber-300 mb-8 flex items-center hover:text-amber-200 transition text-lg">
              ← 返回
            </button>
            
            <div className="rounded-3xl p-16 shadow-2xl text-center border-2 backdrop-blur-xl" style={{
              background: 'linear-gradient(135deg, rgba(25, 25, 112, 0.2) 0%, rgba(72, 61, 139, 0.2) 100%)',
              borderColor: 'rgba(138, 43, 226, 0.3)',
              boxShadow: '0 10px 50px rgba(0, 0, 0, 0.5), inset 0 0 30px rgba(138, 43, 226, 0.1)'
            }}>
              <div className="mb-12 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-56 h-56 rounded-full blur-3xl opacity-40" 
                       style={{background: 'radial-gradient(circle, #FFD700 0%, #8B00FF 100%)'}} />
                </div>
                <div className="relative flex flex-col items-center">
                  <div className="relative mb-8">
                    <Sun className="w-40 h-40 text-amber-300 animate-spin" style={{animationDuration: '20s', filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.5))'}} />
                    <Moon className="w-20 h-20 text-purple-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <div className="text-8xl mb-6" style={{filter: 'drop-shadow(0 0 30px rgba(255, 215, 0, 0.7))'}}>☯</div>
                </div>
              </div>
              
              <h2 className="text-5xl font-bold mb-5" style={{
                background: 'linear-gradient(135deg, #FFD700 0%, #FF6B6B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                易經占卜
              </h2>
              <p className="text-2xl text-amber-200 mb-3">靜心凝神，心誠則靈</p>
              <p className="text-amber-300 mb-12 text-lg">點擊下方按鈕抽取您的專屬卦象</p>
              
              <button
                onClick={handleRandomDraw}
                className="font-bold py-8 px-20 rounded-2xl transform transition-all hover:scale-110 text-3xl border-2 relative overflow-hidden group"
                style={{
                  background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                  borderColor: '#FF6B6B',
                  boxShadow: '0 10px 40px rgba(255, 107, 107, 0.6)',
                  color: '#8B0000'
                }}
              >
                <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-30 transition-opacity" />
                <Sparkles className="w-10 h-10 inline mr-4 animate-pulse relative z-10" />
                <span className="relative z-10">抽取卦象</span>
              </button>
              
              <div className="mt-12 flex justify-center space-x-4">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-3 h-3 bg-amber-400 rounded-full animate-pulse" 
                       style={{animationDelay: `${i * 0.2}s`, boxShadow: '0 0 10px rgba(255, 215, 0, 0.8)'}} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 結果頁面 */}
        {step === 'result' && result && (
          <div className="py-8 space-y-8">
            {/* 五行/卦象顯示 */}
            <div className="rounded-3xl p-10 shadow-2xl border-2 backdrop-blur-xl" style={{
              background: 'linear-gradient(135deg, rgba(139, 0, 0, 0.15) 0%, rgba(25, 25, 112, 0.15) 100%)',
              borderColor: 'rgba(255, 215, 0, 0.3)',
              boxShadow: '0 10px 50px rgba(0, 0, 0, 0.5), inset 0 0 30px rgba(255, 215, 0, 0.1)'
            }}>
              <div className="text-center">
                {result.type === 'wuxing' ? (
                  <>
                    <div className="relative mb-8">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-48 h-48 bg-gradient-to-br ${result.data.color} rounded-full blur-3xl opacity-60 animate-pulse`} />
                      </div>
                      <div className={`relative w-48 h-48 mx-auto rounded-full bg-gradient-to-br ${result.data.color} flex items-center justify-center border-4 border-amber-300`}
                           style={{boxShadow: `0 0 60px rgba(255, 215, 0, 0.6), inset 0 0 30px rgba(255, 255, 255, 0.3)`}}>
                        <span className="text-8xl font-bold" style={{
                          background: 'linear-gradient(135deg, #8B0000 0%, #4B0000 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                        }}>{result.element}</span>
                      </div>
                    </div>
                    <h2 className="text-5xl font-bold mb-4" style={{color: '#FFD700'}}>您的五行屬{result.element}</h2>
                    <p className="text-3xl text-amber-200 mb-5">{result.data.character}</p>
                    <p className="text-amber-100 leading-relaxed max-w-2xl mx-auto text-lg">{result.data.description}</p>
                    
                    {/* 性格特質 */}
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                      {result.data.personality.map((trait, i) => (
                        <span key={i} className={`px-6 py-3 bg-gradient-to-r ${result.data.color} rounded-full text-base font-bold shadow-lg border-2 border-amber-400`}
                              style={{color: '#8B0000', boxShadow: '0 4px 15px rgba(255, 215, 0, 0.4)'}}>
                          {trait}
                        </span>
                      ))}
                    </div>
                    
                    {/* 幸運元素 */}
                    <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-5">
                      {Object.entries(result.data.lucky).map(([key, value], i) => (
                        <div key={i} className="rounded-xl p-5 border-2" style={{
                          background: 'rgba(0, 0, 0, 0.3)',
                          borderColor: 'rgba(255, 215, 0, 0.3)',
                          boxShadow: 'inset 0 2px 10px rgba(0, 0, 0, 0.3)'
                        }}>
                          <div className="text-amber-300 mb-2 text-sm">
                            {key === 'color' ? '幸運色' : key === 'number' ? '幸運數字' : key === 'direction' ? '幸運方位' : '旺運時節'}
                          </div>
                          <div className="font-bold text-amber-100 text-base">{value}</div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-9xl mb-8" style={{filter: 'drop-shadow(0 0 30px rgba(255, 215, 0, 0.8))'}}>{result.gua.symbol}</div>
                    <h2 className="text-5xl font-bold mb-4" style={{color: '#FFD700'}}>{result.gua.name}</h2>
                    <p className="text-2xl text-amber-200 mb-5 italic">"{result.gua.meaning}"</p>
                    <p className="text-amber-100 leading-relaxed max-w-2xl mx-auto text-lg">{result.gua.detail}</p>
                    
                    <div className="mt-10 inline-block px-8 py-4 rounded-full border-2" style={{
                      background: 'linear-gradient(135deg, rgba(139, 0, 0, 0.3) 0%, rgba(178, 34, 34, 0.3) 100%)',
                      borderColor: 'rgba(255, 215, 0, 0.5)'
                    }}>
                      <span className="text-base text-amber-200">對應五行：</span>
                      <span className="text-2xl font-bold ml-3 text-amber-300">{result.element}</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* 詳細運勢解析 */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* 事業運勢 */}
              <div className="rounded-2xl p-7 shadow-xl border-2 backdrop-blur-xl" style={{
                background: 'linear-gradient(135deg, rgba(0, 71, 171, 0.15) 0%, rgba(25, 25, 112, 0.15) 100%)',
                borderColor: 'rgba(100, 149, 237, 0.3)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 0 20px rgba(100, 149, 237, 0.1)'
              }}>
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-2xl font-bold flex items-center text-amber-100">
                    <TrendingUp className="w-7 h-7 mr-3 text-blue-400" />
                    {result.detailedFortune.career.title}
                  </h3>
                  <div className="px-5 py-2 rounded-full border-2" style={{
                    background: 'rgba(100, 149, 237, 0.2)',
                    borderColor: 'rgba(100, 149, 237, 0.4)'
                  }}>
                    <span className="text-3xl font-bold text-blue-300">{result.detailedFortune.career.score}</span>
                    <span className="text-sm text-blue-400 ml-1">分</span>
                  </div>
                </div>
                <p className="text-blue-100 leading-relaxed mb-5">{result.detailedFortune.career.content}</p>
                
                <div className="relative mt-5 pt-5 border-t-2" style={{borderColor: 'rgba(100, 149, 237, 0.3)'}}>
                  <div className="blur-sm select-none">
                    <p className="text-sm text-blue-200">💡 {result.detailedFortune.career.advice}</p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="px-5 py-3 rounded-lg border-2" style={{
                      background: 'rgba(0, 0, 0, 0.8)',
                      borderColor: 'rgba(255, 215, 0, 0.5)'
                    }}>
                      <p className="text-amber-300 font-semibold flex items-center">
                        <Eye className="w-5 h-5 mr-2" />
                        完整建議解鎖中...
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 財運分析 */}
              <div className="rounded-2xl p-7 shadow-xl border-2 backdrop-blur-xl" style={{
                background: 'linear-gradient(135deg, rgba(184, 134, 11, 0.15) 0%, rgba(218, 165, 32, 0.15) 100%)',
                borderColor: 'rgba(255, 215, 0, 0.3)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 0 20px rgba(255, 215, 0, 0.1)'
              }}>
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-2xl font-bold flex items-center text-amber-100">
                    <Gem className="w-7 h-7 mr-3 text-amber-400" />
                    {result.detailedFortune.wealth.title}
                  </h3>
                  <div className="px-5 py-2 rounded-full border-2" style={{
                    background: 'rgba(255, 215, 0, 0.2)',
                    borderColor: 'rgba(255, 215, 0, 0.4)'
                  }}>
                    <span className="text-3xl font-bold text-amber-300">{result.detailedFortune.wealth.score}</span>
                    <span className="text-sm text-amber-400 ml-1">分</span>
                  </div>
                </div>
                <p className="text-amber-100 leading-relaxed mb-5">{result.detailedFortune.wealth.content}</p>
                
                <div className="relative mt-5 pt-5 border-t-2" style={{borderColor: 'rgba(255, 215, 0, 0.3)'}}>
                  <div className="blur-sm select-none">
                    <p className="text-sm text-amber-200">💡 {result.detailedFortune.wealth.advice}</p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="px-5 py-3 rounded-lg border-2" style={{
                      background: 'rgba(0, 0, 0, 0.8)',
                      borderColor: 'rgba(255, 215, 0, 0.5)'
                    }}>
                      <p className="text-amber-300 font-semibold flex items-center">
                        <Eye className="w-5 h-5 mr-2" />
                        完整建議解鎖中...
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 感情運勢 */}
              <div className="rounded-2xl p-7 shadow-xl border-2 backdrop-blur-xl" style={{
                background: 'linear-gradient(135deg, rgba(219, 39, 119, 0.15) 0%, rgba(236, 72, 153, 0.15) 100%)',
                borderColor: 'rgba(244, 114, 182, 0.3)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 0 20px rgba(244, 114, 182, 0.1)'
              }}>
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-2xl font-bold flex items-center text-amber-100">
                    <Heart className="w-7 h-7 mr-3 text-pink-400" />
                    {result.detailedFortune.love.title}
                  </h3>
                  <div className="px-5 py-2 rounded-full border-2" style={{
                    background: 'rgba(244, 114, 182, 0.2)',
                    borderColor: 'rgba(244, 114, 182, 0.4)'
                  }}>
                    <span className="text-3xl font-bold text-pink-300">{result.detailedFortune.love.score}</span>
                    <span className="text-sm text-pink-400 ml-1">分</span>
                  </div>
                </div>
                <p className="text-pink-100 leading-relaxed mb-5">{result.detailedFortune.love.content}</p>
                
                <div className="relative mt-5 pt-5 border-t-2" style={{borderColor: 'rgba(244, 114, 182, 0.3)'}}>
                  <div className="blur-sm select-none">
                    <p className="text-sm text-pink-200">💡 {result.detailedFortune.love.advice}</p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="px-5 py-3 rounded-lg border-2" style={{
                      background: 'rgba(0, 0, 0, 0.8)',
                      borderColor: 'rgba(255, 215, 0, 0.5)'
                    }}>
                      <p className="text-amber-300 font-semibold flex items-center">
                        <Eye className="w-5 h-5 mr-2" />
                        完整建議解鎖中...
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 健康運勢 */}
              <div className="rounded-2xl p-7 shadow-xl border-2 backdrop-blur-xl" style={{
                background: 'linear-gradient(135deg, rgba(5, 150, 105, 0.15) 0%, rgba(16, 185, 129, 0.15) 100%)',
                borderColor: 'rgba(52, 211, 153, 0.3)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 0 20px rgba(52, 211, 153, 0.1)'
              }}>
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-2xl font-bold flex items-center text-amber-100">
                    <Shield className="w-7 h-7 mr-3 text-green-400" />
                    {result.detailedFortune.health.title}
                  </h3>
                  <div className="px-5 py-2 rounded-full border-2" style={{
                    background: 'rgba(52, 211, 153, 0.2)',
                    borderColor: 'rgba(52, 211, 153, 0.4)'
                  }}>
                    <span className="text-3xl font-bold text-green-300">{result.detailedFortune.health.score}</span>
                    <span className="text-sm text-green-400 ml-1">分</span>
                  </div>
                </div>
                <p className="text-green-100 leading-relaxed mb-5">{result.detailedFortune.health.content}</p>
                
                <div className="relative mt-5 pt-5 border-t-2" style={{borderColor: 'rgba(52, 211, 153, 0.3)'}}>
                  <div className="blur-sm select-none">
                    <p className="text-sm text-green-200">💡 {result.detailedFortune.health.advice}</p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="px-5 py-3 rounded-lg border-2" style={{
                      background: 'rgba(0, 0, 0, 0.8)',
                      borderColor: 'rgba(255, 215, 0, 0.5)'
                    }}>
                      <p className="text-amber-300 font-semibold flex items-center">
                        <Eye className="w-5 h-5 mr-2" />
                        完整建議解鎖中...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 水晶推薦（移除價格） */}
            <div className="rounded-3xl p-10 shadow-2xl border-2 backdrop-blur-xl" style={{
              background: 'linear-gradient(135deg, rgba(75, 0, 130, 0.15) 0%, rgba(138, 43, 226, 0.15) 100%)',
              borderColor: 'rgba(186, 85, 211, 0.3)',
              boxShadow: '0 10px 50px rgba(0, 0, 0, 0.5), inset 0 0 30px rgba(186, 85, 211, 0.1)'
            }}>
              <div className="text-center mb-10">
                <h3 className="text-4xl font-bold mb-3 flex items-center justify-center" style={{color: '#FFD700'}}>
                  <Sparkles className="w-10 h-10 mr-4 text-pink-400" />
                  為您推薦的能量水晶
                </h3>
                <p className="text-amber-200 text-lg">根據您的五行屬性精選</p>
              </div>
              
              <div className="space-y-6">
                {result.crystals.map((crystal, index) => (
                  <div key={index} className="rounded-2xl p-7 flex items-center space-x-8 transition-all hover:scale-[1.02] border-2" style={{
                    background: 'rgba(0, 0, 0, 0.3)',
                    borderColor: 'rgba(255, 215, 0, 0.2)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <div className={`w-28 h-28 bg-gradient-to-br ${crystal.gradient} rounded-2xl flex items-center justify-center shadow-xl text-5xl flex-shrink-0 border-2 border-amber-300`}
                         style={{boxShadow: '0 0 30px rgba(255, 215, 0, 0.3)'}}>
                      {crystal.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-3xl mb-3 text-amber-100">{crystal.name}</h4>
                      <p className="text-amber-200 mb-2 text-lg">{crystal.effect}</p>
                      <p className="text-base text-amber-300 leading-relaxed">{crystal.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 引導按鈕 */}
            <div className="space-y-5">
              <button
                onClick={() => window.open('https://www.tiktok.com', '_blank')}
                className="w-full group relative overflow-hidden font-bold py-7 px-10 rounded-2xl transform transition-all hover:scale-105 flex items-center justify-center text-2xl border-2"
                style={{
                  background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                  borderColor: '#FF6B6B',
                  boxShadow: '0 10px 40px rgba(255, 107, 107, 0.6)',
                  color: '#8B0000'
                }}
              >
                <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-30 transition-opacity" />
                <Sparkles className="w-8 h-8 mr-4 animate-pulse relative z-10" />
                <span className="relative z-10">進入直播間領取專屬水晶</span>
                <ChevronRight className="w-8 h-8 ml-4 relative z-10" />
              </button>
              
              <button
                onClick={() => setShowContactForm(true)}
                className="w-full font-bold py-7 px-10 rounded-2xl transform transition-all hover:scale-105 flex items-center justify-center text-2xl border-2"
                style={{
                  background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.3) 0%, rgba(75, 0, 130, 0.3) 100%)',
                  borderColor: 'rgba(186, 85, 211, 0.5)',
                  boxShadow: '0 8px 32px rgba(138, 43, 226, 0.4)',
                  color: '#FFD700'
                }}
              >
                <Save className="w-7 h-7 mr-4" />
                <span>保存我的占卜結果</span>
              </button>

              <button
                onClick={() => {setStep('home'); setResult(null);}}
                className="w-full font-semibold py-6 px-8 rounded-2xl transition-all border-2 text-xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderColor: 'rgba(255, 215, 0, 0.3)',
                  color: '#FFD700'
                }}
              >
                重新占卜
              </button>
            </div>
          </div>
        )}

        {/* 聯絡方式表單彈窗 */}
        {showContactForm && (
          <div className="fixed inset-0 flex items-center justify-center p-4 z-50 backdrop-blur-md" style={{background: 'rgba(0, 0, 0, 0.8)'}}>
            <div className="rounded-3xl p-10 max-w-md w-full shadow-2xl border-2 relative" style={{
              background: 'linear-gradient(135deg, rgba(75, 0, 130, 0.3) 0%, rgba(25, 25, 112, 0.3) 100%)',
              borderColor: 'rgba(186, 85, 211, 0.5)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8)'
            }}>
              <button 
                onClick={() => setShowContactForm(false)}
                className="absolute top-5 right-5 text-amber-300 hover:text-amber-100 transition"
              >
                <X className="w-7 h-7" />
              </button>
              
              <div className="text-center mb-10">
                <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-5 relative"
                     style={{background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)', boxShadow: '0 0 40px rgba(255, 215, 0, 0.6)'}}>
                  <Save className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-4xl font-bold mb-3" style={{
                  background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  保存占卜結果
                </h3>
                <p className="text-amber-200 text-base">留下聯絡方式，直播間為您準備專屬優惠</p>
              </div>
              
              <div className="space-y-6 mb-10">
                <div>
                  <label className="block text-base mb-3 text-amber-100 font-semibold flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-green-400" />
                    手機號碼
                  </label>
                  <input
                    type="tel"
                    placeholder="請輸入手機號碼"
                    value={contact.phone}
                    onChange={(e) => setContact({...contact, phone: e.target.value})}
                    className="w-full px-6 py-5 rounded-xl border-2 focus:outline-none text-white placeholder-amber-400 text-lg"
                    style={{
                      background: 'rgba(0, 0, 0, 0.5)',
                      borderColor: 'rgba(255, 215, 0, 0.3)',
                      boxShadow: 'inset 0 2px 10px rgba(0, 0, 0, 0.3)'
                    }}
                  />
                </div>
                
                <div>
                  <label className="block text-base mb-3 text-amber-100 font-semibold">LINE ID（選填）</label>
                  <input
                    type="text"
                    placeholder="請輸入 LINE ID"
                    value={contact.line}
                    onChange={(e) => setContact({...contact, line: e.target.value})}
                    className="w-full px-6 py-5 rounded-xl border-2 focus:outline-none text-white placeholder-amber-400 text-lg"
                    style={{
                      background: 'rgba(0, 0, 0, 0.5)',
                      borderColor: 'rgba(255, 215, 0, 0.3)',
                      boxShadow: 'inset 0 2px 10px rgba(0, 0, 0, 0.3)'
                    }}
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <button
                  onClick={handleSaveResult}
                  className="w-full font-bold py-5 px-8 rounded-xl transform transition-all hover:scale-105 border-2 text-xl"
                  style={{
                    background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                    borderColor: '#FFA500',
                    boxShadow: '0 8px 30px rgba(255, 165, 0, 0.5)',
                    color: '#8B0000'
                  }}
                >
                  確認保存
                </button>
                <button
                  onClick={() => setShowContactForm(false)}
                  className="w-full font-semibold py-5 px-8 rounded-xl transition-all border-2 text-lg"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderColor: 'rgba(255, 215, 0, 0.3)',
                    color: '#FFD700'
                  }}
                >
                  取消
                </button>
              </div>
            </div>
          </div>
        )}

      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </div>
  );
}

export default CrystalDivination;
