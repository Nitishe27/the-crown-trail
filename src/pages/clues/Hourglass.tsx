import ClueLayout from "@/components/ClueLayout";
import { HourglassIcon } from "@/components/ClueIcons";

export default function Hourglass() {
  return (
    <ClueLayout
      number={7}
      subtitle="Clue VII"
      title="Think before you move"
      icon={<HourglassIcon />}
      clue="Strike the pins and hear them fall,
Chase the hoop and score them all,
Guide the cue with steady hand -
Step into a world of play so grand.
"
      accentColor="hsl(43 85% 55%)"
      bgSymbol="⏳"

    />
  );
}
