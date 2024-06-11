import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
const About = lazy(() => import("../src/pages/about/About"));
const Admins = lazy(() => import("../src/pages/admins/Admins"));
// const Insights = lazy(() => import("./pages/insights/Insights"));
const Treasurers = lazy(() => import("./pages/treasurers/Treasurers"));
const Auditors = lazy(() => import("../src/pages/auditors/Auditors"));
const HomePage = lazy(() => import("../src/pages/homePage/HomePage"));
const Form = lazy(() => import("../src/pages/form/Form"));
const Article = lazy(() => import("./pages/article/Article"));
const Privacy = lazy(() => import("./pages/copyright/privacy/Privacy"));
const Cookies = lazy(() => import("./pages/copyright/cookies/Cookies"));
const EsgCommitment = lazy(() => import("./pages/copyright/esg/EsgCommitment"));
const DiversityAndInclusion = lazy(
  () => import("./pages/copyright/diversityAndInclusion/DiversityAndInclusion")
);
const DataProtection = lazy(
  () => import("./pages/copyright/dataProtection/DataProtection")
);

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/prisma" element={<Treasurers />} />
        <Route path="/about" element={<About />} />
        <Route path="/lumina" element={<Admins />} />
        <Route path="/aurea" element={<Auditors />} />
        {/* <Route path="/articles" element={<Insights />} /> */}
        <Route path="article/:id" element={<Article />} />
        <Route path="/contact-us" element={<Form />} />
        <Route path="/privacy_policy" element={<Privacy />} />
        <Route path="/data_protection" element={<DataProtection />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/esg_commitment" element={<EsgCommitment />} />
        <Route
          path="/diversity_inclusion"
          element={<DiversityAndInclusion />}
        />
      </Route>
    </Routes>
  );
};

export default App;
