import { Icon } from "../../atoms/icons/icon";

type MenuItemType = {
  to: string;
  text: string;
  icon: 'pizza' | 'drinks' | 'desserts' | 'combos' | 'burguers'; // Agora usamos uma string literal type
};

interface MenuItemContentProps {
  isActive: boolean;
  item: MenuItemType;
}

export const MenuItem = ({ isActive, item }: MenuItemContentProps) => {
  const activeColor = '#FFA500';
  const inactiveColor = '#848484';
  const { icon, text } = item;

  return (
    <>
     <Icon name={icon} color={isActive ? activeColor : inactiveColor} />
      <span>{text}</span>
    </>
  );
};