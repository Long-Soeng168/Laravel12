import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import { LucideIcon } from "lucide-react";
import React from "react";
import { academic, foods, admission, schoolLife } from "./config";
import { Link } from "@inertiajs/react";

export const NavMenu = (props: NavigationMenuProps) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="gap-0 space-x-0 text-sm">
      <NavigationMenuItem>
        <Button variant="ghost" className="text-[15px] font-normal" asChild>
          <Link href="#">Home</Link>
        </Button>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger className="text-[15px] font-normal">
          About
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[300px] gap-3 ">
            {foods.map((food) => (
              <ListItem
                key={food.title}
                title={food.title}
                 className="border-b-[0.5px] "
                href="#"
              >
              </ListItem>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger className="text-[15px] font-normal">
          Academic
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[300px] gap-3 ">
            {academic.map((menuItem) => (
              <ListItem
                key={menuItem.title}
                title={menuItem.title}
                className="border-b-[0.5px] "
                href="#"
              >
              </ListItem>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger className="text-[15px] font-normal">
          Admissions
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[300px] gap-3 ">
            {admission.map((menuItem) => (
              <ListItem
                key={menuItem.title}
                title={menuItem.title}
                className="border-b-[0.5px] "
                href="#"
              >
              </ListItem>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger className="text-[15px] font-normal">
          School Life
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[300px] gap-3 ">
            {schoolLife.map((menuItem) => (
              <ListItem
                key={menuItem.title}
                title={menuItem.title}
                className="border-b-[0.5px] "
                href="#"
              >
              </ListItem>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <Button variant="ghost" className="text-[15px] font-normal" asChild>
          <Link href="#">Contact</Link>
        </Button>
    </NavigationMenuList>
  </NavigationMenu>
);

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & { icon: LucideIcon }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-2 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-semibold leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
