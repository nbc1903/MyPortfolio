export function mergeDeep(
  target: Record<string, unknown>,
  source: Record<string, unknown>,
) {
  if (!source) return target;
  const output = Object.assign({}, target);
  Object.keys(source).forEach((key) => {
    if (!(key in target)) Object.assign(output, { [key]: source[key] });
    else
      output[key] = mergeDeep(
        target[key] as Record<string, unknown>,
        source[key] as Record<string, unknown>,
      );
  });

  return output;
}
