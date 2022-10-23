// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/get/[id].ts";
import * as $1 from "./routes/index.tsx";
import * as $$0 from "./islands/Cert.tsx";

const manifest = {
  routes: {
    "./routes/get/[id].ts": $0,
    "./routes/index.tsx": $1,
  },
  islands: {
    "./islands/Cert.tsx": $$0,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
