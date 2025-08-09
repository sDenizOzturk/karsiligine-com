"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { BaseFooter, footerActiveStyle } from "binak-react-components";
import { DisplayingRoute } from "@/models/DisplayingRoute";

const Footer: FC = () => {
  const pathname = usePathname();
  const displayingRoutes: DisplayingRoute[] = [
    { to: "/contribute", text: "Katkı Yap" },
  ];

  return (
    <BaseFooter
      rightContent={displayingRoutes.map((route) => (
        <Link
          key={route.text}
          href={route.to}
          style={pathname === route.to ? footerActiveStyle : {}}
        >
          {route.text}
        </Link>
      ))}
      leftContent={<img src="/logo.png" alt="logo" />}
    />
  );
};
export default Footer;
