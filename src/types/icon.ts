import { iconMap } from "../component/atoms/icons/icon";

export interface IconProps {
  color?: string;
  className?: string;
}


interface Props extends IconProps {
  name: keyof typeof iconMap;
}