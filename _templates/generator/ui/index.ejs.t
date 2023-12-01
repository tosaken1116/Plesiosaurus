---
to: "<%= `src/components/${name}/index.ts` %>"
---
import { <%= name %> } from "./index.tsx";

import type { <%= name %>Props } from "./index.tsx";

export { <%= name %> };

export type { <%= name %>Props };