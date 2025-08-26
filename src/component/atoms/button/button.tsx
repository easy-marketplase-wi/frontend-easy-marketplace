import style from "./button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "btnPrimary" | "btnSecondary";
}

export const Button = ({
  children,
  variant = "btnPrimary",
  ...props
}: ButtonProps) => {
  return (
    <button className={style[variant]} {...props}>
      {children}
    </button>
  );
};
