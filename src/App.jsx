import React, { useState } from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { LanguageSwitch } from './components/LanguageSwitch/LanguageSwitch'
import { ThemeSwitch } from './components/ThemeSwitch/ThemeSwitch'
import { LanguageProvider } from './intz/LanguageProvider'
import { Home, About, Portfolio, Skills } from './pages'
import { ThemeProvider } from './styles/ThemeProvider'

const App = () => {
    const [variant, setVariant] = useState('dark')
    const [language, setLanguage] = useState('pt-br')

    const toggleVariant = () => setVariant(v => v === 'light' ? 'dark' : 'light')

    return (
        <LanguageProvider language={language}>
            <ThemeProvider variant={variant}>
                <Router>
                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                        <Route path='/about'>
                            <About />
                        </Route>
                        <Route path='/skills'>
                            <Skills />
                        </Route>
                        <Route path='/portfolio'>
                            <Portfolio language={language} />
                        </Route>
                    </Switch>
                </Router>
                <ThemeSwitch setVariant={toggleVariant} variant={variant} />
                <LanguageSwitch
                    setVariant={toggleVariant}
                    variant={variant}
                    language={language}
                    setLanguage={setLanguage}
                />
            </ThemeProvider>
        </LanguageProvider>
    )
}

export default App