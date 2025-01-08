import { useContext } from "react";

import { DesignTemplateContext } from "../context/DesignTemplateContext";

function TShirtTemplate() {
  const {
    currentTShirt,
    selectedLogo,
    logoPosition,
    logoSize,
    handleLogoMouseMove,
    handleLogoMouseUp,
    handleLogoMouseDown,
    handleResizeMouseDown,
  } = useContext(DesignTemplateContext);

  return (
    <div
      className="design-area relative w-[90%] max-w-[600px] h-[70%] max-h-[80vh] border border-gray-300 bg-center rounded-md bg-no-repeat"
      style={{
        backgroundImage: `url(${currentTShirt})`,
        backgroundSize: "contain",
      }}
      onMouseMove={handleLogoMouseMove}
      onMouseUp={handleLogoMouseUp}
    >
      {selectedLogo && (
        <div
          className="absolute group"
          style={{
            top: `${logoPosition.y}px`,
            left: `${logoPosition.x}px`,
            width: `${logoSize.width}px`,
            height: `${logoSize.height}px`,
          }}
          onMouseDown={handleLogoMouseDown}
        >
          <img
            src={selectedLogo}
            alt="Selected Logo"
            className="w-full h-full object-contain cursor-move"
          />
          <div
            className="absolute bottom-0 right-0 w-6 h-6 cursor-nwse-resize opacity-0 group-hover:opacity-100"
            onMouseDown={handleResizeMouseDown}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <path
                fill="#3178a6"
                d="M2 2.332v26.5h26.5V2.33H2zm24.5 24.5H4V12.5h8.167V4.332H26.5zM15.63 17.65l5.47 5.468l-1.21 1.206l5.483 1.47l-1.47-5.482l-1.195 1.195l-5.467-5.466l1.21-1.207l-5.482-1.47l1.468 5.48l1.195-1.194z"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

export default TShirtTemplate;
