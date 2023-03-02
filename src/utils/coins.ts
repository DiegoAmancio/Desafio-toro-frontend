export const formatValue = (value: number) =>
  value.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 2,
  });
