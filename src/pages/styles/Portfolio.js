import { createUseStyles } from 'react-jss'
import { desktopMedia } from '../../styles/mixins'

export default createUseStyles(theme => ({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: theme.palette.background.light,
        color: theme.palette.text.primary,
        overflowX: 'hidden'
    },

    section: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    title: {
        fontSize: 30,
    },

    jobs: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        marginTop: '20px'
    },

    jobContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: theme.palette.text.primary,
    },

    job: {
        height: '150px',
        width: '250px',
        padding: 5,
        margin: '10px 20px',
        borderRadius: '10px',
        display: 'flex',
        border: '1px solid transparent',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        '& > img': {
            height: '130px',
            width: '130px'
        },
    },
    ...desktopMedia({
        jobs: {
            marginTop: 0,
            height: '60%',
            flexDirection: 'row',
            justifyContent: 'center',

        }
    })
}))