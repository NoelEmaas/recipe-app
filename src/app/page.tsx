import { 
  Footer, 
  Header, 
  Hero, 
  RecipeList 
} from "@/components";

export default function Home() {
  return (
    <main >
      <div className="container mx-auto px-2">
        <Header />
        <Hero />
        <RecipeList />
      </div>
      <Footer />
    </main>
  );
}
