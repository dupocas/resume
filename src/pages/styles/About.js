import { createUseStyles } from 'react-jss'
import { desktopMedia } from '../../styles/mixins'

export default createUseStyles(theme => ({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: theme.palette.background.light,
        color: theme.palette.text.primary,
        overflow: 'hidden',
    },

    section: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },

    title: {
        fontSize: 30,
        marginTop: '20px'
    },

    bio: {
        width: '100%',
        fontWeight: 500,
        textAlign: 'center'
    },

    ...desktopMedia({
        bio: {
            maxWidth: '700px',
            textAlign: 'left'
        },

        section:{
            marginLeft: '30px',
            justifyContent: 'center',
            alignItems: 'flex-start'
        }
    })
}))