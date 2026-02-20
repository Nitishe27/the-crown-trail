import ClueLayout from "@/components/ClueLayout";
import { TelescopeIcon } from "@/components/ClueIcons";

export default function Telescope() {
  return (
    <ClueLayout
      number={5}
      subtitle="Clue V"
      title="The Brass Telescope"
      
      icon={<TelescopeIcon />}
      flavor="Found on the observatory balcony, still aimed at a distant spire."
      clue="Train your eye on the eastern tower's peak — there a signal light blinks twice per week. Three long flashes followed by two short; a message sent from the conspirator's court."
      accentColor="hsl(25 80% 50%)"
      bgSymbol="🔭"

    />
  );
}
