import { IconProps } from "../../../types/icon";
import { ArrowLeftIcon } from "./arrow-left";

import { BurguersIcon } from "./burguers";
import { CombosIcon } from "./combos";
import { DeliveryIcon } from "./delivery";
import { DessertsIcon } from "./desserts";
import { DrinksIcon } from "./drink";
import { PackageIcon } from "./package";
import { PizzaIcon } from "./pizza";

export const iconMap = {
  pizza: PizzaIcon,
  drinks: DrinksIcon,
  desserts: DessertsIcon,
  combos: CombosIcon,
  burguers: BurguersIcon,
  delivery: DeliveryIcon,
  arrowLeft:ArrowLeftIcon,
  package: PackageIcon
};

interface Props extends IconProps {
  name: keyof typeof iconMap;
}

export const Icon = ({ name, ...props }: Props) => {
  const IconComponent = iconMap[name];
  return IconComponent ? <IconComponent {...props} /> : null;
};