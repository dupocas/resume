import { createUseStyles } from "react-jss";
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
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        fontSize: 30,
        marginTop: '20px'
    },

    subtitle: {
        marginTop: '30px',
        textAlign: 'center'
    },

    ...desktopMedia({
        section: {
            alignItems: 'flex-start',
            marginLeft: '30px',
        },
        subtitle: {
            maxWidth: '700px',
            textAlign: 'left'
        }
    })
}))