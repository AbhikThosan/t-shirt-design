import { createContext, useState } from "react";

import tShirtWhiteRed from "../../../assets/images/tShirts/tShirtWhiteRed.png";

const DesignTemplateContext = createContext();

function DesignTemplateProvider({ children }) {
  const [currentTShirt, setCurrentTShirt] = useState(tShirtWhiteRed);
  const [selectedLogo, setSelectedLogo] = useState(null);
  const [logoPosition, setLogoPosition] = useState({ x: 250, y: 250 });
  const [logoSize, setLogoSize] = useState({ width: 100, height: 100 });
  const [originalAspectRatio, setOriginalAspectRatio] = useState(1);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);

  const handleLogoSelect = (logo) => {
    const img = new Image();
    img.src = logo;
    img.onload = () => {
      const aspectRatio = img.width / img.height;
      setSelectedLogo(logo);
      setLogoSize({ width: 100, height: 100 / aspectRatio });
      setOriginalAspectRatio(aspectRatio);
    };
  };

  const handleLogoMouseDown = (e) => {
    if (isResizing) return;
    e.preventDefault();
    setIsDragging(true);

    const rect = e.target.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleLogoMouseMove = (e) => {
    if (isDragging) {
      const designArea = document
        .querySelector(".design-area")
        .getBoundingClientRect();

      const x = Math.min(
        Math.max(e.clientX - designArea.left - dragOffset.x, 0),
        designArea.width - logoSize.width
      );
      const y = Math.min(
        Math.max(e.clientY - designArea.top - dragOffset.y, 0),
        designArea.height - logoSize.height
      );

      setLogoPosition({ x, y });
    }

    if (isResizing) {
      const designArea = document
        .querySelector(".design-area")
        .getBoundingClientRect();

      const newWidth = Math.min(
        Math.max(e.clientX - designArea.left - logoPosition.x, 50),
        designArea.width - logoPosition.x
      );
      const newHeight = newWidth / originalAspectRatio;

      setLogoSize({ width: newWidth, height: newHeight });
    }
  };

  const handleLogoMouseUp = () => {
    setIsDragging(false);
    setIsResizing(false);
  };

  const handleResizeMouseDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsResizing(true);
  };

  const handleSubmit = () => {
    if (!selectedLogo) {
      alert("Please select a logo before submitting!");
      return;
    }

    const result = {
      tShirtName: currentTShirt.split("/").pop(),
      logoName: selectedLogo.split("/").pop(),
      logoSize: {
        width: `${logoSize.width}px`,
        height: `${logoSize.height}px`,
      },
      position: { x: logoPosition.x, y: logoPosition.y },
    };

    console.log("Design Details:", result);
    alert(`Design Submitted: ${JSON.stringify(result, null, 2)}`);
  };

  return (
    <DesignTemplateContext.Provider
      value={{
        currentTShirt,
        setCurrentTShirt,
        selectedLogo,
        setSelectedLogo,
        logoPosition,
        setLogoPosition,
        logoSize,
        setLogoSize,
        originalAspectRatio,
        setOriginalAspectRatio,
        dragOffset,
        setDragOffset,
        isDragging,
        setIsDragging,
        isResizing,
        setIsResizing,
        handleLogoSelect,
        handleLogoMouseDown,
        handleLogoMouseMove,
        handleLogoMouseUp,
        handleResizeMouseDown,
        handleSubmit,
      }}
    >
      {children}
    </DesignTemplateContext.Provider>
  );
}

export { DesignTemplateProvider, DesignTemplateContext };
