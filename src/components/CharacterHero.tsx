import characterHero from "@/assets/character-hero.jpg";
import { Button } from "@/components/ui/button";

const CharacterHero = () => {
  return (
    <section className="min-h-screen bg-hero-gradient relative overflow-hidden flex items-center justify-center">
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-accent rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-character-glow rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-skill-accent rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Character Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-full opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-500"></div>
            <img 
              src={characterHero} 
              alt="Mysterious Character" 
              className="relative w-80 h-96 object-cover rounded-2xl shadow-glow-primary animate-glow-pulse"
            />
          </div>
        </div>

        {/* Character Introduction */}
        <div className="text-center lg:text-left space-y-6 animate-fade-in-up">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              KAELEN
            </h1>
            <p className="text-xl text-accent font-medium">The Shadow Walker</p>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-md mx-auto lg:mx-0 leading-relaxed">
            A mysterious figure who walks between realms, wielding ancient magic and protecting the balance between light and darkness.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-primary transition-all duration-300 hover:shadow-glow-accent"
            >
              Discover Story
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              View Abilities
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharacterHero;