export function formatCount(count: number) {
  return count >= 100000 ? `${Math.floor(count / 10000)}万` : count;
}

export function formatImageUrl(url: string, width: number, height: number = width) {
  return `${url}?param=${width}x${height}`;
}
