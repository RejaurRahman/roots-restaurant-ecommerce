export enum CATEGORIES_ACTION_TYPES {
  FETCH_CATEGORIES_FAILED = "category/FETCH_CATEGORIES_FAILED",
  FETCH_CATEGORIES_START = "category/FETCH_CATEGORIES_START",
  FETCH_CATEGORIES_SUCCESS = "category/FETCH_CATEGORIES_SUCCESS"
}

export type CategoryItem = {
  calories: number
  diet: string[]
  id: number
  imageUrl: string
  ingredients: string[]
  name: string
  notes: string;
  price: number
}

export type Category = {
  imageUrl: string
  items: CategoryItem[]
  title: string
}

export type CategoryMap = {
  [key: string]: CategoryItem[]
}
