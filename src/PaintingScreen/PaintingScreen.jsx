import React from "react";
import { useState, useContext } from "react";
import { SelectedColorContext } from "../ColorPallete/SelectedColor";
const PaintingScreen = () => {
  const [WidthPx, setWidthPx] = useState(8);
  const [HeightPx, setHeightPx] = useState(8);

  const [PxMatrix, setPxMatrix] = useState(
    Array.from({length: HeightPx}, (_, column) => ([Array.from({length: WidthPx}, (_, line) => ({linePos: line, columnPos: column, color: "white"}))]))
  )

  /*const [TotalPixel, setTotalPixel] = useState(Array.from({length: HeightPx * WidthPx}, (_, index) => ({id: index, color: "white"})))
  const [WidthPxArr, setWidthPxArr] = useState(Array.from({length: WidthPx}, (_, index) => ({id: index, color: "white"})))
  const [HeightPxArr, setHeightPxArr] = useState(Array.from({length: HeightPx}, (_, index) => ({id: index, color: "white"})))
*/
  const { selectedColor, setSelectedColor } = useContext(SelectedColorContext);

  let PxScreenSizeConst = 8;

  function setColor(pixelClicked) {
    //console.log(PxMatrix[pixelClicked.columnPos][0][pixelClicked.linePos], pixelClicked)
    setPxMatrix(prevPxMatrix => prevPxMatrix.map((col) => (
      col.map((row) => (
        row.map((pixel) => (
          pixel.columnPos === pixelClicked.columnPos && pixel.linePos === pixelClicked.linePos ? {...pixel, color: selectedColor} : pixel
        ))
      ))
    )))
  }

  return (
    <>
      <div
        style={{
          width: `${WidthPx * PxScreenSizeConst}px`,
          height: `${HeightPx * PxScreenSizeConst}px`,
        }}
        className="bg-black border-black mt-[15%]"
      >
        <div>
          {PxMatrix.map((columns) => (
            <div className="flex">
              {columns.map((lines) => (
                lines.map((pixel) => (
                  <div key={pixel.linePos} onClick={() => setColor(pixel)} style={{backgroundColor: pixel.color}} className="w-2 h-2 hover:opacity-50"></div>
                ))
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PaintingScreen;
