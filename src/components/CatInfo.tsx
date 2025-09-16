import { Card } from "@/components/ui/card";

const CatInfo = () => {
  const electricCatFacts = [
    { emoji: '🔋', label: 'Battery Level', value: 'Always 100%' },
    { emoji: '⚡', label: 'Shock Frequency', value: '24/7' },
    { emoji: '💡', label: 'Lighting Mode', value: 'Auto-Glow' },
    { emoji: '🙀', label: 'Surprise Level', value: 'Maximum' },
    { emoji: '🔌', label: 'Charging Speed', value: 'Lightning Fast' },
    { emoji: '💙', label: 'Energy Type', value: '100% Renewable' }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">About 쇼크 ⚡</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            여러분의 하루를 번개처럼 충전시켜줄 귀여운 전기 고양이를 소개합니다! 🙀⚡
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Description */}
          <Card className="p-8 mb-12 bg-card border-border shadow-card animate-fade-in-up relative overflow-hidden">
            <div className="absolute top-2 right-2 text-blue-400 animate-pulse">⚡</div>
            <div className="text-center space-y-6">
              <div className="text-6xl mb-4 animate-bounce-gentle">🙀</div>
              <p className="text-lg text-card-foreground leading-relaxed">
                안녕하세요! 저는 <span className="text-primary font-semibold">전기고양이 쇼크</span>에요!
                여러분의 귀여운 보조배냥이죠~ 핸드폰 배터리 떨어졌을 때, 하루 종일 일해서 완전 지쳤을 때,
                제가 모든 걸 충전해드려요!
              </p>
              <p className="text-lg text-card-foreground leading-relaxed">
                요즘 사람들 보조배터리 없으면 불안하잖아요? 그런 것처럼 마음도 보조배냥이가 있어야 해요!
                회사에서 치이고, 인간관계로 스트레스받고, 에너지 완전 바닥났을 때...
                제가 "찌직!" 하면서 깜짝 놀란 표정으로 여러분의 하루를 다시 충전시켜드릴게요! 💙⚡
              </p>
              <div className="mt-4 text-sm text-muted-foreground italic">
                "오늘도 충전! 🔋" - 세상 모든 사람들에게 보조배냥이가 필요해요
              </div>
            </div>
          </Card>

          {/* Electric Cat Facts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {electricCatFacts.map((fact, index) => (
              <Card
                key={fact.label}
                className="p-6 bg-card border-border hover:border-blue-400/30 transition-all duration-300 hover:shadow-soft animate-fade-in-up group text-center relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-1 right-1 text-blue-400/50 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  ⚡
                </div>
                <div className="text-4xl mb-3 group-hover:animate-bounce-gentle">
                  {fact.emoji}
                </div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">{fact.label}</h3>
                <p className="text-card-foreground font-semibold">{fact.value}</p>
              </Card>
            ))}
          </div>

          {/* Special Electric Message */}
          <Card className="p-8 mt-12 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-400/20 shadow-soft text-center relative overflow-hidden">
            <div className="absolute top-2 left-2 text-blue-400/30 animate-pulse">⚡</div>
            <div className="absolute bottom-2 right-2 text-purple-400/30 animate-pulse">⚡</div>
            <div className="space-y-4">
              <div className="text-4xl animate-pulse">🔋</div>
              <h3 className="text-2xl font-bold text-primary">오늘도 충전!</h3>
              <p className="text-foreground/80 max-w-2xl mx-auto leading-relaxed">
                쇼크와 함께하면 매일이 에너지 충만해져요! 이 작은 보조배냥이는
                일상의 작은 놀라움들이 얼마나 소중한지 알려줘요. 폰 배터리 충전해주는 것부터
                깜짝 놀란 표정으로 우울한 기분까지 환하게 밝혀주는 것까지,
                지친 일상에 친환경 에너지와 힐링을 선사해드려요! 🌱⚡
              </p>
              <div className="flex justify-center space-x-2 text-2xl mt-4">
                <span className="animate-bounce" style={{ animationDelay: '0s' }}>🙀</span>
                <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>⚡</span>
                <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>💙</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CatInfo;