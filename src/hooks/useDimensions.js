import { useState, useEffect } from 'react'
import { VIEWPORTS } from '../utils/viewports'

export const useDimensions = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < VIEWPORTS.DESKTOP)

    useEffect(() => {
        const handleWindowSizeChange = () => setIsMobile(window.innerWidth < VIEWPORTS.DESKTOP)
        handleWindowSizeChange()
        window.addEventListener('resize', handleWindowSizeChange)
        return () => window.removeEventListener('resize', handleWindowSizeChange)
    }, [])

    return isMobile
}