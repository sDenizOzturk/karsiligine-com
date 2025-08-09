"use client";
import { FC } from "react";
import { BaseWrapper } from "binak-react-components";
import ViewWrapper from "@/components/layout/ViewWrapper";
import ListLatestCalculalations from "@/components/latestCalculalation/ListLatestCalculalations";

const LogInView: FC = () => {
  return (
    <ViewWrapper>
      <BaseWrapper
        style={{ minHeight: "60vh", padding: "1rem" }}
        mode={["vertical"]}
      >
        <ListLatestCalculalations />
      </BaseWrapper>
    </ViewWrapper>
  );
};
export default LogInView;
