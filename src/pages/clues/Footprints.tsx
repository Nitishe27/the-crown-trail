import ClueLayout from "@/components/ClueLayout";
import { FootprintsIcon } from "@/components/ClueIcons";

export default function Footprints() {
  return (
    <ClueLayout
      number={9}
      subtitle="Clue VIII"
      title="Think you’ve got this? Prove it"
      effectType="footprint"
      icon={<FootprintsIcon />}
      clue="Where pages breathe and minds expand,
In Colombo’s quiet, learning land.
"
      accentColor="hsl(43 60% 45%)"
      bgSymbol="👣"
    />
  );
}
