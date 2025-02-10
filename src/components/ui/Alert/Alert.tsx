import React from 'react';
import { ReactNode } from 'react';
import clsx from 'clsx';
import Text from '../Text';
import VisuallyHidden from '../VisuallyHidden';
import styles from './Alert.module.css';
import dynamic from 'next/dynamic';
import successAnimation from './success.json';
import errorAnimation from './error.json';
import warningAnimation from './warning.json';
import infoAnimation from './info.json';
import confettiAnimation from './confetti.json';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

type AlertProps = {
    title?: string;
    type: 'info' | 'success' | 'warning' | 'error';
    children: ReactNode;
    className?: string;
};

export default function Alert({ title, children, type = 'info', className }: AlertProps) {
    return (
        <div
            data-type={type}
            className={clsx(styles.Alert, className)}
            role='alert'
        >
            {title && <VisuallyHidden as='h1'>{title}</VisuallyHidden>}
            <AlertIcon type={type} />
            <Text
                as='p'
                className={styles.Message}
            >
                {children}
            </Text>
        </div>
    );
}

const animationData = {
    info: infoAnimation,
    success: successAnimation,
    warning: warningAnimation,
    error: errorAnimation,
};

function AlertIcon({ type }: { type: AlertProps['type'] }) {
    return (
        <span className={styles.IconContainer}>
            {type === 'success' && (
                <Lottie
                    animationData={confettiAnimation}
                    loop={false}
                    autoplay
                    className={styles.Confetti}
                />
            )}
            <Lottie
                animationData={animationData[type]}
                loop={false}
                autoplay
                className={styles.Icon}
            />
        </span>
    );
}
