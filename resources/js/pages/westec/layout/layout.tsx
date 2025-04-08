import MyFooter from "@/components/my-footer";
import MyHeader from "@/components/my-header";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const MyLayout = ({ children }: LayoutProps) => {
  return (
    <>
      {/* Header */}
      <MyHeader/>
      {/* End Header */}

      <main className="min-h-screen background max-w-[2000px] mx-auto">{children}</main>

      {/* Footer */}
      <MyFooter/>
      {/* End Footer */}
    </>
  );
};

export default MyLayout;
