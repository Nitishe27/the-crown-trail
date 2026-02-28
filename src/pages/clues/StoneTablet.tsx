import ClueLayout from "@/components/ClueLayout";
import { StoneTabletIcon } from "@/components/ClueIcons"; // Assuming you add this to your icons

export default function StoneTablet() {
  return (
    <ClueLayout
      number={11}
      subtitle="Clue X"
      title="Return Back "
     // A slight glitch effect to simulate "unreadable" or "shifting" text
      icon={<StoneTabletIcon />}
      
      clue="Back to the base, where all it started..."
      accentColor="hsl(210 10% 40%)" // A cold, stony slate grey
      bgSymbol="🗿"
    />
  );
}