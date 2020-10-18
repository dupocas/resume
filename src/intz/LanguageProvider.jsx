import React, { createContext, useMemo } from 'react'
import ptBR from './ptBR'
import enUS from './enUS'

export const LanguageContext = createContext()

export const LanguageProvider = ({
    children,
    language = 'pt-br'
}) => {
    const memoLang = useMemo(() => language === 'pt-br' ? ptBR : enUS, [language])
    return (
        <LanguageContext.Provider value={memoLang}>
            {children}
        </LanguageContext.Provider>
    )
}