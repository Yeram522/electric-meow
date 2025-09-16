import { Card } from "@/components/ui/card";

const CatInfo = () => {
  const catFacts = [
    { emoji: "🎂", label: "Age", value: "2 years old" },
    { emoji: "🏠", label: "Home", value: "Cozy apartment" },
    { emoji: "🎾", label: "Favorite Toy", value: "Yarn balls" },
    { emoji: "🍤", label: "Favorite Food", value: "Salmon treats" },
    { emoji: "😴", label: "Hobby", value: "Napping in sunbeams" },
    { emoji: "💕", label: "Personality", value: "Sweet & Playful" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Mochi</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get to know this adorable little furball and all the cute things that make Mochi special! 🌟
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Description */}
          <Card className="p-8 mb-12 bg-card border-border shadow-card animate-fade-in-up">
            <div className="text-center space-y-6">
              <div className="text-6xl mb-4">🐱</div>
              <p className="text-lg text-card-foreground leading-relaxed">
                Meet <span className="text-primary font-semibold">Mochi</span>, the most adorable little cat you'll ever see! 
                With fluffy fur as soft as cotton candy and eyes that sparkle like stars, Mochi brings joy to everyone around.
              </p>
              <p className="text-lg text-card-foreground leading-relaxed">
                This precious kitty loves to play with colorful yarn balls, chase sunbeams across the floor, 
                and curl up in the coziest spots for afternoon naps. Every day is an adventure filled with 
                purrs, head bumps, and endless cuteness! 💖
              </p>
            </div>
          </Card>

          {/* Cat Facts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {catFacts.map((fact, index) => (
              <Card 
                key={fact.label}
                className="p-6 bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-soft animate-fade-in-up group text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-3 group-hover:animate-bounce-gentle">
                  {fact.emoji}
                </div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">{fact.label}</h3>
                <p className="text-card-foreground font-semibold">{fact.value}</p>
              </Card>
            ))}
          </div>

          {/* Special Message */}
          <Card className="p-8 mt-12 bg-gradient-to-br from-cute-pink/10 to-soft-purple/10 border-primary/20 shadow-soft text-center">
            <div className="space-y-4">
              <div className="text-4xl">✨</div>
              <h3 className="text-2xl font-bold text-primary">Daily Dose of Happiness</h3>
              <p className="text-foreground/80 max-w-2xl mx-auto leading-relaxed">
                Every moment with Mochi is filled with pure joy and unconditional love. 
                This little angel reminds us that the simplest things in life - a warm sunny spot, 
                a cozy nap, or a gentle purr - are truly the most precious. 🌈
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CatInfo;