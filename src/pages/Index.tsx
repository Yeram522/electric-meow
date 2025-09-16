import CharacterHero from "@/components/CharacterHero";
import CharacterStats from "@/components/CharacterStats";
import CharacterSkills from "@/components/CharacterSkills";
import CharacterStory from "@/components/CharacterStory";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <CharacterHero />
      <CharacterStats />
      <CharacterSkills />
      <CharacterStory />
    </main>
  );
};

export default Index;