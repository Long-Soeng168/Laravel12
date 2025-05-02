import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "./logo";
import { foods, academic, schoolLife } from "./config";
import { Link } from "@inertiajs/react";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <Logo />

        <div className="mt-12 text-base space-y-4">
          <Link href="#">Home</Link>

          <div>
            <div className="font-bold">About</div>
            <ul className="mt-2 space-y-3 ml-1 pl-4 border-l">
              {foods.map((foodItem) => (
                <li key={foodItem.title}>
                  <Link href="#" className="flex items-center gap-2">
                    {foodItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-bold">Academics</div>
            <ul className="mt-2 space-y-3 ml-1 pl-4 border-l">
              {academic.map((item) => (
                <li key={item.title}>
                  <Link href="#" className="flex items-center gap-2">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-bold">Admissions</div>
            <ul className="mt-2 space-y-3 ml-1 pl-4 border-l">
              {academic.map((item) => (
                <li key={item.title}>
                  <Link href="#" className="flex items-center gap-2">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-bold">School Life</div>
            <ul className="mt-2 space-y-3 ml-1 pl-4 border-l">
              {schoolLife.map((item) => (
                <li key={item.title}>
                  <Link href="#" className="flex items-center gap-2">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
