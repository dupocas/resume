import { createUseStyles } from "react-jss";

export default createUseStyles(theme => ({
    container: {
        position: 'fixed',
        left: 0,
        top: 0,
        width: '50px',
        height: '100%',
        boxSizing: 'border-box',
        padding: 10,
        paddingTop: 0,
        marginTop: 0,
        backgroundColor: theme.palette.background.dark,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: '9999'
    },

    logo: {
        height: '50px',
        width: '50px',
        marginBottom: '20px'
    },

    icon: {
        color: theme.palette.primary,
        padding: 5,
        '&:hover': {
            color: theme.palette.secondary
        }
    },

    activeIcon: {
        color: theme.palette.secondary
    },

    socialIcon: {
        color: 'white',
        padding: 5,
        '&:hover': {
            color: theme.palette.primary
        }
    }
}))