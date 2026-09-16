import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Server Components por defecto; sin configuración adicional necesaria
  // hasta que una spec concreta la requiera (principio de arquitectura nº2:
  // preferir capacidades nativas de Next.js).

  // `ws` (usado por el driver `neon-serverless` para soportar transacciones,
  // ver src/db/client.ts) rompe la detección de sus dependencias nativas
  // opcionales si webpack lo empaqueta para el servidor; se marca como
  // externo para que se resuelva con `require` nativo de Node.
  serverExternalPackages: ["@neondatabase/serverless", "ws"],
};

export default nextConfig;
