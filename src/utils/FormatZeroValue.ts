export default function FormatZeroValue(
  value: any,
  replacement: any = ""
): any {
  if (value === 0) return replacement;

  return value;
}
