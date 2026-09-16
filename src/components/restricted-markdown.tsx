import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";

/**
 * Renderiza Markdown restringido al subconjunto acordado en
 * /specs/000-data-model/spec.md §3: negrita, cursiva y saltos de línea.
 * No se permite HTML embebido ni Markdown extendido (tablas, imágenes,
 * enlaces, etc.) — cualquier otro elemento se renderiza como texto plano
 * envolvente en lugar de interpretarse.
 */

// Solo se permiten estos componentes; todo lo demás cae al renderer por
// defecto de texto plano de react-markdown (no se habilita ningún plugin
// remark/rehype adicional, en particular no se habilita HTML).
const ALLOWED_COMPONENTS: Components = {
  strong: ({ children }) => <strong>{children}</strong>,
  em: ({ children }) => <em>{children}</em>,
  p: ({ children }) => <p>{children}</p>,
  br: () => <br />,
  // Cualquier otro tag de Markdown (enlaces, imágenes, tablas, encabezados,
  // listas, código...) se degrada a un <span> sin estilo ni comportamiento
  // especial, para no ampliar el subconjunto soportado por accidente.
  a: ({ children }) => <span>{children}</span>,
  img: () => null,
  h1: ({ children }) => <span>{children}</span>,
  h2: ({ children }) => <span>{children}</span>,
  h3: ({ children }) => <span>{children}</span>,
  ul: ({ children }) => <span>{children}</span>,
  ol: ({ children }) => <span>{children}</span>,
  li: ({ children }) => <span>{children}</span>,
  code: ({ children }) => <span>{children}</span>,
  blockquote: ({ children }) => <span>{children}</span>,
  table: ({ children }) => <span>{children}</span>,
};

export function RestrictedMarkdown({ text }: { text: string }) {
  return <ReactMarkdown components={ALLOWED_COMPONENTS}>{text}</ReactMarkdown>;
}
