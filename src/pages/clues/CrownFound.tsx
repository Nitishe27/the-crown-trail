import ClueLayout from "@/components/ClueLayout";
import { CrownFinalIcon } from "@/components/ClueIcons";

export default function CrownFound() {
  return (
    <ClueLayout
      number={10}
      subtitle="Clue X — Final"
      title="The Crown Found"
      icon={<CrownFinalIcon />}
      flavor="The conspiracy ends here. Justice begins."
      clue="You've followed every thread, unmasked the lie — the crown was hidden where the old graves lie. Beneath the stone of Queen Maren's rest, the greatest treasure pressed against her chest."
      accentColor="hsl(43 95% 65%)"
      bgSymbol="👑"
      prevPath="/footprints"
      nextPath="/"
      nextLabel="↩ Return Home"
    />
  );
}
