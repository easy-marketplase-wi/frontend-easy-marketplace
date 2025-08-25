import { NavLink } from "react-router-dom";
import styles from "./menu.module.css";

import { IconProps } from "../../atoms/icons/drink";

import { MenuItem } from "../menu-item/menu-item";

type MenuItemType = {
  to: string;
  text: string;
  icon: "pizza" | "drinks" | "desserts" | "combos" | "burguers"; // Agora usamos uma string literal type
};

export type MenuItem = {
  to: string;
  text: string;
  Icon: React.ComponentType<IconProps>;
};

const menuItems: MenuItemType[] = [
  { to: "/pizza", text: "Pizza", icon: "pizza" },
  { to: "/bebidas", text: "Bebidas", icon: "drinks" },
  { to: "/sobremesas", text: "Sobremesas", icon: "desserts" },
  { to: "/combos", text: "Combos", icon: "combos" },
  { to: "/burguers", text: "Burguers", icon: "burguers" },
];

export const Menu = () => {
  return (
    <nav className={styles.nav}>
      {menuItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          {({ isActive }) => <MenuItem isActive={isActive} item={item} />}
        </NavLink>
      ))}
    </nav>
  );
};
