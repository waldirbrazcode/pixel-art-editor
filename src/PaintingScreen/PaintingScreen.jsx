import React from "react";
import { useState, useContext } from "react";
import { SelectedColorContext } from "../ColorPallete/SelectedColor";
import { ScreenScaleContext } from "../Layers/ScreenScale";
const PaintingScreen = () => {
  const [WidthPx, setWidthPx] = useState(8);
  const [HeightPx, setHeightPx] = useState(16);

  /*const [PxMatrix, setPxMatrix] = useState(
    Array.from({length: HeightPx}, (_, column) => ([Array.from({length: WidthPx}, (_, line) => ({linePos: line, columnPos: column, color: "white"}))]))
  )*/

  const [PxMatrix, setPxMatrix] = useState(
    Array.from({ length: HeightPx }, (_, column) =>
      Array.from({ length: WidthPx }, (_, line) => ({
        linePos: line,
        columnPos: column,
        color: "white",
      })),
    ),
  );

  /*const [TotalPixel, setTotalPixel] = useState(Array.from({length: HeightPx * WidthPx}, (_, index) => ({id: index, color: "white"})))
  const [WidthPxArr, setWidthPxArr] = useState(Array.from({length: WidthPx}, (_, index) => ({id: index, color: "white"})))
  const [HeightPxArr, setHeightPxArr] = useState(Array.from({length: HeightPx}, (_, index) => ({id: index, color: "white"})))
*/
  const { selectedColor, setSelectedColor } = useContext(SelectedColorContext);
  const { screenScale, setScreenScale } = useContext(ScreenScaleContext);
  const pixelSize = screenScale * 2

  function setColor(pixelClicked) {
    //console.log(PxMatrix[pixelClicked.columnPos][0][pixelClicked.linePos], pixelClicked)
    setPxMatrix((prevPxMatrix) =>
      prevPxMatrix.map((col) =>
        col.map((line) =>
          line.columnPos === pixelClicked.columnPos &&
          line.linePos === pixelClicked.linePos
            ? { ...line, color: selectedColor }
            : line,
        ),
      ),
    );
    console.log(PxMatrix);
  }

  return (
    <>
      <div style={{ gridTemplateColumns: `repeat(${WidthPx}, ${pixelSize}px)`, gridAutoRows: `${pixelSize}px` }} className="bg-black mt-[5%] grid">
        {PxMatrix.flat().map((pixel) => (
          <div onClick={() => setColor(pixel)} style={{width: `${pixelSize}px`, height: `${pixelSize}px`, backgroundColor: pixel.color}} className="hover:opacity-50"></div>
        ))}
      </div>
    </>
  );
};

export default PaintingScreen;
