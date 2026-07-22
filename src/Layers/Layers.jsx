import React from 'react'
import { useContext, useState } from 'react'
import { ScreenScaleContext } from './ScreenScale'

const Layers = () => {
  const {screenScale, setScreenScale} = useContext(ScreenScaleContext)
  return (
    <div>
      <input onChange={(e) => setScreenScale(e.target.value)} step={1} value={screenScale} type="range" min={1} max={30} />
    </div>
  )
}

export default Layers