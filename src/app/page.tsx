import { 
  Footer, 
  Header, 
  Hero, 
  RecipeList,
  Seasonal
} from "@/components";

export default function Home() {
  return (
    <main >
      <div className="container mx-auto px-2">
        <Header />
        <Hero />
        <Seasonal />
        <RecipeList />
      </div>
      <Footer />
    </main>
  );
}
