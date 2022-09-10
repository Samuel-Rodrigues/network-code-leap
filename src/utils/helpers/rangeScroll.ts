export function rangeScroll(currentScroll: number, width: number) {
  const current = Math.round(currentScroll);
  const widthFixed = Math.round(width);

  const minAround = widthFixed - 20;
  const maxAround = widthFixed + 20;

  return (
    current >= minAround &&
    current <= maxAround &&
    widthFixed >= minAround &&
    widthFixed <= maxAround
  );
}
