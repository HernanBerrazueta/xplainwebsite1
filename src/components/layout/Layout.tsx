import { Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import ScrollBtn from "./scrollBtn/ScrollBtn";
import theme from "../../theme";

const Layout: React.FC = () => {
  const [showBtn, setShowBtn] = useState(false);
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const boxShadow: string = "0 0 4px #805cdd";
  const backgroundColor: string = `${theme.palette.primary.main}`;

  useEffect(() => {
    const handleScrollBtnVisibility = () => {
      window.pageYOffset > 300 ? setShowBtn(true) : setShowBtn(false);
    };
    window.addEventListener("scroll", handleScrollBtnVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollBtnVisibility);
    };
  }, []);

  return (
    <>
      {showBtn && <ScrollBtn handleScrollToTop={handleScrollToTop} />}
      <Header backgroundColor={backgroundColor} boxShadow={boxShadow} />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
