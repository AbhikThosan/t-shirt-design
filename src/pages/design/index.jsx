import { DesignTemplateProvider } from "../../features/designTemplate/context/DesignTemplateContext";

import LogoList from "../../features/designTemplate/components/LogoList";
import TShirtList from "../../features/designTemplate/components/TShirtList";
import TShirtTemplate from "../../features/designTemplate/components/TShirtTemplate";
import ButtonDesignSubmit from "../../features/designTemplate/components/ButtonDesignSubmit";

function Design() {
  return (
    <>
      <DesignTemplateProvider>
        <div className="relative h-screen flex flex-col items-center p-4">
          <LogoList />
          <TShirtList />
          <TShirtTemplate />
          <ButtonDesignSubmit />
        </div>
      </DesignTemplateProvider>
    </>
  );
}

export default Design;
