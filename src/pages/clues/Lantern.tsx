import ClueLayout from "@/components/ClueLayout";
import { LanternIcon } from "@/components/ClueIcons";

export default function Lantern() {
  return (
    <ClueLayout
      number={8}
      subtitle="Clue VIII"
      title="The Lantern"
      icon={<LanternIcon />}
      flavor="A lantern left burning — its oil still fresh — in a passage none knew existed."
      clue="The conspirators met where no torch could shine — in the cavern beneath the serpentine vine. Follow the lantern's ghost on the west wall; a shadow-map is etched there, one and all."
      accentColor="hsl(43 100% 60%)"
      bgSymbol="🏮"
    />
  );
}
