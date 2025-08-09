"use client";
import { FC } from "react";
import { BaseErrorModal } from "binak-react-components";
import { useError } from "@/store/error";

const Error: FC = () => {
  const error = useError((state) => state.error);
  const errors = useError((state) => state.errors);
  const clearErrors = useError((state) => state.clearErrors);

  if (error) {
    return (
      <BaseErrorModal
        error={error}
        errors={errors}
        onClose={() => clearErrors()}
        title={"Bir hata meydana geldi!"}
      />
    );
  }

  return null;
};
export default Error;
