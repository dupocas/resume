import React, { useMemo } from 'react'
import { ThemeProvider as Provider } from 'react-jss'
import { ThemeGenerator } from './Theme'

export const ThemeProvider = ({
    children,
    variant
}) => {

    const MemoTheme = useMemo(() => ThemeGenerator(variant), [variant])
    return (
        <Provider theme={MemoTheme}>
            {children}
        </Provider>
    )
}