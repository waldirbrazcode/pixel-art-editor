import PaintingScreen from './PaintingScreen/PaintingScreen'
import CollorPallete from './ColorPallete/CollorPallete'
import Layers from './Layers/Layers'
import { SelectedColorProvider } from './ColorPallete/SelectedColor'
import { ScreenScaleProvider } from './Layers/ScreenScale'

function App() {

  return (
    <>
      <div className="flex justify-around">
        <SelectedColorProvider>
          <CollorPallete />
          <ScreenScaleProvider>
            <PaintingScreen />
            <Layers />
          </ScreenScaleProvider>
        </SelectedColorProvider>
      </div>
    </>
  )
}

export default App
