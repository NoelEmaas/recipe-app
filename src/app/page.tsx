import { 
  Categories,
  Hero, 
  RecipeList,
  Seasonal,
  Title
} from "@/components";

const Home = () => {
  return (
    <main >
      <div className="container mx-auto px-2">
        <Hero />
        <Title title="Perfect for this Season" />
        <Seasonal />
        <Title title="Categories" />
        <Categories />
        <Title title="Discover Recipes" />
        <RecipeList />
      </div>
    </main>
  );
}

export default Home;
