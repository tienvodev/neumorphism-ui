import { ComponentProps, ElementType, ReactNode } from 'react';
import styles from './MaxWidthWrapper.module.css';
import clsx from 'clsx';

type MaxWidthWrapperOwnProps<E extends ElementType> = {
    as?: E;
    className?: string;
    children: ReactNode;
};

type MaxWidthWrapperProps<E extends ElementType> = MaxWidthWrapperOwnProps<E> &
    Omit<ComponentProps<E>, keyof MaxWidthWrapperOwnProps<E>>;

export default function MaxWidthWrapper<E extends ElementType = 'div'>({
    as = 'div' as E,
    children,
    className,
    ...delegated
}: MaxWidthWrapperProps<E>) {
    const Component = as as ElementType;
    return (
        <Component
            {...delegated}
            className={clsx(styles.MaxWidthWrapper, className)}
        >
            {children}
        </Component>
    );
}
