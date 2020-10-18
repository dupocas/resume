import React, { useContext, useState } from 'react'
import { useTheme } from 'react-jss'
import { useTrail, animated } from 'react-spring'
import { Appbar } from '../components'
import { Content } from '../components/Content/Content'
import useStyles from './styles/Home'

import Typist from 'react-typist'
import TypistLoop from 'react-typist-loop'
import { useDimensions } from '../hooks/useDimensions'
import { LanguageContext } from '../intz/LanguageProvider'



const config = { mass: 5, tension: 2000, friction: 500 }

export const Home = () => {
    const theme = useTheme()
    const texts = useContext(LanguageContext)
    const classes = useStyles({ theme })

    const items = [texts.home.greetings.title, <span role='img' aria-label='happy emoji'>😁</span>]
    const subItems = [texts.home.greetings.subtitle]

    const isMobile = useDimensions()

    const [toggle] = useState(true)

    const trail = useTrail(items.length, {
        config,
        opacity: toggle ? 1 : 0,
        x: toggle ? 0 : 20,
        height: toggle ? 80 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    })

    const subTrail = useTrail(items.length, {
        config: config,
        opacity: toggle ? 1 : 0,
        x: toggle ? 0 : 20,
        height: toggle ? 80 : 0,
        from: { opacity: 0, x: 20, height: 0 },
        delay: 600
    })

    return (
        <div className={classes.container}>
            <Appbar />
            <Content>
                <div className={classes.section}>
                    {
                        !isMobile &&
                        <>
                            <div className={classes.context}>
                                <div className={classes.trailsMain}>
                                    {trail.map(({ x, height, ...rest }, index) => (
                                        <animated.div
                                            key={items[index]}
                                            className={classes.trailsText}
                                            style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}
                                        >
                                            <animated.div style={{ height }}>{items[index]}</animated.div>
                                        </animated.div>
                                    ))}
                                </div>

                                <div className={classes.trailsMain}>
                                    {subTrail.map(({ x, height, ...rest }, index) => (
                                        <animated.div
                                            key={items[index]}
                                            className={classes.trailsText}
                                            style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}
                                        >
                                            <animated.div style={{ height }}>
                                                {subItems[index]}
                                            </animated.div>
                                        </animated.div>
                                    ))}
                                    <TypistLoop>
                                        {[texts.home.loop.web, 'Mobile', 'Desktop'].map((text) => (
                                            <Typist
                                                key={text}
                                                startDelay={1000}
                                                cursor={{ blink: true, element: "|" }}
                                                className={classes.trailsText}
                                            >
                                                <span>{text}</span>
                                                <Typist.Backspace delay={2800} count={text.length} />
                                            </Typist>
                                        ))}
                                    </TypistLoop>
                                </div>
                            </div>


                            <div className={classes.area}>
                                <ul className={classes.circle}>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div >
                        </>
                    }
                    {
                        isMobile &&
                        <div>
                            <div className={classes.mobileTitle}>
                                {`${texts.home.greetings.title} `} <span role='img' aria-label='happy-emoji'>😁</span>
                            </div>
                            <div className={classes.mobileText}>
                                {`${texts.home.greetings.subtitle} `}
                                <TypistLoop>
                                    {[texts.home.loop.web, 'Mobile', 'Desktop'].map((text) => (
                                        <Typist
                                            key={text}
                                            startDelay={800}
                                            cursor={{ blink: true, element: "|" }}
                                            className={classes.mobileText}
                                        >
                                            <span>{text}</span>
                                            <Typist.Backspace delay={2800} count={text.length} />
                                        </Typist>
                                    ))}
                                </TypistLoop>
                            </div>
                        </div>
                    }
                </div>
            </Content>
        </div>
    )
}
