import React, { useState } from 'react'
import { useTheme } from 'react-jss'
import useStyles from './styles/MobileMenu'

import { BiMenu } from 'react-icons/bi'
import { getSocialLink, iconSize, renderIcon, renderSocialIcon } from './iconRenderers'
import { useSpring, animated } from 'react-spring'
import { menuItems } from './menuItems'
import { Link } from 'react-router-dom'
import { socialItems } from './socialItems'

export const MobileMenu = () => {
    const theme = useTheme()
    const classes = useStyles({ theme })

    const [open, setOpen] = useState(false)
    const props = useSpring({
        transform: open ? 'translateX(100%)' : 'translateX(0%)',
    })

    const toggle = () => setOpen(o => !o)

    const renderItems = () => {
        return menuItems.map(item => (
            <Link to={item.path} key={item.name} style={{ textDecoration: 'none' }}>
                <li className={classes.listItem}>
                    <div className={classes.icon}>{renderIcon(item.name, '20px')}</div>
                    <div className={classes.title}>{item.title}</div>
                </li>
            </Link>

        ))
    }

    const renderSocialIcons = () => {
        return socialItems.map(item => (
            <a key={item} href={getSocialLink(item)} target='_blank' rel='noopener noreferrer'>
                <div className={classes.socialIcon}>
                    {renderSocialIcon(item)}
                </div>
            </a>
        ))
    }

    return (
        <div className={classes.container}>
            <div className={classes.hamburguer} onClick={toggle}>
                <BiMenu size={iconSize} />
            </div>

            {
                <animated.div className={classes.sidePanel} style={props}>
                    <div className={classes.sideMenu}>
                        <ul className={classes.list}>
                            {renderItems()}
                        </ul>
                        <div className={classes.socialIcons}>
                            {renderSocialIcons()}
                        </div>
                    </div>
                </animated.div>
            }
        </div>
    )
}