import React from 'react';
import { useEffect, useRef } from 'react';
import styles from './LoadingSpinner.module.css';
import dynamic from 'next/dynamic';
import loadingAnimation from './loading.json';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function LoadingSpinner() {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if (dialogRef.current) {
            dialogRef.current.showModal();
        }
    }, []);

    return (
        <dialog
            ref={dialogRef}
            className={styles.LoadingSpinner}
        >
            <Lottie
                animationData={loadingAnimation}
                loop
                autoPlay
                className={styles.LoadingIndicator}
            />
        </dialog>
    );
}
