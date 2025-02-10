import clsx from 'clsx';
import type { ComponentProps, ElementType, ReactNode } from 'react';

import styles from './Fab.module.css';
import VisuallyHidden from '../VisuallyHidden';

type FabOwnProps<E extends ElementType> = {
    as?: E;
    label?: string;
    children: ReactNode;
    className?: string;
    disabled?: boolean;
};

type FabProps<E extends ElementType> = FabOwnProps<E> & Omit<ComponentProps<E>, keyof FabOwnProps<E>>;

export default function Fab<E extends ElementType = 'button'>({
    as = 'button' as E,
    children,
    className,
    label,
    disabled,
    ...delegated
}: FabProps<E>) {
    const Component = as as ElementType;
    return (
        <Component
            {...delegated}
            disabled={disabled}
            className={clsx(styles.Fab, className)}
        >
            {label && <VisuallyHidden>{label}</VisuallyHidden>}
            <span
                aria-hidden
                className={styles.NeumorphicLayer}
            />
            <span
                aria-hidden
                className={styles.Icon}
            >
                {children}
            </span>
        </Component>
    );
}
