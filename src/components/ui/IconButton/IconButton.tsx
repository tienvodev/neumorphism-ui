import clsx from 'clsx';
import type { ComponentProps, ElementType, ReactNode } from 'react';
import styles from './IconButton.module.css';
import VisuallyHidden from '../VisuallyHidden';

type IconButtonOwnProps<E extends ElementType> = {
    variant?: 'filled' | 'ghost' | 'standard';
    size?: 'small' | 'medium' | 'large';
    as?: E;
    label?: string;
    children: ReactNode;
    className?: string;
    disabled?: boolean;
};

type IconButtonProps<E extends ElementType> = IconButtonOwnProps<E> &
    Omit<ComponentProps<E>, keyof IconButtonOwnProps<E>>;

export default function IconButton<E extends ElementType = 'button'>({
    variant = 'ghost',
    size = 'medium',
    as = 'button' as E,
    children,
    className,
    label,
    disabled,
    ...delegated
}: IconButtonProps<E>) {
    const Component = as as ElementType;
    return (
        <Component
            {...delegated}
            data-variant={variant}
            data-size={size}
            disabled={disabled}
            className={clsx(styles.IconButton, className)}
        >
            {label && <VisuallyHidden>{label}</VisuallyHidden>}
            <span
                aria-hidden
                className={styles.Icon}
            >
                {children}
            </span>
        </Component>
    );
}
