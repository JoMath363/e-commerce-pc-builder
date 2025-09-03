import clsx from "clsx";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  text?: string;
  href?: string; // if present, render as <a>
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};

export const PrimaryButton = (props: ButtonProps) => {
  return (
    <Button
      {...props}
      className={clsx(
        "bg-[var(--primary)] text-[var(--accent)] rounded hover:bg-[var(--secondary)] active:bg-[var(--accent)] active:text-[var(--text-1)]",
        props.className,
      )}
    />
  )
}

export const SecondaryButton = (props: ButtonProps) => {
  return (
    <Button
      {...props}
      className={clsx(
        "bg-[var(--primary)] text-[var(--accent)] rounded hover:bg-[var(--secondary)] active:bg-[var(--accent)] active:text-[var(--text-1)]",
        props.className,
      )}
    />
  )
}

export const TextButton = (props: ButtonProps) => {
  return (
    <Button
      {...props}
      className={clsx(
        "text-[var(--primary)] hover:text-[var(--secondary)] active:text-[var(--text-1)]",
        props.className,
      )}
    />
  )
}

export const SelectionButton = (props: ButtonProps) => {
  return (
    <Button
      {...props}
      className={clsx(
        "border-1 border-[var(--border-2)] rounded-lg text-[var(--text-2)] hover:bg-[var(--surface)] hover:text-[var(--text-1)] active:border-[var(--primary)] active:text-[var(--primary)] active:bg-transparent",
        props.className,
      )}
    />
  )
}

export const Button = (props: ButtonProps) => {
  return props.href ? (
    <Link
      to={props.href}
      className={props.className}
    >
      {props.iconLeft && <span>{props.iconLeft}</span>}
      {props.text && <span>{props.text}</span>}
      {props.iconRight && <span>{props.iconRight}</span>}
    </Link>
  ) : (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className={props.className}
    >
      {props.iconLeft && <span>{props.iconLeft}</span>}
      {props.text && <span>{props.text}</span>}
      {props.iconRight && <span>{props.iconRight}</span>}
    </button>
  );
};
