import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-20 sm:pt-24 md:pt-32 relative overflow-hidden min-h-screen flex items-center">
      {/* ① 背景画像 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/helosection_background.png')" }}
      />

      {/* ② モバイル用グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95 sm:hidden" />
      
      {/* ③ デスクトップ用グラデーション */}
      <div
        className="absolute inset-0 hidden sm:block"
        style={{
          background:
            'linear-gradient(to right, ' +
            'rgba(255,255,255,1) 0%, ' +      // 完全に白
            'rgba(255,255,255,0.95) 25%, ' + // 少し透過
            'rgba(255,255,255,0.8) 50%, ' +  // ここまでを「ほぼ白」で保持
            'rgba(255,255,255,0) 70%)'       // 60% 以降で完全透過
        }}
      />

      <div className="container mx-auto px-4 py-8 sm:py-16 md:py-24 relative">
        <div className="max-w-xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 leading-tight">
            テレビに夢中でも、<br className="hidden sm:block" />
            <span className="sm:hidden">　</span>"もぐもぐ"は止めない。
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">
            食事中の口の動きをAIで見守り、止まったらテレビもピタッ。<br className="hidden sm:block" />
            <span className="sm:hidden">　</span>家族時間を1分でも長くするスマート習慣。
          </h2>
          <a href="#waiting-list" className="inline-flex items-center bg-primary text-white px-5 sm:px-6 py-3 sm:py-4 rounded-button text-base sm:text-lg font-medium hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl">
            リリース通知を受け取る <i className="ri-notification-line ml-2 ri-lg sm:ri-xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 