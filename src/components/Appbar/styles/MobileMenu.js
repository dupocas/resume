import { createUseStyles } from "react-jss"

export default createUseStyles(theme => ({
    container: {
        width: '100%',
        height: '50px',
        boxSizing: 'border-box',
        padding: '0 10px',
        backgroundColor: theme.palette.background.dark,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    hamburguer: {
        color: 'white',
        cursor: 'pointer'
    },

    sidePanel: {
        position: 'fixed',
        top: 0,
        left: '-200px',
        width: '200px',
        height: '100%',
        backgroundColor: theme.palette.background.dark,
        transformOrigin: 'top left',
        transform: 'translateX(0)'
    },

    sideMenu: {
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },

    list: {
        listStyleType: 'none',
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    },

    listItem: {
        display: 'flex',
        alignItems: 'center',
        padding: 5,
        '&:hover':{
            backgroundColor: theme.palette.background.light
        }
    },

    icon: {
        color: theme.palette.primary,
        padding: 5
    },

    title: {
        color: 'white',
        padding: 5
    },

    socialIcons: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: 10
    },

    socialIcon: {
        color: 'white',
        '&:hover': {
            color: theme.palette.primary
        }
    }

}))