import { Pool, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
import * as schema from "./schema";

/**
 * Punto único de conexión a Postgres (Neon). Acceso a la base de datos
 * exclusivamente desde el servidor (restricción del proyecto): este módulo
 * solo debe importarse desde código de servidor (Server Components, Server
 * Actions, route handlers, scripts) y nunca desde un Client Component.
 *
 * Se usa el driver `neon-serverless` (Pool sobre WebSocket) en lugar de
 * `neon-http`: el DAL usa `db.transaction()` (creación/edición atómica de
 * Question + AnswerOption), que `neon-http` no soporta.
 */

neonConfig.webSocketConstructor = ws;

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL no está definida. Configura la variable de entorno " +
      "(ver .env.local.example) antes de arrancar la aplicación."
  );
}

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export const db = drizzle(pool, { schema });
