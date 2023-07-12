export function getProduct(list, start = 0, limit = 6) {
  if (list && Array.isArray(list)) {
    return [...list].splice(start, limit);
  }
  return [];
}
