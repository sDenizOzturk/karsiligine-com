"use client";
import { FC } from "react";
import ViewWrapper from "@/components/layout/ViewWrapper";
import { BaseCard, BaseWrapper } from "binak-react-components";

const Contribute: FC = () => {
  const STACK = [
    "Next.js",
    "TypeScript",
    "Framer Motion",
    "React Youtube",
    "React Hook Form",
    "Zustand",
    "Bınak React Components",
    "React Image Displayer",
    "Fast XML Parser",
  ];

  return (
    <ViewWrapper>
      <BaseWrapper
        style={{ minHeight: "60vh", padding: "1rem" }}
        mode={["vertical-center"]}
      >
        <BaseCard style={{ width: "20rem", maxWidth: "80%" }}>
          <p style={{ margin: "0 0 0.2rem 0", textAlign: "center" }}>
            <strong>Karşılığı ne</strong> bir açık kaynak projedir. Issue ve
            Pull Request oluşturarak katkı yapabilirsiniz.
          </p>

          <BaseWrapper
            style={{
              width: "100%",
            }}
          >
            <BaseWrapper>
              <BaseWrapper style={{ textAlign: "center" }}>
                <p style={{ fontStyle: "italic", marginBottom: "0" }}>
                  <b> Kullanılan Teknolojiler:</b>
                </p>
                {STACK.map((tech, index) => (
                  <p style={{ fontStyle: "italic", margin: "0" }} key={index}>
                    {tech}
                  </p>
                ))}
                <a
                  href="https://github.com/sDenizOzturk/karsiligine-com-tr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github Reposu
                </a>
              </BaseWrapper>
            </BaseWrapper>
          </BaseWrapper>
        </BaseCard>
      </BaseWrapper>
    </ViewWrapper>
  );
};

export default Contribute;
