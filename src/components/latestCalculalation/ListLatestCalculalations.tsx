"use client";
import { BaseWrapper } from "binak-react-components";
import { FC, useCallback, useEffect, useState } from "react";
import { CalculationForm } from "@/models/CalculationForm";
import LatestCalculalationItem from "./LatestCalculalationItem";
import { useLoader } from "@/store/loader";
import { useError } from "@/store/error";
import { latestCalculations } from "@/app/actions";

const ListLatestCalculalations: FC = () => {
  const setLoading = useLoader((state) => state.setLoading);
  const [calculations, setCalculations] = useState<CalculationForm[]>();
  const setError = useError((state) => state.setError);

  const fetchData = useCallback(async () => {
    setLoading(true);

    try {
      const responseData = await latestCalculations();

      if (responseData) {
        setCalculations(responseData);
      } else {
        throw new Error(
          "Üzgünüm, bir hata oldu ve son hesaplamalar gösterilemiyor!"
        );
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message);
    }

    setLoading(false);
  }, [setLoading, setError]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <BaseWrapper
        style={{
          display: "flex",
          margin: "auto",
          justifyContent: "center",
          flexWrap: "wrap",
          width: "80rem",
          maxWidth: "90%",
        }}
      >
        {calculations?.map((calculation, index) => (
          <LatestCalculalationItem calculation={calculation} key={index} />
        ))}
      </BaseWrapper>
    </>
  );
};

export default ListLatestCalculalations;
