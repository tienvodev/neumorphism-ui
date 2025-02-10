import { useEffect, useRef } from 'react';
import Text from '../Text';
import styles from './Modal.module.css';
import IconButton from '../IconButton';
import clsx from 'clsx';
import { X as XIcon } from '@phosphor-icons/react';

export default function Modal({
    open,
    title,
    children,
    onClose,
    description,
}: {
    open: boolean;
    title: string;
    children: React.ReactNode;
    onClose: () => void;
    description?: string;
}) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;

        if (!dialog) {
            return;
        }

        if (open) {
            dialog.showModal();
        } else {
            dialog.close();
        }

        return () => {
            dialog.close();
        };
    }, [open]);

    return (
        <dialog
            className={styles.Modal}
            ref={dialogRef}
        >
            <Text
                as='h2'
                level='2'
                className={styles.Title}
            >
                {title}
            </Text>
            {description && (
                <Text
                    as='p'
                    level='6'
                    className={styles.Description}
                >
                    {description}
                </Text>
            )}
            <div className={styles.Content}>{children}</div>
            <IconButton
                aria-label='Close'
                className={clsx(styles.CloseIconButton)}
                onClick={onClose}
            >
                <XIcon />
            </IconButton>
        </dialog>
    );
}

export function ModalActions({ children }: { children: React.ReactNode }) {
    return <div className={styles.Actions}>{children}</div>;
}
