/**
 * @example
 * <style>{css`
 *   .app {
 *     padding: 1vw;
 *     font-size: 5vw;
 *   }
 * `}</style>
 */
export default function css(
  templates: TemplateStringsArray,
  ...values: (string | number | boolean | null | undefined)[]
) {
  return templates.reduce((acc, t, i) => acc + t + (values[i] ?? ''), '')
}
