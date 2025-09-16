import catHero from "@/assets/cute-cat-hero.jpg";
import { Button } from "@/components/ui/button";

const CatHero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-warm-cream to-cute-pink/30 relative overflow-hidden flex items-center justify-center py-20">
      {/* Cute floating elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 text-2xl animate-bounce-gentle">🌸</div>
        <div className="absolute top-40 right-32 text-xl animate-bounce-gentle" style={{ animationDelay: '1s' }}>⭐</div>
        <div className="absolute bottom-32 left-1/4 text-3xl animate-bounce-gentle" style={{ animationDelay: '2s' }}>💕</div>
        <div className="absolute bottom-20 right-20 text-xl animate-bounce-gentle" style={{ animationDelay: '0.5s' }}>🌟</div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Cat Image */}
        <div className="flex justify-center lg:justify-end order-2 lg:order-1">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-cute-pink to-soft-purple rounded-full opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
            <img 
              src={catHero} 
              alt="Adorable Cat Character" 
              className="relative w-80 h-80 object-cover rounded-full shadow-soft animate-wiggle hover:animate-bounce-gentle transition-all duration-300"
            />
          </div>
        </div>

        {/* Cat Introduction */}
        <div className="text-center lg:text-left space-y-6 animate-fade-in-up order-1 lg:order-2">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              sh0ckedCat
            </h1>
            <p className="text-xl text-accent font-medium">The sh0cked Cat 🐱⚡</p>
          </div>
          
          <p className="text-lg text-foreground/80 max-w-md mx-auto lg:mx-0 leading-relaxed">
            sh0cked_cat is a special electric cat with amazing powers! 
            Every time they get surprised, electric sparks fly out, lighting up the surroundings.✨
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft transition-all duration-300 hover:shadow-card"
            >
              See More Photos 📸
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              asChild
            >
              <a href="https://instagram.com/sh0cked_cat" target="_blank" rel="noopener noreferrer">
                Follow on Instagram 💖
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatHero;