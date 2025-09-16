import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CharacterSkills = () => {
  const magicSkills = [
    { name: "Shadow Manipulation", level: "Master", description: "Control and shape shadows to create weapons or defensive barriers" },
    { name: "Dimensional Rifts", level: "Expert", description: "Tear open portals between realms for travel or combat advantage" },
    { name: "Ethereal Phasing", level: "Advanced", description: "Become intangible to pass through solid matter or avoid attacks" },
    { name: "Light Weaving", level: "Master", description: "Harness pure light energy for healing and purification magic" }
  ];

  const combatSkills = [
    "Ethereal Blade Mastery",
    "Dual Wielding",
    "Shadow Step Combat",
    "Mystical Martial Arts",
    "Defensive Barriers",
    "Counter-Spell Techniques"
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Master": return "bg-primary text-primary-foreground";
      case "Expert": return "bg-accent text-accent-foreground";
      case "Advanced": return "bg-character-glow text-foreground";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">Mystical Abilities</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore the incredible powers and combat skills mastered through centuries of training
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Magic Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center lg:text-left">Magical Abilities</h3>
            {magicSkills.map((skill, index) => (
              <Card 
                key={skill.name}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-subtle animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </h4>
                  <Badge className={getLevelColor(skill.level)}>
                    {skill.level}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{skill.description}</p>
              </Card>
            ))}
          </div>

          {/* Combat Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center lg:text-left">Combat Mastery</h3>
            
            <Card className="p-8 bg-card border-border shadow-glow-subtle">
              <div className="grid gap-4">
                {combatSkills.map((skill, index) => (
                  <div 
                    key={skill}
                    className="flex items-center p-3 rounded-lg bg-muted/30 hover:bg-accent/10 transition-colors animate-fade-in-up group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-2 h-2 bg-accent rounded-full mr-4 group-hover:shadow-glow-accent transition-all"></div>
                    <span className="text-card-foreground font-medium group-hover:text-accent transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Special Technique Highlight */}
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-accent/30 shadow-glow-accent">
              <div className="text-center">
                <h4 className="text-xl font-bold text-accent mb-3">Ultimate Technique</h4>
                <h5 className="text-lg font-semibold text-foreground mb-2">Nexus Storm</h5>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A devastating combination of shadow and light magic that creates a dimensional vortex, 
                  capable of banishing enemies to the void between realms.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharacterSkills;