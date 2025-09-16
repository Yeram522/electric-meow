import { Card } from "@/components/ui/card";

const CharacterStory = () => {
  const storyChapters = [
    {
      title: "The Awakening",
      description: "Born in the twilight between worlds, Kaelen discovered their unique connection to the Shadow Realm at a young age.",
      icon: "✨"
    },
    {
      title: "The Journey Begins",
      description: "After mastering the art of realm walking, they embarked on a quest to maintain balance between light and darkness.",
      icon: "🌙"
    },
    {
      title: "The Great Trial",
      description: "Faced with an ancient evil threatening all realms, Kaelen must make the ultimate sacrifice to protect countless worlds.",
      icon: "⚔️"
    }
  ];

  return (
    <section className="py-20 bg-story-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 text-6xl text-primary">✦</div>
        <div className="absolute bottom-32 left-16 text-4xl text-accent">◆</div>
        <div className="absolute top-1/2 left-1/4 text-3xl text-character-glow">★</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">The Legend Unfolds</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Journey through the epic tale of Kaelen, the Shadow Walker, whose destiny intertwines with the fate of all realms
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Story */}
          <Card className="p-8 mb-12 bg-card/80 backdrop-blur-sm border-accent/20 shadow-glow-accent animate-fade-in-up">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-card-foreground leading-relaxed mb-6">
                In the ancient days when the veil between worlds was thin, there emerged a being of extraordinary power. 
                <span className="text-accent font-medium"> Kaelen, the Shadow Walker</span>, was not born of any single realm, 
                but from the convergence of light and shadow itself.
              </p>
              <p className="text-lg text-card-foreground leading-relaxed mb-6">
                Gifted with the rare ability to traverse dimensions, Kaelen became the guardian of balance, ensuring that 
                neither light nor darkness would consume the multiverse. With the <span className="text-primary font-medium">Ethereal Blade</span> 
                in hand, they walk the thin line between worlds, protecting those who cannot protect themselves.
              </p>
              <p className="text-lg text-card-foreground leading-relaxed">
                The legends speak of countless victories against cosmic threats, but also of the heavy burden carried by one 
                who must remain forever between worlds, never truly belonging to any single realm.
              </p>
            </div>
          </Card>

          {/* Story Chapters */}
          <div className="grid md:grid-cols-3 gap-8">
            {storyChapters.map((chapter, index) => (
              <Card 
                key={chapter.title}
                className="p-6 bg-card border-border hover:border-accent/50 transition-all duration-300 hover:shadow-glow-subtle animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {chapter.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">{chapter.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{chapter.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharacterStory;