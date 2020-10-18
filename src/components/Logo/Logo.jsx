import React from 'react'

export const Logo = ({
    height = '50',
    width = '50',
    stroke = '#fc1056'
}) => {

    const style = {
        fill: 'none',
        stroke,
        strokeWidth: 30,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeMiterLimit: 10
    }

    return (
        <svg
            x="0px"
            y="0px"
            viewBox="0 0 1080 1080"
            style={{ height, width }}
        >

            <g id="Camada_1">
            </g>
            <g id="Camada_2">
                <g>
                    <path style={{...style, stroke: '#06fddd'}} d="M363.66,544.59c0,0-33,17-24,22s307-194,343-297c0,0-433.46,645.63-511,634
			c-56.56-8.48-57.5-138.5,79.64-265.25c15.18-14.03,34.86-30.25,50.79-47.29c30.1-32.18,86.57-77.47,127.57,10.53
			c64.18,137.76,283.34,156.41,455,8c61.48-53.15,85-116,94-184"/>
                    <path style={style} d="M807.66,510.59c0,0-510.38,80.38-693.4,40.17c0,0-50.6-22.17,48.4-57.17
			c92.81-32.81,344.71-156.15,443.4-240.66c19.68-16.85,40.96-31.74,63.79-43.98c85.5-45.84,130.81-49.36,112.81,27.64
			c0,0-57,135-231,360s-195,263-164,240s52-41,52-41"/>
                </g>
            </g>
        </svg>
    )
}

