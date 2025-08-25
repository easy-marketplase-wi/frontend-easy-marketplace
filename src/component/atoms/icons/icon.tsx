import { IconProps } from "../../../types/icon";

import { BurguersIcon } from "./burguers";
import { CombosIcon } from "./combos";
import { DessertsIcon } from "./desserts";
import { DrinksIcon } from "./drink";
import { PizzaIcon } from "./pizza";

export const iconMap = {
  pizza: PizzaIcon,
  drinks: DrinksIcon,
  desserts: DessertsIcon,
  combos: CombosIcon,
  burguers: BurguersIcon,
};

interface Props extends IconProps {
  name: keyof typeof iconMap;
}

export const Icon = ({ name, ...props }: Props) => {
  const IconComponent = iconMap[name];
  return IconComponent ? <IconComponent {...props} /> : null;
};