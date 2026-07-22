import React, { useState } from 'react'
import { createContext } from 'react'

export const ScreenScaleContext = createContext()


export function ScreenScaleProvider({children}) {
    const [screenScale, setScreenScale] = useState(10)

    return (
        <ScreenScaleContext.Provider value={{screenScale, setScreenScale}}>
            {children}
        </ScreenScaleContext.Provider>
    )
}