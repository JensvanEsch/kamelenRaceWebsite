import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import "./style.css";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "Build/build.loader.js",
    dataUrl: "Build/build.data.unityweb",
    frameworkUrl: "Build/build.framework.js.unityweb",
    codeUrl: "Build/build.wasm.unityweb",
  });

  return (
    <div>
      <div className="w-[351px] h-[624px] mx-auto mt-[40px]">
        <Unity unityProvider={unityProvider} className="w-full h-full" />
      </div>
      {/* Advertentieblock onder */}
      <div className="relative w-[351px] h-10 mx-auto bg-black b-0">
        <p className="text-white">advertentiehier</p>
      </div>
    </div>
  );
}

export default App;
