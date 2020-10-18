import React from 'react'
import { useDimensions } from '../../hooks/useDimensions'
import clsx from 'clsx'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    container: {
        marginLeft: '50px',
        padding: 10,
        boxSizing: 'border-box',
        height: '100%',
        width: '100%'
    },
    mobileContainer: {
        padding: 10,
        boxSizing: 'border-box',
        height: '100%',
        width: '100%'
    }
})

export const Content = ({
    children
}) => {
    const isMobile = useDimensions()

    const classes = useStyles()

    const style = clsx({
        [classes.container]: !isMobile,
        [classes.mobileContainer]: isMobile
    })

    return (
        <div className={style}>
            {children}
        </div>
    )
}