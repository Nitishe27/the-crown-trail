// import ClueLayout from "@/components/ClueLayout";
// import { MapIcon } from "@/components/ClueIcons";

// export default function TheMap() {
//   return (
//     <ClueLayout
//       number={2}
//       subtitle="Clue II"
//       title="The Ancient Map"
//       icon={<MapIcon />}
//       flavor="The map was written in invisible ink — revealed only by candlelight."
//       clue="X marks the spot where rivers meet the stone — a castle forgotten, its secrets overgrown. The road not taken curves left at the mill; follow the dotted line beyond the hill."
//       accentColor="hsl(35 85% 50%)"
//       bgSymbol="🗺️"

//     />
//   );
// }

import ClueLayout from "@/components/ClueLayout";
import { MapIcon } from "@/components/ClueIcons";

export default function TheMap() {
  return (
    <ClueLayout
      number={2}
      subtitle="Clue II"
      title="The map reveals more…"
      effectType="wind" // Explicitly setting pollen
      icon={<MapIcon />}
      clue="TBC"
      accentColor="hsl(35 85% 50%)"
      bgSymbol="🗺️"
    />
  );
}