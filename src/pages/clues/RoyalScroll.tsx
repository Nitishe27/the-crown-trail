import ClueLayout from "@/components/ClueLayout";
import { ScrollIcon } from "@/components/ClueIcons";

export default function RoyalScroll() {
  return (
    <ClueLayout
      number={6}
      subtitle="Clue VI"
      title="The crown calls you forward"
      effectType="castle"
      icon={<ScrollIcon />}
      clue="Not a market loud with cries,
But shelves beneath bright city skies,
Along Darley’s busy way,
Where green stands proud in neat display.
"
      accentColor="hsl(0 65% 50%)"
      bgSymbol="📜"

    />
  );
}
