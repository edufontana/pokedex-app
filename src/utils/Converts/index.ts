export const ConvertKg = (value: number) => {
  return value * 0.453592;
};

export const ConvertMeters = (value: number) => {
  return value / 3.281;
};

export const toUpperCase = (value: string) => {
  return value[0].toUpperCase() + value.substr(1);
};
