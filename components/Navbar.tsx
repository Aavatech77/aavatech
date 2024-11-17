"use client";

import * as React from "react";
import Link from "next/link";
import { Monitor, Smartphone, Code, PenTool } from "lucide-react";
import Image from "next/image";

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

const services: {
  title: string;
  href: string;
  description: string;
  icon: React.ReactNode;
}[] = [
  {
    title: "Web Development",
    href: "/services/web-development",
    description:
      "Expert custom web development solutions tailored to your business",
    icon: <Monitor className="h-6 w-6" />,
  },
  {
    title: "App Development",
    href: "/services/app-development",
    description:
      "Expert custom app development solutions tailored to your business",
    icon: <Smartphone className="h-6 w-6" />,
  },
  {
    title: "Software Development",
    href: "/services/software-development",
    description:
      "Expert custom software development solutions tailored to your business",
    icon: <Code className="h-6 w-6" />,
  },
  {
    title: "UI/UX Design",
    href: "/services/ui-ux-design",
    description:
      "Expert custom UI/UX design solutions tailored to your business",
    icon: <PenTool className="h-6 w-6" />,
  },
];

export default function NavBar() {
  return (
    <header
      className="bg-transparent shadow-sm text-white
"
    >
      <div className="container">
        <div className="flex min-h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="w-24">
              <Image
                src="/aavatech_logo.png"
                width={140}
                height={92}
                alt="Picture of the author"
                className=""
              />
            </Link>
          </div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a href="/about">About Us</a>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {services.map((service) => (
                      <ListItem
                        key={service.title}
                        title={service.title}
                        href={service.href}
                        icon={service.icon}
                      >
                        {service.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/industries" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Industries
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/careers" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Careers
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/blogs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Blogs
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Button>Contact Us</Button>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
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
});
ListItem.displayName = "ListItem";
