import { ComponentProps } from 'react';
import styles from './Checkbox.module.css';

export default function Checkbox(props: Omit<ComponentProps<'input'>, 'type'>) {
    return (
        <input
            {...props}
            type='checkbox'
            className={styles.Checkbox}
        />
    );
}
