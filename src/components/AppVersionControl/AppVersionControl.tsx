/*
 * ******************************************************************************
 * Copyright Innov'ATM all rights reserved. This software is the property of
 * Innov'ATM and may not be used in any manner except under a license agreement
 * signed with Innov'ATM.
 * *******************************************************************************
 */

import React, { memo } from 'react';
import { styled } from '@mui/system';

const StyledAppVersionContainer = styled('div')`
    position: absolute;
    bottom: 25px;
    left: 22px;
    font-size: 11px;
    color: #868686;
    opacity: 0.6;
    pointer-events: none;
    padding: 0 10px;
    z-index: 1;
`;
export const AppVersionControl = memo(function AppVersionControl({
    version,
    env,
    hash,
}: {
    version: string;
    env: 'prod' | 'dev';
    hash?: string;
}) {
    return (
        <StyledAppVersionContainer>
            {version}
            {env !== 'prod' && (
                <span>
                    {hash && ' | '}
                    {hash}
                </span>
            )}
        </StyledAppVersionContainer>
    );
});
