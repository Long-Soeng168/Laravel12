import MyFooter from "@/components/my-footer";
import MyHeader from "@/components/my-header";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const WestecLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <MyHeader/>

      <main className="min-h-screen background max-w-[2000px] mx-auto">{children}</main>

      <MyFooter/>
    </>
  );
};

export default WestecLayout;
