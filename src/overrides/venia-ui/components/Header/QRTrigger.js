import React from 'react';
import QRIcon from './QRIcon.svg';
import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './QRTrigger.module.css';

const QRTrigger = ({ onPointerDown, isTopBar = false }) => {
    const classes = useStyle(defaultClasses);

    return (
        <div className={isTopBar ? classes.large : classes.root}>
            <span className="flex items-center" onPointerDown={onPointerDown}>
                <img src={QRIcon} alt="QR Scanner" width="30px" />
                <span className="hidden sm_inline sm_ml-1">QR Scanner</span>
            </span>
        </div>
    );
};

export default QRTrigger;
