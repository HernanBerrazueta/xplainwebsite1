import { Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import ScrollBtn from "./scrollBtn/ScrollBtn";
// import Loading from "../loader/Loading";
import theme from "../../theme";

const Layout: React.FC = () => {
  const [showBtn, setShowBtn] = useState(false);
  // const location = useLocation();
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // const isFundPage = location.pathname === "/lumina"; // For light purple color
  const boxShadow: string = "0 0 4px #805cdd";
  const backgroundColor: string = `${theme.palette.primary.main}`;
  // const boxShadow = isFundPage
  //   ? "0 0 4px rgba(0, 0, 0, 0.5)"
  //   : "0 0 4px #805cdd"; // For light purple color
  // const backgroundColor: string = isFundPage
  //   ? theme.palette.primary.light
  //   : theme.palette.primary.main; // For light purple color

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
      {/* <Suspense fallback={<Loading />}> */}
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
