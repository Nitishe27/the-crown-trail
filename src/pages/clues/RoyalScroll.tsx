import ClueLayout from "@/components/ClueLayout";
import { ScrollIcon } from "@/components/ClueIcons";

export default function RoyalScroll() {
  return (
    <ClueLayout
      number={6}
      subtitle="Clue VI"
      title="The Royal Scroll"
      icon={<ScrollIcon />}
      flavor="The scroll carried the royal seal — yet the king never signed it."
      clue="The ancient text is written in reverse — hold it to a mirror to lift the curse. The twelfth word in the third decree names the vault where the crown would be."
      accentColor="hsl(0 65% 50%)"
      bgSymbol="📜"
      prevPath="/telescope"
      nextPath="/hourglass"
      nextLabel="Time Runs Short →"
    />
  );
}
