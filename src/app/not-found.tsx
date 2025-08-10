"use client";
import { BaseErrorModal } from "binak-react-components";
import { useRouter } from "next/navigation";

export default function NotFoundView() {
  const router = useRouter();
  return (
    <BaseErrorModal
      title="Bir hata meydana geldi!"
      error=" "
      onClose={() => router.back()}
      okayButton="Tamam"
    />
  );
}
