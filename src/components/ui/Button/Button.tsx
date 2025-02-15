import clsx from "clsx";
import type { ComponentProps, ElementType, ReactNode } from "react";
import buttonStyles from "./Button.module.css";
import Text from "../Text";

type ButtonOwnProps<E extends ElementType> = {
  as?: E;
  glow?: boolean;
  children: ReactNode;
  className?: string;
};

type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
  Omit<ComponentProps<E>, keyof ButtonOwnProps<E>>;

export default function Button<E extends ElementType = "button">({
  as,
  glow,
  children,
  className,
  ...delegated
}: ButtonProps<E>) {
  const Component = as || "button";
  return (
    <Component {...delegated} className={clsx(buttonStyles.Button, className)}>
      {glow && <span aria-hidden className={buttonStyles.GlowLayer} />}
      <span aria-hidden className={buttonStyles.NeumorphicLayer} />
      <Text as="span" className={buttonStyles.Label}>
        {children}
      </Text>
    </Component>
  );
}
