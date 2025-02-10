'use client';
import type { ComponentProps } from 'react';
import { X as XIcon } from '@phosphor-icons/react';
import clsx from 'clsx';

import styles from './TextField.module.css';
import IconButton from '../IconButton';
import Input from '../Input';
import VisuallyHidden from '../VisuallyHidden';
import Text from '../Text';

type TextFieldOwnProps = {
    label: string;
    supportingText?: string;
    isValid?: boolean;
    onInputClear: () => void;
};

type TextFieldProps = TextFieldOwnProps & Omit<ComponentProps<typeof Input>, keyof TextFieldOwnProps>;

export default function TextField({
    label,
    supportingText,
    isValid,
    id,
    name,
    value,
    onInputClear,
    ...delegated
}: TextFieldProps) {
    function handleInputClear() {
        onInputClear();
    }

    return (
        <div className={styles.TextField}>
            <VisuallyHidden
                as='label'
                htmlFor={id || name}
            >
                {label}
            </VisuallyHidden>
            <Input
                {...delegated}
                id={id || name}
                name={name}
                value={value}
                className={styles.Input}
                aria-invalid={!isValid}
                aria-describedby={supportingText ? 'supporting-text' : undefined}
            />
            <div
                className={clsx(
                    styles.ClearButton,
                    (delegated.disabled || delegated.readOnly || !value) && styles.Hidden,
                )}
            >
                <IconButton
                    type='button'
                    size='small'
                    aria-label={`Clear ${label} input`}
                    onClick={handleInputClear}
                    disabled={delegated.disabled}
                >
                    <XIcon />
                </IconButton>
            </div>
            {supportingText && (
                <Text
                    id='supporting-text'
                    className={styles.SupportingText}
                    level='13'
                >
                    {supportingText}
                </Text>
            )}
        </div>
    );
}
