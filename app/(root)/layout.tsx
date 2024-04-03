import { Navbar } from "@/components";

const LayoutRoot = ({ children }: { children: React.ReactNode }) => (
  <>
    <Navbar />
    {children}
  </>
);
export default LayoutRoot;
