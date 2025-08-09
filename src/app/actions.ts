"use server";
import { CalculationForm } from "@/models/CalculationForm";
import { getInflation } from "@/server/inflation";
import { getLatest } from "@/server/latest";

export const calculateInflation = async (calculationForm: CalculationForm) => {
  return await getInflation(calculationForm);
};

export const latestCalculations = async () => {
  return getLatest();
};
