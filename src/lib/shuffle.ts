export function shuffleArray<T>(items: T[]): T[] {
  const array = [...items];

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(
      Math.random() * (i + 1)
    );

    [array[i], array[j]] = [
      array[j],
      array[i],
    ];
  }

  return array;
}

export function createNextBatch<T>(
  original: T[],
  previousLast?: T
) {
  const next = shuffleArray(original);

  if (
    previousLast &&
    next.length > 1 &&
    next[0] === previousLast
  ) {
    [next[0], next[1]] = [
      next[1],
      next[0],
    ];
  }

  return next;
}