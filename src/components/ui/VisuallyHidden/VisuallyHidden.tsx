import type { ComponentProps, ElementType, ReactNode } from 'react';

import styles from './VisuallyHidden.module.css';

type VisuallyHiddenOwnProps<E extends ElementType> = {
    as?: E;
    children?: ReactNode;
};

type VisuallyHiddenProps<E extends ElementType> = VisuallyHiddenOwnProps<E> &
    Omit<ComponentProps<E>, keyof VisuallyHiddenOwnProps<E>>;

export default function VisuallyHidden<E extends ElementType = 'div'>({
    as,
    children,
    ...delegated
}: VisuallyHiddenProps<E>) {
    const Component = as || 'div';
    return (
        <Component
            {...delegated}
            className={styles.VisuallyHidden}
        >
            {children}
        </Component>
    );
}
