import React, { useContext } from 'react'
import { useTheme } from 'react-jss'
import { Appbar } from '../components'
import { Content } from '../components/Content/Content'
import useStyles from './styles/About'
import { LanguageContext } from '../intz/LanguageProvider'

export const About = () => {
    const theme = useTheme()
    const classes = useStyles({ theme })
    const texts = useContext(LanguageContext)
    return (
        <div className={classes.container}>
            <Appbar />
            <Content>
                <div className={classes.section}>
                    <div className={classes.title}>
                        {texts.about.title}
                    </div>
                    <div className={classes.bio}>
                        {texts.about.bio.map((text, i) => (
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