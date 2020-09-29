import { renderHook } from "@testing-library/react-hooks";
import { useUnsplash } from "../src/useUnsplash";

const fetch = require("node-fetch");

if (!globalThis.fetch) {
  globalThis.fetch = fetch;
}

test("testing", () => {
  const [image, imageMeta] = renderHook(({initialValue}) =>
    useUnsplash({
      apikey: "Msjkp4qxQOMEA7a0ps_lkhQa0Hkv3CsbjFn_X8fWRDE",
      id: "VMPhyAoVqqk",
      options: { w: 600, ar: "9:1", fit: "crop" },
    })
  );
  console.log(image);

  expect(image).toBeTruthy();
});
