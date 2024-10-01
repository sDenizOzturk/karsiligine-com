import { CalculationForm } from '../models/CalculationForm';
import { amountToNumber } from './utils';

//const root = 'http://localhost';
const root = 'https://server.karsiligine.com';

const calculateInflation = (calculationInput: CalculationForm) =>
  root +
  '/inflation?' +
  new URLSearchParams({
    amount: String(amountToNumber(calculationInput!.amount)),
    date: calculationInput!.date,
  });

export default {
  latest: root + '/latest',
  calculateInflation,
};
