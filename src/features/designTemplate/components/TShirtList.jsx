import { useContext } from "react";

import tShirtBlack from "../../../assets/images/tShirts/tShirtBlack.png";
import tShirtRed from "../../../assets/images/tShirts/tShirtRed.png";
import tShirtWhiteRed from "../../../assets/images/tShirts/tShirtWhiteRed.png";

import { DesignTemplateContext } from "../context/DesignTemplateContext";

function TShirtList() {
  const { setCurrentTShirt } = useContext(DesignTemplateContext);

  const thumbnails = [tShirtBlack, tShirtRed, tShirtWhiteRed];
  return (
    <div className="absolute top-4 left-4 w-[150px] flex flex-col items-center gap-4 p-2 border border-gray-300 rounded-md bg-white shadow-lg">
      {thumbnails.map((thumbnail, index) => (
        <img
          key={index}
          src={thumbnail}
          alt={`Thumbnail ${index + 1}`}
          className="w-[100px] h-[100px] object-cover cursor-pointer border border-gray-300 rounded-md hover:border-blue-500"
          onClick={() => setCurrentTShirt(thumbnail)}
        />
      ))}
    </div>
  );
}

export default TShirtList;
