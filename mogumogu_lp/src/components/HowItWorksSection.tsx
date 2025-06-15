import React from 'react';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: 'アプリをダウンロード',
      description: 'App Store または Google Play から無料でダウンロードできます。',
      image: 'mogumogu_download.png',
      alt: 'アプリのダウンロード画面'
    },
    {
      number: 2,
      title: 'スマートデバイスと連携',
      description: '既存の動画アプリ(Youtubeなど)をスマートデバイスにキャストしてください。',
      image: 'https://readdy.ai/api/search-image?query=A%20smartphone%20screen%20showing%20the%20device%20pairing%20process%20for%20the%20Mogumogu%20Watch%20app.%20The%20screen%20displays%20a%20simple%20interface%20with%20a%20TV%20remote%20icon%20and%20connection%20animation.%20The%20design%20is%20clean%20and%20user-friendly%20with%20pastel%20green%20and%20orange%20accents%20matching%20the%20brand%20colors.%20The%20pairing%20process%20appears%20straightforward%20with%20clear%20instructions%20visible%20on%20screen.&width=300&height=200&seq=pairing1&orientation=portrait',
      alt: 'デバイスペアリング画面'
    },
    {
      number: 3,
      title: '見守りモード選択',
      description: '食事前にアプリを起動し、「音声再生モード」もしくは「動画停止モード」を選択。',
      image: 'mogumogu_p1.png',
      alt: '見守りモード選択画面'
    },
    {
      number: 4,
      title: '見守りスタート',
      description: 'あとはカメラをお子さまに向けるだけ。',
      image: 'mogumogu_p2.png',
      alt: '見守りスタート画面'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-white section-fade">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900">使い方はカンタン</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>
            
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center mb-12 md:mb-24 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`md:w-1/2 ${index % 2 === 1 ? 'md:pl-12' : 'md:pr-12'} mb-6 md:mb-0 text-center ${index % 2 === 1 ? 'md:text-left' : 'md:text-right'}`}>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                <div className="md:w-12 md:h-12 w-10 h-10 flex items-center justify-center bg-primary rounded-full text-white relative z-10 md:mx-0 mx-auto mb-6 md:mb-0">
                  {step.number}
                </div>
                <div className={`md:w-1/2 ${index % 2 === 1 ? 'md:pr-12' : 'md:pl-12'} text-center ${index % 2 === 1 ? 'md:text-right' : 'md:text-left'}`}>
                  <img 
                    src={step.image} 
                    alt={step.alt} 
                    className="rounded-lg shadow-md w-full max-w-xs mx-auto md:mx-0"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection; 