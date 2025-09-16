import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const CharacterStats = () => {
  const stats = [
    { name: "Magic Power", value: 95, color: "bg-primary" },
    { name: "Stealth", value: 88, color: "bg-accent" },
    { name: "Wisdom", value: 92, color: "bg-character-glow" },
    { name: "Combat", value: 78, color: "bg-skill-accent" },
    { name: "Leadership", value: 85, color: "bg-primary" },
    { name: "Mysticism", value: 98, color: "bg-accent" }
  ];

  const characteristics = [
    { label: "Age", value: "Unknown" },
    { label: "Origin", value: "Shadow Realm" },
    { label: "Weapon", value: "Ethereal Blade" },
    { label: "Element", value: "Shadow & Light" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">Character Profile</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover the abilities and characteristics that define this legendary warrior
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Stats */}
          <Card className="p-8 bg-card border-border shadow-glow-subtle">
            <h3 className="text-2xl font-semibold text-card-foreground mb-8">Abilities</h3>
            <div className="space-y-6">
              {stats.map((stat, index) => (
                <div key={stat.name} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-card-foreground font-medium">{stat.name}</span>
                    <span className="text-primary font-semibold">{stat.value}%</span>
                  </div>
                  <Progress 
                    value={stat.value} 
                    className="h-3 bg-muted"
                  />
                </div>
              ))}
            </div>
          </Card>

          {/* Characteristics */}
          <Card className="p-8 bg-card border-border shadow-glow-subtle">
            <h3 className="text-2xl font-semibold text-card-foreground mb-8">Characteristics</h3>
            <div className="space-y-6">
              {characteristics.map((char, index) => (
                <div 
                  key={char.label} 
                  className="flex justify-between items-center py-4 border-b border-border last:border-b-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-muted-foreground font-medium">{char.label}</span>
                  <span className="text-card-foreground font-semibold">{char.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-story-bg rounded-lg border border-accent/20">
              <h4 className="text-accent font-semibold mb-3">Special Ability</h4>
              <p className="text-card-foreground text-sm leading-relaxed">
                <span className="text-accent font-medium">Realm Walking:</span> The ability to traverse between dimensions, 
                allowing instantaneous travel and access to forbidden knowledge from other worlds.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CharacterStats;