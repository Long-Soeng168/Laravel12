
import { ReactNode } from "react";
import MyFooter from "../components-wu/my-footer";
import MyHeader from "../components-wu/my-header";

interface LayoutProps {
  children: ReactNode;
}

const MyLayoutWestern = ({ children }: LayoutProps) => {
  return (
    <>
      {/* Header */}
      <MyHeader/>
      {/* End Header */}
      <main className="min-h-screen  max-w-screen-2xl mx-auto">{children}</main>
      <main className="min-h-screen mx-auto">{children}</main>

      {/* Footer */}
      <MyFooter/>
      {/* End Footer */}
    </>
  );
};

export default MyLayoutWestern;
