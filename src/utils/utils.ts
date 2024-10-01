export const getFiveYearsAgo = () => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear() - 5;

  return dd + '.' + mm + '.' + yyyy;
};

export const amountToNumber = (amount: string) => {
  return amount.split('.').join('').split(',').join('.');
};

export const numberToAmount = (number: number) => {
  const _number = String(number).split('.');
  const left = _number[0] || '0';
  let right = _number[1] || '00';

  right = right.substring(0, 2);

  if (right.length === 1) {
    right += '0';
  }

  let newLeft = '';

  let cursor = 0;
  for (let i = left.length - 1; i >= 0; i--) {
    newLeft = left[i] + newLeft;
    if (++cursor % 3 === 0 && i > 0) {
      newLeft = '.' + newLeft;
    }
  }

  return newLeft + ',' + right;
};

export const ratioToRate = (value: number, divider: number = 1) => {
  const ratio = value / divider;
  return numberToAmount(+Math.round(ratio * 10000 - 10000) / 100);
};
