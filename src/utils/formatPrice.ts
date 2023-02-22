const nf = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
});

export function formattedPriceToNumber (value: string) {
  const onlyNumbers = value.replace(/[^\d]/g, '');
  return (parseFloat(onlyNumbers)/100);
}

export function formatPrice(value: any) {
  if (typeof value !== 'string' || value === '') {
    return value;
  }
  return nf.format(formattedPriceToNumber(value));
}