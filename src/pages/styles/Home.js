import { createUseStyles } from 'react-jss'
export default createUseStyles(theme => ({
    container: {
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: theme.palette.background.light,
        color: theme.palette.text.primary,
        overflow: 'hidden !important',
    },

    section: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

    trailsMain: {
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    trailsText: {
        height: '80px',
        lineHeight: '80px',
        color: theme.palette.primary,
        fontSize: '40px',
        fontWeight: 800,
        willChange: 'transform, opacity',
        textAlign: 'center',
        overflow: 'hidden',
        marginLeft: '10px',
        '& > div': {
            overflow: 'hidden'
        }
    },

    mobileTitle: {
        height: '40px',
        lineHeight: '40px',
        color: theme.palette.primary,
        fontSize: '20px',
        fontWeight: 800,
        textAlign: 'center',
        textTransform: 'uppercase'
    },

    mobileText: {
        height: '40px',
        lineHeight: '40px',
        color: theme.palette.primary,
        fontSize: '20px',
        fontWeight: 800,
        textAlign: 'center',
    },

    context: {
        width: '100%',
        position: 'absolute',
        overflow: 'hidden',
        '& > h1': {
            textAlign: 'center',
            color: '#fff',
            fontSize: '50px',
        }
    },

    area: {
        background: '-webkit-linear-gradient(to left, #8f94fb, #4e54c8)',
        width: '100%',
        height: '100vh',
        overflow: 'hidden'
    },

    circle: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        '& > li': {
            position: 'absolute',
            display: 'block',
            listStyle: 'none',
            width: '20px',
            height: '20px',
            background: 'rgba(252,16,86, .7)',
            animation: '$animate 25s linear infinite',
            bottom: '-150px',
            '&::nth-child(1)': {
                left: '25%',
                width: '80px',
                height: '80px',
                animationDelay: '0s'
            },
            '&:nth-child(2)': {
                left: '10%',
                width: '20px',
                height: '20px',
                animationDelay: '2s',
                animationDuration: '12s'
            },
            '&:nth-child(3)': {
                left: '70%',
                width: '20px',
                height: '20px',
                animationDelay: '4s'
            },
            '&:nth-child(4)': {
                left: '40%',
                width: '60px',
                height: '60px',
                animationDelay: '0s',
                animationDuration: '18s'
            },
            '&:nth-child(5)': {
                left: '65%',
                width: '20px',
                height: '20px',
                animationDelay: '0s'
            },
            '&:nth-child(6)': {
                left: '75%',
                width: '110px',
                height: '110px',
                animationDelay: '3s'
            },
            '&:nth-child(7)': {
                left: '35%',
                width: '150px',
                height: '150px',
                animationDelay: '7s'
            },
            '&:nth-child(8)': {
                left: '50%',
                width: '25px',
                height: '25px',
                animationDelay: '15s',
                animationDuration: '45s'
            },
            '&:nth-child(9)': {
                left: '20%',
                width: '15px',
                height: ' 15px',
                animationDelay: '2s',
                animationDuration: '35s'
            },
            '&:nth-child(10)': {
                left: '85%',
                width: '150px',
                height: '150px',
                animationDelay: '0s',
                animationDuration: '11s'
            }


        }
    },

    '@keyframes animate': {

        '0%': {
            transform: 'translateY(0) rotate(0deg)',
            opacity: 1,
            borderRadius: 0
        },

        '100%': {
            transform: 'translateY(-1000px) rotate(720deg)',
            opacity: 0,
            borderRadius: '50%'
        }

    }


}))