import ClueLayout from "@/components/ClueLayout";
import { KeyIcon } from "@/components/ClueIcons";

export default function IronKey() {
  return (
    <ClueLayout
      number={4}
      subtitle="Clue IV"
      title="Decode and continue..."
      effectType="code" 
      icon={<KeyIcon />}
      clue="Not in a shrine, yet sacred ground,
Where Colombo’s oldest park is found.
Seated high in golden peace,
Where noise and chaos gently cease.
"
      accentColor="hsl(43 55% 45%)"
      bgSymbol="🗝️"

    />
  );
}
