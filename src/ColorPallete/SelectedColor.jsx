import React from 'react'
import { useState, createContext } from "react";

export const SelectedColorContext = createContext()

export function SelectedColorProvider({children}) {
    const [selectedColor, setSelectedColor] = useState("black")

  return (
    <SelectedColorContext.Provider value={{selectedColor, setSelectedColor}}>
        {children}
    </SelectedColorContext.Provider>
  )
}