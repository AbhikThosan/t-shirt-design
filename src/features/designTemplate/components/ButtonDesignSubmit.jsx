import { useContext } from "react";
import { DesignTemplateContext } from "../context/DesignTemplateContext";
import html2canvas from "html2canvas";

function ButtonDesignSubmit() {
  const { handleSubmit, selectedLogo } = useContext(DesignTemplateContext);
  const handleGenerateAndDownloadImage = () => {
    const designArea = document.querySelector(".design-area");
    if (!designArea) return;

    designArea.style.border = "none";
    designArea.style.padding = "0";

    html2canvas(designArea, {
      backgroundColor: null,
      logging: false,
      scale: 4,
    }).then((canvas) => {
      const img = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.href = img;
      link.download = "custom-tshirt-design.png";
      link.click();

      designArea.style.border = "";
      designArea.style.padding = "";
    });
  };

  const handleButtonClick = () => {
    if (!selectedLogo) {
      alert("Please select a logo before submitting!");
      return;
    }

    handleSubmit();
    handleGenerateAndDownloadImage();
  };

  return (
    <button
      onClick={handleButtonClick}
      className="mt-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition"
    >
      Submit Design
    </button>
  );
}

export default ButtonDesignSubmit;
