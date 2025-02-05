import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import NavbarTop from "./components/NavbarTop";
import NavbarInfo from "./components/NavbarInfo";
import NavbarMenu from "./components/NavbarMenu";

const App = () => {
  return (
    <>
      <NavbarTop />
      <NavbarInfo />
      <NavbarMenu />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default App;
