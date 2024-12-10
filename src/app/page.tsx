import Category from "@/components/category";
import Footer from "@/components/footer";
import HeroSection from "@/components/HeroSection";
import NewArrival from "@/components/NewArrival";
import Testimonials from "@/components/Testimonials";
import TopSelling from "@/components/TopSelling";




export default function Home() {
  return (
    <div>
      <HeroSection />
      <NewArrival />
      <div className="my-[64px] max-w-[1240px] mx-auto h-0 border border-solid" />
      <TopSelling/>
      <Category />
      <Testimonials/>
      <Footer />
    </div>
  );
}
