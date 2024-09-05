export function isChecked(
  groupValue: string[] | number[] | undefined,
  value: string | number | undefined
): boolean {
  if (groupValue && value) {
    return groupValue.includes(value as never)
  }

  return false;
}
