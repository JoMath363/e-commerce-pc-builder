import clsx from "clsx";
import type { ReactNode } from "react";

type ButtonProps = {
  text: string;
  href?: string; // if present, render as <a>
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};

export const MainButton = (props: ButtonProps) => {
  return (
    <Button
      {...props}
      className={clsx(
        
        props.className,
      )}
    />
  )
}

const Button = (props: ButtonProps) => {
  const Component = props.href ? "a" : "button";

  return (
    <Component
      href={props.href}
      onClick={props.onClick}
      disabled={props.disabled}
      className={props.className}
    >
      {props.iconLeft && <span className="flex-shrink-0">{props.iconLeft}</span>}
      <span>{props.text}</span>
      {props.iconRight && <span className="flex-shrink-0">{props.iconRight}</span>}
    </Component>
  );
};
