import React from 'react'
import { useDimensions } from '../../hooks/useDimensions'
import { MobileMenu } from './MobileMenu'
import { VerticalMenu } from './VerticalMenu'

export const Appbar = () => {
    const isMobile = useDimensions()
    return isMobile ? <MobileMenu /> : <VerticalMenu />
}