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
      
      clue="Where beans are ground and moments slow, 
On Perahera where breezes flow,
Seek Barista’s fragrant art,
In steaming cups that warm the heart.
"
      accentColor="hsl(43 100% 60%)"
      bgSymbol="🏮"
    />
  );
}
