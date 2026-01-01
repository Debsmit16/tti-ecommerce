import { 
  CategoryMenu, 
  Hero, 
  StatsSection, 
  TestimonialsSection, 
  IntroducingSection, 
  ProductsSection 
} from "@/components";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <IntroducingSection />
      <CategoryMenu />
      <ProductsSection />
      <TestimonialsSection />
    </>
  );
}
