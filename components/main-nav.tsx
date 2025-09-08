"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MainNav = () => {
  const pathname = usePathname();
  const routs = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/aboutme",
      label: "About Me",
      active: pathname === "/aboutme",
    },
    {
      href: "/projectss",
      label: "Projects",
      active: pathname === "/projectss",
    },
    {
      href: "/contact",
      label: "Contact",
      active: pathname === "/contact",
    },
  ];

  return (
    <div className="sticky top-0 z-50">
      <ul className="flex items-center justify-center gap-5 font-semibold text-white sticky top-0 z-50 ">
        {routs.map((route) => (
          <Link
            href={route.href}
            key={route.href}
            className={cn(
              "relative font-medium after:absolute after:left-1/2 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-green-500 after:transition-all after:duration-500 after:-translate-x-1/2",
              route.active && "after:w-full"
            )}
          >
            {route.label}
          </Link>
        ))}
      </ul>
    </div>
  );
};
