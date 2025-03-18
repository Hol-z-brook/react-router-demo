import type { Config } from "@react-router/dev/config";
import dotenv from "dotenv";

dotenv.config();

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,
} satisfies Config;
