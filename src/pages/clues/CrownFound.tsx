import ClueLayout from "@/components/ClueLayout";
import { CrownFinalIcon } from "@/components/ClueIcons";

export default function CrownFound() {
  return (
    <ClueLayout
      number={10}
      subtitle="Clue IX — Final"
      title="The Crown Awaits"
      effectType="gold" 
      icon={<CrownFinalIcon />}
      
      clue="Find the coordinates, the crown awaits — almost there! "
      accentColor="hsl(43 95% 65%)"
      bgSymbol="👑"
    />
  );
}
