import React from "react";
import { House, Power, UserPen } from "lucide-react";

type NavbarItem = {
  id: number;
  icon: React.ReactNode; // Pastikan TypeScript mengenali ikon sebagai elemen React
  label: string;
};

export const navbarMenu: NavbarItem[] = [
  {
    id: 3,
    icon: <House className="w-5" />,
    label: "Home",
  },
  {
    id: 3,
    icon: <UserPen className="w-5" />,
    label: "Profile",
  },
  {
    id: 3,
    icon: <Power className="w-5" />,
    label: "Logout",
  },
];
