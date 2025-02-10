import clsx from 'clsx';
import type { ComponentProps } from 'react';

import styles from './Input.module.css';

export default function Input({
    type,
    placeholder,
    name,
    id,
    value,
    onChange,
    className,
    ...delegated
}: ComponentProps<'input'>) {
    return (
        <span className={styles.InputWrapper}>
            <input
                {...delegated}
                type={type}
                placeholder={placeholder}
                name={name}
                id={id}
                value={value}
                onChange={onChange}
                className={clsx(styles.Input, className)}
            />
        </span>
    );
}
