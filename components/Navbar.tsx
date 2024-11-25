"use client";

import React, {
  useState,
  useMemo,
  useCallback,
  useRef,
  useEffect,
} from "react";
import Link from "next/link";
import Image from "next/image";
import { Monitor, PenTool, Code2, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MENU_ITEMS = [
  { href: "/about", label: "About Us" },
  { href: "/industries", label: "Industries" },
  { href: "/careers", label: "Careers" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact Us" },
];

const SERVICES = [
  {
    href: "/services/development",
    label: "Development",
    icon: <Code2 className="h-6 w-6" />,
    desc: "KKj Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    href: "/services/marketing",
    label: "Marketing",
    icon: <Monitor className="h-6 w-6" />,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    href: "/services/consultant",
    label: "Consultation",
    icon: <PenTool className="h-6 w-6" />,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
];

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  icon: React.ReactNode;
  title: string;
}

const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
  ({ className, title, children, icon, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="flex items-center gap-2">
              {icon}
              <div className="text-sm font-medium leading-none">{title}</div>
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  toggleMenu: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onClose,
  toggleMenu,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        aria-haspopup="true"
        aria-controls="menu"
        aria-expanded={isOpen}
        className="p-2"
      >
        <Menu />
      </button>
      <div
        ref={menuRef}
        className={cn(
          "fixed top-0 right-0 min-w-[200px] transition-all duration-200 flex flex-col gap-4 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 h-screen p-4 backdrop-blur-lg",
          isOpen
            ? "translate-x-0 z-50 opacity-100"
            : "translate-x-[200px] opacity-0"
        )}
        id="menu"
        role="menu"
      >
        <button className="absolute right-4" onClick={toggleMenu}>
          <X />
        </button>
        <ul className="mt-12 space-y-2">
          {MENU_ITEMS.map((item) => (
            <li
              key={item.href}
              role="none"
              className="hover:bg-white hover:text-black rounded-md px-3 py-1"
            >
              <Link
                href={item.href}
                role="menuitem"
                className="block"
                onClick={onClose}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li role="none" className="px-3 py-1">
            <Accordion type="single" collapsible>
              <AccordionItem value="services">
                <AccordionTrigger className="p-0 font-normal text-base">
                  Services
                </AccordionTrigger>
                <AccordionContent className="grid min-w-max gap-2 pl-1 py-2">
                  {SERVICES.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block hover:bg-white hover:text-black rounded-md px-3 py-1"
                      onClick={onClose}
                    >
                      {service.label}
                    </Link>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const memoizedServices = useMemo(() => SERVICES, []);

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <header className="text-white absolute h-16 w-full top-0 left-0 shadow-sm py-4 flex items-center">
      <nav className="container relative z-50">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="w-24">
              <Image
                src="/aavatech_logo.png"
                width={140}
                height={92}
                alt="Aavatech logo"
                className=""
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                {MENU_ITEMS.map((item) => {
                  return (
                    item.href !== "/contact" && (
                      <NavigationMenuItem key={item.href}>
                        <Link href={item.href} legacyBehavior passHref>
                          <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                          >
                            {item.label}
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>
                    )
                  );
                })}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      {memoizedServices.map((service, index) => {
                        return index === 0 ? (
                          <li
                            className="row-span-3"
                            key={service.label + index}
                          >
                            <NavigationMenuLink asChild>
                              <a
                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                href="/services/development"
                              >
                                <Code2 className="h-6 w-6" />
                                <div className="mb-2 mt-4 text-lg font-medium">
                                  Development
                                </div>
                                <p className="text-sm leading-tight text-muted-foreground">
                                  {service.desc}
                                </p>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ) : (
                          <ListItem
                            key={service.href}
                            href={service.href}
                            title={service.label}
                            icon={service.icon}
                          >
                            {service.desc}
                          </ListItem>
                        );
                      })}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <Button asChild>
            <Link href="/contact" className="hidden md:block">
              Contact Us
            </Link>
          </Button>
          <MobileNav
            isOpen={isOpen}
            onClose={closeMenu}
            toggleMenu={toggleMenu}
          />
        </div>
      </nav>
    </header>
  );
}
