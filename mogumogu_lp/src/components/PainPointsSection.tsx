import React from 'react';

const PainPointsSection: React.FC = () => {
  return (
    <section id="pain" className="py-12 sm:py-16 bg-gray-50 section-fade">
      <div className="container mx-auto px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-900">こんなお悩みありませんか？</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Pain Point 1 */}
          <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 sm:w-16 h-14 sm:h-16 flex items-center justify-center mx-auto mb-4 bg-secondary/10 rounded-full">
              <i className="ri-time-line ri-lg sm:ri-xl text-secondary"></i>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-center mb-3">夕食がダラダラ</h3>
            <p className="text-gray-600 text-center text-sm sm:text-base leading-relaxed">テレビや気を取られ、食事時間が2時間以上かかることも。家族の貴重な時間が失われています。</p>
          </div>
          
          {/* Pain Point 2 */}
          <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 sm:w-16 h-14 sm:h-16 flex items-center justify-center mx-auto mb-4 bg-secondary/10 rounded-full">
              <i className="ri-volume-up-line ri-lg sm:ri-xl text-secondary"></i>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-center mb-3">"口動いてないよ"の連呼</h3>
            <p className="text-gray-600 text-center text-sm sm:text-base leading-relaxed">何度も同じ言葉を繰り返すことで、親も疲れてしまい、食事が楽しくなくなってしまいます。</p>
          </div>
          
          {/* Pain Point 3 */}
          <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 sm:w-16 h-14 sm:h-16 flex items-center justify-center mx-auto mb-4 bg-secondary/10 rounded-full">
              <i className="ri-emotion-unhappy-line ri-lg sm:ri-xl text-secondary"></i>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-center mb-3">叱って険悪</h3>
            <p className="text-gray-600 text-center text-sm sm:text-base leading-relaxed">食事中に叱ることで、家族の雰囲気が悪くなり、子どもの食事への意欲も低下してしまいます。</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection; 