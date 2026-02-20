import ClueLayout from "@/components/ClueLayout";
import { MagnifyingGlassIcon } from "@/components/ClueIcons";

export default function MagnifyingGlass() {
  return (
    <ClueLayout
      number={3}
      subtitle="Clue III"
      title="The Magnifying Glass"
      effectType="pollen" 
      icon={<MagnifyingGlassIcon />}
      flavor="The glass was found in the royal study, still warm to the touch."
      clue="They left a fingerprint on the velvet throne — a whorled pattern pointing toward the stone. Examine closely the third coat of arms; the hidden letter lives beneath its charms."
      accentColor="hsl(210 70% 55%)"
      bgSymbol="🔍"

    />
  );
}
