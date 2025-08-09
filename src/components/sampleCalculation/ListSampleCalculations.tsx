"use client";
import { FC, ReactNode, useState } from "react";
import { SampleCalculation } from "./SampleCalculation";

import { BaseButton, BaseWrapper } from "binak-react-components";

import sampleCalculations from "@/sampleCalculations.json";

interface ListSampleCalculations {
  children: ReactNode;
}

export const ListSampleCalculations: FC<ListSampleCalculations> = ({
  children,
}) => {
  const [sampleQuantity, setSampleQuantity] = useState(4);
  const handleLoadMore = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setSampleQuantity(Math.min(sampleQuantity + 4, sampleCalculations.length));

    const buttonPosition = e.pageY;
    const buttonHeight = e.currentTarget.offsetHeight || 50;

    setTimeout(() => {
      window.scrollTo({
        top: buttonPosition - buttonHeight,
        behavior: "smooth",
      });
    }, 0);
  };

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
        {children}
        {sampleCalculations.slice(0, sampleQuantity).map((sampleProp) => (
          <SampleCalculation {...sampleProp} key={sampleProp.label} />
        ))}
      </BaseWrapper>
      {sampleQuantity < sampleCalculations.length && (
        <BaseWrapper mode={["center"]}>
          <BaseButton mode="outline" onClick={handleLoadMore}>
            Daha Fazla
          </BaseButton>
        </BaseWrapper>
      )}
    </>
  );
};
