import catIllustration1 from "@/assets/cat-illustration-1.jpg";
import catIllustration2 from "@/assets/cat-illustration-2.jpg";
import catIllustration3 from "@/assets/cat-illustration-3.jpg";
import { Card } from "@/components/ui/card";

const CatGallery = () => {
  const illustrations = [
    {
      image: catIllustration1,
      title: "Apple Watch Charging",
      description: "sh0cked_cat providing power to your Apple Watch! ⚡⌚"
    },
    {
      image: catIllustration2,
      title: "Jupiter Ring Adventure",
      description: "Electric kitties having fun on Jupiter's rings! 🪐⚡"
    },
    {
      image: catIllustration3,
      title: "Electric Portrait",
      description: "Pure sh0cked_cat energy captured in art! 🙀✨"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 relative overflow-hidden">
      <div className="absolute top-10 left-10 text-blue-400/20 text-4xl animate-pulse">⚡</div>
      <div className="absolute bottom-10 right-10 text-purple-400/20 text-4xl animate-pulse">⚡</div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">Electric Gallery ⚡</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of electrifying moments featuring our adorable sh0cked_cat! 📷✨
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {illustrations.map((item, index) => (
            <Card
              key={item.title}
              className="overflow-hidden bg-card border-border hover:border-blue-400/30 transition-all duration-300 hover:shadow-soft animate-fade-in-up group relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute top-2 right-2 text-blue-400/50 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse">
                ⚡
              </div>
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

        {/* Social Media Section */}
        <div className="text-center animate-fade-in-up">
          <Card className="inline-block p-8 bg-card border-blue-400/20 shadow-soft relative overflow-hidden">
            <div className="absolute top-1 left-1 text-blue-400/30 animate-pulse">⚡</div>
            <div className="absolute bottom-1 right-1 text-purple-400/30 animate-pulse">⚡</div>
            <div className="space-y-4">
              <div className="text-5xl animate-bounce-gentle">🙀</div>
              <h3 className="text-2xl font-bold text-primary">Follow sh0cked_cat's Electric Adventures!</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Don't miss any shocking moments! Follow our electric kitty for daily doses of surprises and charging tips.
              </p>
              <div className="pt-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-xl font-semibold text-accent hover:text-primary transition-colors duration-300"
                >
                  <span>⚡</span>
                  @sh0cked_cat
                </a>
              </div>
              <div className="flex justify-center space-x-2 text-lg mt-3">
                <span className="animate-pulse" style={{ animationDelay: '0s' }}>🔋</span>
                <span className="animate-pulse" style={{ animationDelay: '0.5s' }}>💙</span>
                <span className="animate-pulse" style={{ animationDelay: '1s' }}>⚡</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CatGallery;