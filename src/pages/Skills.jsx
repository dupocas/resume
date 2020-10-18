import React, { useContext } from 'react'
import { useTheme } from 'react-jss'
import { Appbar } from '../components'
import { Content } from '../components/Content/Content'
import useStyles from './styles/Skills'
import { LanguageContext } from '../intz/LanguageProvider'

export const Skills = () => {
    const theme = useTheme()
    const classes = useStyles({ theme })
    const texts = useContext(LanguageContext)
    return (
        <div className={classes.container}>
            <Appbar />
            <Content>
                <div className={classes.section}>
                    <div className={classes.title}>
                        {texts.skills.title}
                    </div>
                    <div className={classes.subtitle}>
                        {texts.skills.subtitle.map((text, i) => (
                            <p key={i}>
                                {text}
                            </p>
                        ))}
                    </div>
                </div>
            </Content>
        </div>
    )
}