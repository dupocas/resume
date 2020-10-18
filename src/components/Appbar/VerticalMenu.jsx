import React from 'react'
import { useTheme } from 'react-jss'
import useStyles from './styles/VerticalMenu'

import { menuItems } from './menuItems'


import { Link, useLocation } from 'react-router-dom'
import { socialItems } from './socialItems'
import { renderIcon, renderSocialIcon, getSocialLink } from './iconRenderers'
import { Logo } from '../Logo/Logo'

import clsx from 'clsx'

export const VerticalMenu = () => {

    const theme = useTheme()
    const classes = useStyles({ theme })

    const location = useLocation()

    const getIconStyle = path => {
        return clsx({
            [classes.icon]: true,
            [classes.activeIcon]: location.pathname === path
        })
    }

    const renderItems = () => {
        return menuItems.map(item => (
            <Link to={item.path} key={item.name}>
                <div className={getIconStyle(item.path)}>
                    {renderIcon(item.name)}
                </div>
            </Link>
        ))
    }

    const renderSocialIcons = () => {
        return socialItems.map(item => (
            <a key={item.name} href={getSocialLink(item)} target='_blank' rel='noopener noreferrer'>
                <div className={classes.socialIcon} >
                    {renderSocialIcon(item)}
                </div>
            </a>

        ))
    }

    return (
        <div className={classes.container}>
            <div className={classes.items}>
                <div className={classes.logo}>
                    <Logo />
                </div>
                {renderItems()}
            </div>
            <div className={classes.socialItems}>
                {renderSocialIcons()}
            </div>
        </div>
    )
}