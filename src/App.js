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
    <div className="bg-slate-600 h-screen w-screen pt-8">
      <div className="w-[351px] h-[624px] mx-auto rounded-lg">
        <Unity unityProvider={unityProvider} className="w-full h-full rounded-t-lg" />
      </div>
      
      {/* Advertentieblock onder */}
      <div className="flex w-[351px] h-12 rounded-b-lg mx-auto bg-black b-0">
        <h1 className="text-white mx-auto my-auto">advertentiehier</h1>
      </div>
    </div>
  );
}

export default App;
