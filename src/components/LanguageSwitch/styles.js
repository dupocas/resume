import { createUseStyles } from "react-jss";
import { desktopMedia } from '../../styles/mixins'
export default createUseStyles(theme => ({
    container: {
        position: 'absolute',
        right: 70,
        top: 60,
        height: 35,
        width: 35,
        padding: 10,
        boxSizing: 'border-box',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
        '&:hover': {
            transform: 'scale(1.1)'
        },
    },

    lightContainer: {
        backgroundColor: 'white'
    },

    icon: {
        color: theme.palette.text.primary
    },

    ...desktopMedia({
        container: {
            right: 80,
            top: 20,
            height: 45,
            width: 45,
        }
    })
}))