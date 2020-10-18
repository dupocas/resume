import React from 'react'
import { useTheme } from 'react-jss'
import useStyles from './styles'
import clsx from 'clsx'

export const LanguageSwitch = ({
    variant,
    language,
    setLanguage
}) => {
    const theme = useTheme()
    const classes = useStyles({ theme })

    const containerStyle = clsx({
        [classes.container]: true,
        [classes.lightContainer]: variant === 'light'
    })

    const toggleLanguage = () => setLanguage(l => l === 'pt-br' ? 'en-us' : 'pt-br')

    return (
        <div className={containerStyle} onClick={toggleLanguage}>
            <div className={classes.icon}>
                {language === 'pt-br' ? 'EN' : 'PT'}
            </div>
        </div>
    )
}