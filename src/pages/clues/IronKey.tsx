import ClueLayout from "@/components/ClueLayout";
import { KeyIcon } from "@/components/ClueIcons";

export default function IronKey() {
  return (
    <ClueLayout
      number={4}
      subtitle="Clue IV"
      title="The Iron Key"
      effectType="code" 
      icon={<KeyIcon />}
      flavor="The key was worn around the neck of the fallen guard."
      clue="This key fits no door you've tried before — seek the chamber behind the tapestry floor. Three turns left, then twice to the right; the lock will yield when the moon is bright."
      accentColor="hsl(43 55% 45%)"
      bgSymbol="🗝️"

    />
  );
}
