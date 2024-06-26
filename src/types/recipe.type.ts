interface Recipe {
  id: number;
  name: string;
  image: string;
  description: string;
  ingredients: string[];
  instructions: string;
  catgory: string;
}

export type {
  Recipe
}