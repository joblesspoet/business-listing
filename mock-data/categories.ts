export type CategoryType = {
  id: number;
  name: string;
  icon: string;
};
export const categories: Array<CategoryType> = [
  {
    id: 1,
    name: "Restaurants",
    icon: "/restaurants.png",
  },
  {
    id: 2,
    name: "Gas Station",
    icon: "/gas-pump.png",
  },
  {
    id: 3,
    name: "Grocery",
    icon: "/grocery-cart.png",
  },
  {
    id: 4,
    name: "Cafe",
    icon: "/cafe.png",
  },
  {
    id: 5,
    name: "Bar",
    icon: "/bar-counter.png",
  },
  {
    id: 6,
    name: "Bank",
    icon: "/bank.png",
  },
  {
    id: 7,
    name: "More",
    icon: "/option.png",
  },
];
