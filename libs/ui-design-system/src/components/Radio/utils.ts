export function isChecked(
  groupValue: string | number | undefined,
  value: string | number | undefined
): boolean {
  if (groupValue && value) {
    return groupValue === value;
  }

  return false;
}
