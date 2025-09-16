import CatHero from "@/components/CatHero";
import CatInfo from "@/components/CatInfo";
import CatGallery from "@/components/CatGallery";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <CatHero />
      <CatInfo />
      <CatGallery />
    </main>
  );
};

export default Index;