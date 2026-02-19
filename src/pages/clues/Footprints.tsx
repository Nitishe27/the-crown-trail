import ClueLayout from "@/components/ClueLayout";
import { FootprintsIcon } from "@/components/ClueIcons";

export default function Footprints() {
  return (
    <ClueLayout
      number={9}
      subtitle="Clue IX"
      title="The Footprints"
      icon={<FootprintsIcon />}
      flavor="Fresh mud preserved the trail — the thief had been here only hours before."
      clue="Two sets of prints — one large, one small — lead through the garden past the crumbling wall. The smaller steps halt by the old sundial; inside its base, the final secret tile."
      accentColor="hsl(43 60% 45%)"
      bgSymbol="👣"
    />
  );
}
