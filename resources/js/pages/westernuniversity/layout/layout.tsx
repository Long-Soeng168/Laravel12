
import { ReactNode } from "react";
import MyFooter from "../components-wu/my-footer";
import MyLanguageSwitcherAndSerchInput from "@/components/my-language-switcher-and-search-input";

interface LayoutProps {
  children: ReactNode;
}

const MyLayoutWestern = ({ children }: LayoutProps) => {
  return (
    <>
      {/* Header */}
      <MyLanguageSwitcherAndSerchInput />

      {/* End Header */}
      <main className="min-h-screen  mx-auto">{children}</main>
      {/* Footer */}
      <MyFooter/>
      {/* End Footer */}
    </>
  );
};

export default MyLayoutWestern;
