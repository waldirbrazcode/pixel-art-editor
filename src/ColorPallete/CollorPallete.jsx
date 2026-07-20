import React from 'react'
import { useState, useContext } from "react";
import { SelectedColorContext } from './SelectedColor';

const CollorPallete = () => {
  const {selectedColor, setSelectedColor} = useContext(SelectedColorContext)

  const colors = [
  // Vermelhos
  { hex: "#fef2f2", class: "bg-red-50" },
  { hex: "#fecaca", class: "bg-red-200" },
  { hex: "#ef4444", class: "bg-red-500" },
  { hex: "#b91c1c", class: "bg-red-700" },

  // Laranjas
  { hex: "#fff7ed", class: "bg-orange-50" },
  { hex: "#fdba74", class: "bg-orange-300" },
  { hex: "#f97316", class: "bg-orange-500" },
  { hex: "#c2410c", class: "bg-orange-700" },

  // Amarelos
  { hex: "#fefce8", class: "bg-yellow-50" },
  { hex: "#fde047", class: "bg-yellow-300" },
  { hex: "#eab308", class: "bg-yellow-500" },
  { hex: "#a16207", class: "bg-yellow-700" },

  // Verdes
  { hex: "#f0fdf4", class: "bg-green-50" },
  { hex: "#86efac", class: "bg-green-300" },
  { hex: "#22c55e", class: "bg-green-500" },
  { hex: "#15803d", class: "bg-green-700" },

  // Azuis
  { hex: "#eff6ff", class: "bg-blue-50" },
  { hex: "#93c5fd", class: "bg-blue-300" },
  { hex: "#3b82f6", class: "bg-blue-500" },
  { hex: "#1d4ed8", class: "bg-blue-700" },

  // Roxos
  { hex: "#faf5ff", class: "bg-purple-50" },
  { hex: "#d8b4fe", class: "bg-purple-300" },
  { hex: "#a855f7", class: "bg-purple-500" },
  { hex: "#7e22ce", class: "bg-purple-700" },

  // Rosas
  { hex: "#fdf2f8", class: "bg-pink-50" },
  { hex: "#f9a8d4", class: "bg-pink-300" },
  { hex: "#ec4899", class: "bg-pink-500" },
  { hex: "#be185d", class: "bg-pink-700" },
];
  return (<>
  <div>
    <p style={{color: `${selectedColor}`}}>Selected Color: {selectedColor}</p>
    <div className='flex flex-wrap w-56'>
      {colors.map((color) => (
        <div onClick={() => setSelectedColor(color.hex)} className={`w-8 h-8 ${color.class}`}></div>
      ))}
    </div>
  </div>
  </>
  )
}

export default CollorPallete