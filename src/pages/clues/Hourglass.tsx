import ClueLayout from "@/components/ClueLayout";
import { HourglassIcon } from "@/components/ClueIcons";

export default function Hourglass() {
  return (
    <ClueLayout
      number={7}
      subtitle="Clue VII"
      title="The Hourglass"
      icon={<HourglassIcon />}
      flavor="The hourglass was discovered still running in the empty treasury."
      clue="When the last grain falls, all secrets speak. The thief had precisely one night — one week from the solstice, when shadows peak. Count the grains, count the hours, count the cost."
      accentColor="hsl(43 85% 55%)"
      bgSymbol="⏳"
      prevPath="/royal-scroll"
      nextPath="/lantern"
      nextLabel="Follow the Light →"
    />
  );
}
