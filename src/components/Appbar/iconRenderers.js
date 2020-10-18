import React from 'react'

import { BiHomeAlt, BiCog, BiCodeCurly, BiCuboid } from 'react-icons/bi'
import { DiStackoverflow, DiGithubBadge } from 'react-icons/di'
import { AiOutlineLinkedin } from 'react-icons/ai'

export const iconSize = '30px'

export const getSocialLink = name => {
    switch (name) {
        case 'github': return 'https://github.com/dupocas'
        case 'stackoverflow': return 'https://stackoverflow.com/users/10106580/dupocas'
        case 'linkedin': return 'https://www.linkedin.com/in/eduardo-po%C3%A7as-silva-66a6b5150/'
        default: return ''
    }
}

export const renderIcon = (name, size = iconSize) => {
    switch (name) {
        case 'home': return <BiHomeAlt size={size} />
        case 'about': return <BiCog size={size} />
        case 'skills': return <BiCuboid size={size} />
        case 'portfolio': return <BiCodeCurly size={size} />
        default: return null
    }
}

export const renderSocialIcon = name => {
    switch (name) {
        case 'stackoverflow': return <DiStackoverflow size={iconSize} />
        case 'github': return <DiGithubBadge size={iconSize} />
        case 'linkedin': return <AiOutlineLinkedin size={iconSize} />
        default: return null
    }
}
