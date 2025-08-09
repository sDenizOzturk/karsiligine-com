import "server-only";

import { getUsdInflation, calculateTlInflation } from "./utils/inflation";
import { fetchCurrency, getCurrency } from "./utils/currency";
import { stringToDate } from "./utils/utils";
import { InflationResult } from "@/models/InflationResult";
import { pushCalculation } from "./utils/latest";
import { CalculationForm } from "@/models/CalculationForm";
import { amountToNumber } from "@/utils/utils";

export const getInflation = async (calculationForm: CalculationForm) => {
  try {
    const date = calculationForm.date;
    const amount = +amountToNumber(calculationForm.amount);

    const startDate = stringToDate(date);
    const endDate = new Date();

    if (startDate > endDate) {
      throw new Error("Date cannot be greater than today");
    }

    if (startDate < new Date(1997, 0, 1)) {
      throw new Error("Date cannot be earlier than 1/1/1997");
    }

    const startYear = startDate.getFullYear();

    const endYear = endDate.getFullYear();

    const startDateCurrency =
      startDate < new Date(1997, 1, 1)
        ? getCurrency(startYear)
        : await fetchCurrency("USD", date);

    if (!startDateCurrency) {
      throw new Error("Could not fetch start date currency");
    }

    const endDateCurrency = await fetchCurrency(
      "USD",
      endDate.toLocaleDateString()
    );

    if (!endDateCurrency) {
      throw new Error("Could not fetch end date currency");
    }

    const usdInflation = getUsdInflation(startYear, endYear)!;

    const { tlInflation, result } = calculateTlInflation(
      usdInflation,
      startDateCurrency!,
      endDateCurrency!,
      amount
    );

    const usdRateIncrease =
      +startDateCurrency.date < 2005 ||
      +startDateCurrency.date.split(".")[2] < 2005 ||
      +startDateCurrency.date.split("/")[2] < 2005
        ? (endDateCurrency.currency / startDateCurrency.currency) * 1000000
        : endDateCurrency.currency / startDateCurrency.currency;

    const calculation: InflationResult = {
      amount,
      result,
      usdRateIncrease,
      usdInflation,
      tlInflation,
      startDateCurrency,
      endDateCurrency,
    };

    pushCalculation({ date, amount: String(amount) });

    return calculation;
  } catch (err) {
    // TODO Add custom error handler
    console.log(err);
  }
};
