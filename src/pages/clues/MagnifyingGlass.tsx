import ClueLayout from "@/components/ClueLayout";
import { MagnifyingGlassIcon } from "@/components/ClueIcons";

export default function MagnifyingGlass() {
  return (
    <ClueLayout
      number={3}
      subtitle="Clue III"
      title="Let’s see how sharp you are"
      effectType="chamber"
      icon={<MagnifyingGlassIcon />}
      clue="From soil to spoon without the mud,
A berry’s journey, rich and sweet as blood.
Blooming bright on Maitland Place.
."
      accentColor="hsl(210 70% 55%)"
      bgSymbol="🔍"

    />
  );
}
