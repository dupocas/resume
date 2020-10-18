import React from 'react'
import { useTheme } from 'react-jss'
import useStyles from './styles'
import { MdInvertColors } from 'react-icons/md'
import clsx from 'clsx'

export const ThemeSwitch = ({
    variant,
    setVariant
}) => {
    const theme = useTheme()
    const classes = useStyles({ theme })

    const containerStyle = clsx({
        [classes.container]: true,
        [classes.lightContainer]: variant === 'light'
    })

    return (
        <div className={containerStyle} onClick={setVariant}>
            <div className={classes.icon}>
                <MdInvertColors size={35} />
            </div>
        </div>
    )
}