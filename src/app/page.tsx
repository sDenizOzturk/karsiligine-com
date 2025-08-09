"use client";
import CalculateInflation from "@/components/calculation/CalculateInflation";
import { BaseWrapper } from "binak-react-components";
import ViewWrapper from "@/components/layout/ViewWrapper";
import { Description } from "@/components/description/Description";
import { ListSampleCalculations } from "@/components/sampleCalculation/ListSampleCalculations";

export default function Page() {
  return (
    <ViewWrapper>
      <BaseWrapper
        style={{ minHeight: "60vh", padding: "1rem" }}
        mode={["vertical"]}
      >
        <ListSampleCalculations>
          <Description />
          <CalculateInflation />
        </ListSampleCalculations>
      </BaseWrapper>
    </ViewWrapper>
  );
}
