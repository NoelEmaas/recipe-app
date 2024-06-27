import { Header, Hero, RecipeList } from "@/components";

export default function Home() {
  return (
    <main className="container mx-auto px-2">
      <Header />
      <Hero />
      <RecipeList />
    </main>
  );
}
