import catIllustration1 from "@/assets/cat-illustration-1.jpg";
import catIllustration2 from "@/assets/cat-illustration-2.jpg";
import catIllustration3 from "@/assets/cat-illustration-3.jpg";
import { Card } from "@/components/ui/card";

const CatGallery = () => {
  const illustrations = [
    {
      image: catIllustration1,
      title: "Playtime Fun",
      description: "Mochi loves playing with colorful yarn balls! 🧶"
    },
    {
      image: catIllustration2,
      title: "Peaceful Dreams",
      description: "Sweet dreams in the coziest spot 😴"
    },
    {
      image: catIllustration3,
      title: "Spring Joy",
      description: "Enjoying the beautiful flowers in bloom 🌸"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-soft-purple/10 to-cute-pink/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">Cute Gallery</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of adorable moments and illustrations featuring our precious Mochi! 📷✨
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {illustrations.map((item, index) => (
            <Card 
              key={item.title}
              className="overflow-hidden bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-soft animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-card-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Instagram Section */}
        <div className="text-center animate-fade-in-up">
          <Card className="inline-block p-8 bg-card border-primary/20 shadow-soft">
            <div className="space-y-4">
              <div className="text-5xl">📸</div>
              <h3 className="text-2xl font-bold text-primary">Follow Mochi's Adventures!</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Don't miss any of the daily cuteness! Follow Mochi on Instagram for more adorable photos and videos.
              </p>
              <div className="pt-4">
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-xl font-semibold text-accent hover:text-primary transition-colors duration-300"
                >
                  <span>📱</span>
                  @mochi_the_cutest_cat
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CatGallery;