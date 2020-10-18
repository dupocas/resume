import { VIEWPORTS } from '../utils/viewports'

export const desktopMedia = props => {
    return {
        [`@media (min-width: ${VIEWPORTS.DESKTOP}px)`]: {
            ...props
        }
    }
}
