import { useContext, useState } from "react";
import { DesignTemplateContext } from "../context/DesignTemplateContext";

import logo1 from "../../../assets/images/logos/logo-1.png";
import logo2 from "../../../assets/images/logos/logo-2.png";
import logo3 from "../../../assets/images/logos/logo-3.png";
import logo4 from "../../../assets/images/logos/logo-4.png";
import logo5 from "../../../assets/images/logos/logo-5.png";

function LogoList() {
  const { handleLogoSelect } = useContext(DesignTemplateContext);
  const [uploadedLogos, setUploadedLogos] = useState([]);

  const predefinedLogos = [logo1, logo2, logo3, logo4, logo5];

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedLogos((prev) => [...prev, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="absolute top-4 right-4 flex flex-col items-center gap-4 p-4 border border-gray-300 rounded-md bg-white shadow-lg">
      <h4 className="text-sm font-semibold border-b-2 pb-2">Logos</h4>
      <div className="flex gap-4">
        <div className="w-full">
          <h3 className="text-sm font-semibold mb-2">Default</h3>
          <div className="flex flex-col justify-center items-center gap-2">
            {predefinedLogos.map((logo, index) => (
              <img
                key={`predefined-${index}`}
                src={logo}
                alt={`Default Logo ${index + 1}`}
                className="w-[50px] h-[50px] object-contain cursor-pointer hover:opacity-75 ring-1 rounded-md"
                onClick={() => handleLogoSelect(logo)}
              />
            ))}
          </div>
        </div>

        {uploadedLogos.length > 0 && (
          <div className="w-full">
            <h3 className="text-sm font-semibold mb-2">User</h3>
            <div className="flex flex-col justify-center items-center gap-2">
              {uploadedLogos.map((logo, index) => (
                <img
                  key={`uploaded-${index}`}
                  src={logo}
                  alt={`Uploaded Logo ${index + 1}`}
                  className="w-[50px] h-[50px] object-contain cursor-pointer hover:opacity-75 ring-1 rounded-md"
                  onClick={() => handleLogoSelect(logo)}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <input
        type="file"
        accept="image/*"
        id="upload-logo"
        style={{ display: "none" }}
        onChange={handleFileUpload}
      />
      <label
        htmlFor="upload-logo"
        className="cursor-pointer px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md mt-4"
      >
        Upload Logo
      </label>
    </div>
  );
}

export default LogoList;
