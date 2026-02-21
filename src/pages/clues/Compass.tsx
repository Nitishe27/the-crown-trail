
// import ClueLayout from "@/components/ClueLayout";
// import { CompassIcon } from "@/components/ClueIcons";

// export default function Compass() {
//   return (
//     <ClueLayout
//       number={1}
//       subtitle="Clue I"
//       title="The Compass Rose"
//       icon={<CompassIcon />}
//       flavor="The compass was found on the marble floor of the Great Hall, still spinning."
//       clue="Point me North and I'll show you true — but the thief turned East where the old oak grew. Count seven paces from the shadow's edge; your next clue lies beneath the mossy ledge."
//       accentColor="hsl(43 85% 55%)"
//       bgSymbol="🧭"
//     />
//   );
// }

import ClueLayout from "@/components/ClueLayout";
import { CompassIcon } from "@/components/ClueIcons";

export default function Compass() {
  return (
    <ClueLayout
      number={1}
      subtitle="Clue I"
      title="Your adventure starts here"
      effectType="fire" // Explicitly setting fire
      icon={<CompassIcon />}
      clue="Where independence meets exercise, not a road, not a park alone. 
By day they run, by night it gleams,
A monument born of freedom’s dreams.
"
      accentColor="hsl(43 85% 55%)"
      bgSymbol="🧭"
    />
  );
}