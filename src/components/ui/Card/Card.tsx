import clsx from 'clsx';
import type { ComponentProps, ElementType, ReactNode } from 'react';

import styles from './Card.module.css';

type CardOwnProps<E extends ElementType> = {
    as?: E;
    className?: string;
    contentClassName?: string;
    children: ReactNode;
};

type CardProps<E extends ElementType> = CardOwnProps<E> & Omit<ComponentProps<E>, keyof CardOwnProps<E>>;

export default function Card<E extends ElementType = 'div'>({
    as = 'div' as E,
    children,
    className,
    contentClassName,
    ...delegated
}: CardProps<E>) {
    const Component = as as ElementType;
    return (
        <Component
            {...delegated}
            className={clsx(styles.Card, className)}
        >
            <div
                aria-hidden
                className={styles.NeumorphicLayer}
            />
            <div className={clsx(styles.Content, contentClassName)}>{children}</div>
        </Component>
    );
}
