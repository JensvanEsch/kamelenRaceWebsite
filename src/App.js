import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Unity, useUnityContext } from "react-unity-webgl";
import "./style.css";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "Build/build.loader.js",
    dataUrl: "Build/build.data.unityweb",
    frameworkUrl: "Build/build.framework.js.unityweb",
    codeUrl: "Build/build.wasm.unityweb",
  });

  useEffect(() => {
    document.title = "KamelenRace";
  }, []);

  return (
    <div>
      <Helmet>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7401228549557769"
          crossorigin="anonymous"
        ></script>
      </Helmet>
    <div className="bg-slate-600 h-screen w-screen sm:h-screen sm:w-screen sm:pt-8">
      <div className="pb-12 w-screen h-screen sm:w-[351px] sm:h-[624px] sm:mx-auto rounded-lg">
        <Unity
          unityProvider={unityProvider}
          className="w-full h-full rounded-t-lg"
        />
      </div>

      {/* Advertentieblock onder */}
      <div className="flex -mt-12 h-12 min-w-[351px] sm:w-[351px] mx-auto bg-black b-0">
        <h1 className="text-white mx-auto my-auto">advertentiehier</h1>
      </div>
    </div>
    </div>
  );
}

export default App;
