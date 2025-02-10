import type { ComponentProps, ElementType, ReactNode } from 'react';
import textStyles from './Text.module.css';
import clsx from 'clsx';

type TextOwnProps<E extends ElementType> = {
    level?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | '14' | '15';
    as?: E;
    children: ReactNode;
    className?: string;
    color?: 'success' | 'error' | 'warning';
};

type TextProps<E extends ElementType> = TextOwnProps<E> & Omit<ComponentProps<E>, keyof TextOwnProps<E>>;

export default function Text<E extends ElementType = 'p'>({
    level = '2',
    as,
    children,
    className,
    color,
    ...delegated
}: TextProps<E>) {
    const Component = as || 'p';

    return (
        <Component
            {...delegated}
            data-typescale={level}
            data-color={color}
            className={clsx(textStyles.Text, className)}
        >
            {children}
        </Component>
    );
}
