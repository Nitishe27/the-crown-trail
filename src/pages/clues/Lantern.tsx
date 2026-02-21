import ClueLayout from "@/components/ClueLayout";
import { LanternIcon } from "@/components/ClueIcons";

export default function Lantern() {
  return (
    <ClueLayout
      number={8}
      subtitle="Clue VIII"
      title="Closer… but not quite there"
      effectType="magic"
      icon={<LanternIcon />}
      
      clue="TBC"
      accentColor="hsl(43 100% 60%)"
      bgSymbol="🏮"
    />
  );
}
