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
          <h2 className="text-4xl font-bold text-foreground mb-4">About sh0cked_cat ⚡</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Meet the most electrifying little furball who's always ready to charge up your day! 🙀⚡
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Description */}
          <Card className="p-8 mb-12 bg-card border-border shadow-card animate-fade-in-up relative overflow-hidden">
            <div className="absolute top-2 right-2 text-blue-400 animate-pulse">⚡</div>
            <div className="text-center space-y-6">
              <div className="text-6xl mb-4 animate-bounce-gentle">🙀</div>
              <p className="text-lg text-card-foreground leading-relaxed">
                Meet <span className="text-primary font-semibold">sh0cked_cat</span>, the most adorable electric cat you'll ever see!
                With fluffy fur that sparkles with static electricity and eyes that widen with wonder at everything,
                this little powerhouse brings energy to everyone around.
              </p>
              <p className="text-lg text-card-foreground leading-relaxed">
                This precious electric kitty loves to discover new things (while getting hilariously surprised),
                charge up friends' devices with their tail, and create beautiful light shows when startled.
                Every day is an adventure filled with "Zap!" sounds, shocked expressions, and endless cuteness! 💙⚡
              </p>
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
              <h3 className="text-2xl font-bold text-primary">Renewable Energy & Endless Surprises</h3>
              <p className="text-foreground/80 max-w-2xl mx-auto leading-relaxed">
                Every moment with sh0cked_cat is electrifying! This little eco-friendly powerhouse reminds us
                that wonder and surprise make life exciting. Whether charging your phone or lighting up the room
                with their shocked expressions, they bring sustainable energy and pure joy to every day! 🌱⚡
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