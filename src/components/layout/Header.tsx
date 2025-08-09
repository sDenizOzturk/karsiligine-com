"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { BaseHeader, headerActiveStyle } from "binak-react-components";
import { DisplayingRoute } from "@/models/DisplayingRoute";

const Header: FC = () => {
  const pathname = usePathname();
  const displayingRoutes: DisplayingRoute[] = [
    { to: "/", text: "Karşılığı Ne?" },
    { to: "/latest", text: "Son Hesaplamalar" },
  ];

  return (
    <BaseHeader
      leftContent={
        <>
          {displayingRoutes.map((route) => (
            <Link
              key={route.text}
              href={route.to}
              style={pathname === route.to ? headerActiveStyle : {}}
            >
              {route.text}
            </Link>
          ))}
        </>
      }
      rightContent={<img src="/logo.png" alt="logo" />}
    />
  );
};

export default Header;
