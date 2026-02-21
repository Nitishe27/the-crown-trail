import ClueLayout from "@/components/ClueLayout";
import { TelescopeIcon } from "@/components/ClueIcons";

export default function Telescope() {
  return (
    <ClueLayout
      number={5}
      subtitle="Clue V"
      title="Still in the game? Good."
      effectType="star"
      icon={<TelescopeIcon />}
      clue="Not the sea nor river long,
But in the park where trees belong,
A hidden pond so calm and deep,
Where silent waters gently sleep.
"
      accentColor="hsl(210 70% 55%)"
      bgSymbol="🔭"

    />
  );
}
