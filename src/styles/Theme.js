import { DarkPalette, LightPalette } from "./Palettes"

export const ThemeGenerator = (variant = 'dark') => {
    return {
        palette: getPalette(variant)
    }
}

const getPalette = variant =>{
    return variant === 'dark' ? DarkPalette : LightPalette
}

