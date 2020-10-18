import React, { useContext } from 'react'
import { useTheme } from 'react-jss'
import { Appbar } from '../components'
import { Content } from '../components/Content/Content'
import { LanguageContext } from '../intz/LanguageProvider'
import { jobs } from '../utils/jobs'
import useStyles from './styles/Portfolio'

export const Portfolio = ({
    language
}) => {

    const theme = useTheme()
    const classes = useStyles({ theme })
    const texts = useContext(LanguageContext)

    const getJobTitle = title => {
        if (language === 'pt-br') return title

        switch (title) {
            case 'Dudaui': return 'Dudaui'
            case 'Generators, hooks e springs': return 'Generators, hooks and springs'
            default: return null
        }

    }

    return (
        <div className={classes.container}>
            <Appbar />
            <Content>
                <div className={classes.section}>
                    <div className={classes.title}>
                        Portfolio
                    </div>
                    <div className={classes.subtitle}>
                        {texts.portfolio.subtitle}
                    </div>
                    <div className={classes.jobs}>
                        {
                            jobs.map(job => (
                                <a key={job.name} href={job.href} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                                    <div className={classes.jobContainer}>
                                        <div className={classes.job}>
                                            <img src={job.img} alt='job-miniature' />
                                        </div>
                                        <div className={classes.jobTitle}>
                                            {getJobTitle(job.title)}
                                        </div>
                                    </div>
                                </a>

                            ))
                        }
                    </div>
                </div>

            </Content>
        </div >
    )
}