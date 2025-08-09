"use client";
import { FC, useCallback, useEffect, useState } from "react";
import { CalculationForm } from "@/models/CalculationForm";
import { BaseModal, BaseWrapper } from "binak-react-components";
import { amountToNumber, numberToAmount, ratioToRate } from "@/utils/utils";
import { InflationResult } from "@/models/InflationResult";

import { useLoader } from "@/store/loader";
import { useError } from "@/store/error";

import { calculateInflation } from "@/app/actions";

interface DisplayInflationProps {
  calculationInput: CalculationForm | undefined;
  onClose: () => void;
}

export const DisplayInflation: FC<DisplayInflationProps> = ({
  calculationInput,
  onClose,
}) => {
  const [result, setResult] = useState<InflationResult>();
  const setLoading = useLoader((state) => state.setLoading);

  const setError = useError((state) => state.setError);

  const fetchData = useCallback(async () => {
    setLoading(true);

    try {
      const responseData = await calculateInflation(calculationInput!);
      if (responseData) {
        setResult(responseData);
      } else {
        throw new Error("Üzgünüm, bir hata oldu ve enflasyon hesaplanamadı!");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message);
    }
    setLoading(false);
  }, [calculationInput, setLoading, setError]);

  useEffect(() => {
    if (!calculationInput) {
      setResult(undefined);
      return;
    }
    fetchData();
  }, [calculationInput, fetchData]);

  if (!result || !calculationInput) {
    return <></>;
  }

  const details = [
    `${result!.startDateCurrency.date} tarihindeki dolar kuru: ${numberToAmount(
      result!.startDateCurrency.currency
    )}TL`,
    `${
      result!.endDateCurrency.date
    } tarihindeki dolar kuru: ${result!.endDateCurrency.currency
      .toFixed(2)
      .replace(".", ",")}TL`,
    `Dolar kurundaki artış: %${ratioToRate(result!.usdRateIncrease)}`,
    `Resmi dolar enflasyonu: %${ratioToRate(result!.usdInflation)}`,
    `Dolara göre TL enflasyonu: %${ratioToRate(result!.tlInflation)}`,
  ];

  return (
    <>
      <BaseModal
        open={!!calculationInput}
        onClose={() => {
          setResult(undefined);
          onClose();
        }}
        center
      >
        {
          <BaseWrapper style={{ padding: "1rem" }}>
            {details.map((detail, index) => (
              <p style={{ margin: "0" }} key={index}>
                <i>{detail}</i>
              </p>
            ))}
            <h4>{`${calculationInput!.date} tarihindeki ${numberToAmount(
              +amountToNumber(calculationInput!.amount)
            )}TL'nin bugünkü karşılığı:`}</h4>
            <h2 style={{ textAlign: "center" }}>{`${numberToAmount(
              result!.result
            )}TL`}</h2>
          </BaseWrapper>
        }
      </BaseModal>
    </>
  );
};
