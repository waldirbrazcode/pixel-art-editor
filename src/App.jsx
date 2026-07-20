import PaintingScreen from './PaintingScreen/PaintingScreen'
import CollorPallete from './ColorPallete/CollorPallete'
import Layers from './Layers/Layers'

function App() {

  return (
    <>
      <div className="flex justify-evenly">
        <CollorPallete />
        <PaintingScreen />
        <Layers />
      </div>
    </>
  )
}

export default App
