import ClueLayout from "@/components/ClueLayout";
import { CrownFinalIcon } from "@/components/ClueIcons";

export default function CrownFound() {
  return (
    <ClueLayout
      number={10}
      subtitle="Clue XI — Final"
      title="The Crown Found"
      effectType="gold" 
      icon={<CrownFinalIcon />}
      
      clue="Back to the base, where all it started... "
      accentColor="hsl(43 95% 65%)"
      bgSymbol="👑"
    />
  );
}
