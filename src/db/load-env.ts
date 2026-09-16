import { config } from "dotenv";

/**
 * Next.js carga .env.local automáticamente; los scripts ejecutados con
 * `tsx` (seed, drizzle-kit) no, así que lo hacen explícito importando este
 * módulo antes de cualquier otro que lea `process.env.DATABASE_URL`.
 */
config({ path: ".env.local" });
