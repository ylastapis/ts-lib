/*
 * ******************************************************************************
 * Copyright Innov'ATM all rights reserved. This software is the property of
 * Innov'ATM and may not be used in any manner except under a license agreement
 * signed with Innov'ATM.
 * *******************************************************************************
 */

import React from 'react';
import { memo, ReactNode } from 'react';
import SearchIcon from '../assets/icons/airport.svg';

export const ControlButton = memo(function ControlButton({ icon, label }: { icon?: ReactNode; label?: ReactNode }) {
    return (
        <button>
            <SearchIcon width={13} height={13} />
            {label}
        </button>
    );
});
