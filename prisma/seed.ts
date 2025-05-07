import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Mock users data
  const users = [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      password: "password123",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      password: "password123",
    },
  ];

  // Mock fruits data
  const fruits = [
    {
      id: "1",
      name: "Apple",
      image: "/images/fruits/apple.png",
      color: "#ff6b6b",
    },
    {
      id: "2",
      name: "Orange",
      image: "/images/fruits/orange.png",
      color: "#ffa502",
    },
    {
      id: "3",
      name: "Kiwi",
      image: "/images/fruits/kiwi.png",
      color: "#2ed573",
    },
    {
      id: "4",
      name: "Strawberry",
      image: "/images/fruits/strawberry.png",
      color: "#ff4757",
    },
    {
      id: "5",
      name: "Banana",
      image: "/images/fruits/banana.png",
      color: "#ffd43b",
    },
    {
      id: "6",
      name: "Blueberry",
      image: "/images/fruits/blueberry.png",
      color: "#5352ed",
    },
    {
      id: "7",
      name: "Pineapple",
      image: "/images/fruits/pineapple.png",
      color: "#feca57",
    },
    {
      id: "8",
      name: "Spinach",
      image: "/images/fruits/spinach.png",
      color: "#26de81",
    },
    {
      id: "9",
      name: "Ginger",
      image: "/images/fruits/ginger.png",
      color: "#f7b731",
    },
  ];

  // Mock juices data
  const juices = [
    {
      id: "1",
      name: "Detox Green",
      description: "A refreshing blend to cleanse your body and boost your immune system.",
      category: "Detox",
      price: 69.99,
      image: "/images/juices/spinach.webp",
      ingredients: ["Spinach", "Apple", "Kiwi", "Ginger"].join(','),
      benefits: ["Detoxifies", "Boosts immunity", "Improves digestion"].join(','),
      featured: true,
    },
    {
      id: "2",
      name: "Immunity Booster",
      description: "Packed with vitamin C to strengthen your immune system.",
      category: "Immunity",
      price: 89.99,
      image: "/images/juices/immunity-booster.jpg",
      ingredients: ["Orange", "Pineapple", "Ginger"].join(','),
      benefits: ["Strengthens immunity", "Reduces inflammation", "Rich in antioxidants"].join(','),
      popular: true,
    },
    {
      id: "3",
      name: "Energy Blast",
      description: "Natural energy boost to kickstart your day.",
      category: "Energy",
      price: 79.49,
      image: "/images/juices/energy-blast.jpeg",
      ingredients: ["Banana", "Strawberry", "Orange"].join(','),
      benefits: ["Increases energy", "Improves focus", "Supports workout recovery"].join(','),
      new: true,
    },
    {
      id: "4",
      name: "Berry Bliss",
      description: "A delicious mix of berries packed with antioxidants.",
      category: "Antioxidant",
      price: 79.49,
      image: "/images/juices/berry-bliss.jpeg",
      ingredients: ["Strawberry", "Blueberry", "Apple"].join(','),
      benefits: ["Rich in antioxidants", "Supports heart health", "Improves skin health"].join(','),
      featured: true,
    },
    {
      id: "5",
      name: "Tropical Paradise",
      description: "A taste of the tropics in every sip.",
      category: "Refreshing",
      price: 79.99,
      image: "/images/juices/tropical-paradise.jpg",
      ingredients: ["Pineapple", "Orange", "Banana"].join(','),
      benefits: ["Hydrates", "Boosts mood", "Supports digestive health"].join(','),
      popular: true,
    },
    {
      id: "6",
      name: "Green Machine",
      description: "Nutrient-dense green juice for optimal health.",
      category: "Detox",
      price: 89.99,
      image: "/images/juices/green-machine.webp",
      ingredients: ["Spinach", "Kiwi", "Apple", "Ginger"].join(','),
      benefits: ["Cleanses", "Alkalizes", "Provides essential nutrients"].join(','),
      new: true,
    },
  ];

 // Mock dishes data
  const dishes = [
    {
      id: "1",
      name: "Quinoa Vegetable Salad",
      description: "A refreshing quinoa salad with colorful vegetables, herbs, and a zesty lemon dressing.",
      category: "Salads",
      price: 99.99,
      image: "/images/dishes/quinoa-salad.jpg",
      ingredients: ["Quinoa", "Bell Peppers", "Cucumber", "Red Onion", "Parsley", "Lemon Juice", "Olive Oil"].join(','),
      nutritionalInfo: {
        calories: 320,
        protein: 12,
        carbs: 45,
        fat: 14,
        fiber: 8,
      },
      prepTime: 15,
      cookTime: 20,
      featured: true,
      vegetarian: true,
      vegan: true,
      glutenFree: true,
    },
    {
      id: "2",
      name: "Greek Yogurt Parfait",
      description: "Creamy Greek yogurt layered with fresh berries, honey, and crunchy granola.",
      category: "Breakfast",
      price: 169.99,
      image: "/images/dishes/yogurt-parfait.jpg",
      ingredients: ["Greek Yogurt", "Mixed Berries", "Granola", "Honey", "Mint"].join(','),
      nutritionalInfo: {
        calories: 280,
        protein: 15,
        carbs: 35,
        fat: 8,
        fiber: 5,
      },
      prepTime: 10,
      cookTime: 0,
      popular: true,
      vegetarian: true,
      glutenFree: true,
    },
    {
      id: "3",
      name: "Zucchini Pasta with Cherry Tomatoes",
      description: "Light and healthy zucchini noodles tossed with cherry tomatoes, garlic, and herbs.",
      category: "Mains",
      price: 119.99,
      image: "/images/dishes/zucchini-pasta.jpg",
      ingredients: ["Zucchini", "Cherry Tomatoes", "Garlic", "Olive Oil", "Basil", "Parmesan Cheese"].join(','),
      nutritionalInfo: {
        calories: 220,
        protein: 8,
        carbs: 18,
        fat: 12,
        fiber: 6,
      },
      prepTime: 15,
      cookTime: 10,
      new: true,
      vegetarian: true,
      glutenFree: true,
    },
    {
      id: "4",
      name: "Lemon Herb Salmon",
      description: "Perfectly baked salmon fillet with fresh herbs, lemon, and a side of green beans.",
      category: "Mains",
      price: 149.99,
      image: "/images/dishes/lemon-salmon.jpg",
      ingredients: ["Salmon Fillet", "Lemon", "Dill", "Parsley", "Olive Oil", "Green Beans", "Garlic"].join(','),
      nutritionalInfo: {
        calories: 380,
        protein: 32,
        carbs: 12,
        fat: 22,
        fiber: 4,
      },
      prepTime: 10,
      cookTime: 20,
      featured: true,
      glutenFree: true,
      dairyFree: true,
    },
    {
      id: "5",
      name: "Roasted Vegetable & Chickpea Bowl",
      description: "A hearty bowl of roasted vegetables, chickpeas, and brussels sprouts with tahini sauce.",
      category: "Bowls",
      price: 129.99,
      image: "/images/dishes/roasted-veggie-bowl.jpg",
      ingredients: ["Sweet Potato", "Broccoli", "Brussels Sprouts", "Chickpeas", "Tahini", "Lemon", "Spices"].join(','),
      nutritionalInfo: {
        calories: 420,
        protein: 15,
        carbs: 60,
        fat: 16,
        fiber: 14,
      },
      prepTime: 15,
      cookTime: 30,
      popular: true,
      vegetarian: true,
      vegan: true,
      glutenFree: true,
      dairyFree: true,
    },
    {
      id: "6",
      name: "Berry Smoothie Bowl",
      description: "Thick and creamy berry smoothie topped with banana, granola, and chia seeds.",
      category: "Breakfast",
      price: 189.99,
      image: "/images/dishes/berry-smoothie-bowl.jpg",
      ingredients: ["Mixed Berries", "Banana", "Almond Milk", "Granola", "Chia Seeds", "Coconut Flakes"].join(','),
      nutritionalInfo: {
        calories: 340,
        protein: 8,
        carbs: 65,
        fat: 10,
        fiber: 12,
      },
      prepTime: 10,
      cookTime: 0,
      new: true,
      vegetarian: true,
      vegan: true,
      dairyFree: true,
    },
    {
      id: "7",
      name: "Baked Vegetable Sticks",
      description: "Crispy baked vegetable sticks served with a variety of dipping sauces.",
      category: "Snacks",
      price: 179.99,
      image: "/images/dishes/veggie-sticks-dip.jpg",
      ingredients: ["Zucchini", "Sweet Potato", "Carrot", "Breadcrumbs", "Herbs", "Yogurt Dip", "BBQ Sauce"].join(','),
      nutritionalInfo: {
        calories: 260,
        protein: 6,
        carbs: 40,
        fat: 8,
        fiber: 6,
      },
      prepTime: 20,
      cookTime: 25,
      popular: true,
      vegetarian: true,
    },
  ];

 // Mock dishes data
  const dishes = [
    {
      id: "1",
      name: "Quinoa Vegetable Salad",
      description: "A refreshing quinoa salad with colorful vegetables, herbs, and a zesty lemon dressing.",
      category: "Salads",
      price: 99.99,
      image: "/images/dishes/quinoa-salad.jpg",
      ingredients: ["Quinoa", "Bell Peppers", "Cucumber", "Red Onion", "Parsley", "Lemon Juice", "Olive Oil"].join(','),
      nutritionalInfo: {
        calories: 320,
        protein: 12,
        carbs: 45,
        fat: 14,
        fiber: 8,
      },
      prepTime: 15,
      cookTime: 20,
      featured: true,
      vegetarian: true,
      vegan: true,
      glutenFree: true,
    },
    {
      id: "2",
      name: "Greek Yogurt Parfait",
      description: "Creamy Greek yogurt layered with fresh berries, honey, and crunchy granola.",
      category: "Breakfast",
      price: 169.99,
      image: "/images/dishes/yogurt-parfait.jpg",
      ingredients: ["Greek Yogurt", "Mixed Berries", "Granola", "Honey", "Mint"].join(','),
      nutritionalInfo: {
        calories: 280,
        protein: 15,
        carbs: 35,
        fat: 8,
        fiber: 5,
      },
      prepTime: 10,
      cookTime: 0,
      popular: true,
      vegetarian: true,
      glutenFree: true,
    },
    {
      id: "3",
      name: "Zucchini Pasta with Cherry Tomatoes",
      description: "Light and healthy zucchini noodles tossed with cherry tomatoes, garlic, and herbs.",
      category: "Mains",
      price: 119.99,
      image: "/images/dishes/zucchini-pasta.jpg",
      ingredients: ["Zucchini", "Cherry Tomatoes", "Garlic", "Olive Oil", "Basil", "Parmesan Cheese"].join(','),
      nutritionalInfo: {
        calories: 220,
        protein: 8,
        carbs: 18,
        fat: 12,
        fiber: 6,
      },
      prepTime: 15,
      cookTime: 10,
      new: true,
      vegetarian: true,
      glutenFree: true,
    },
    {
      id: "4",
      name: "Lemon Herb Salmon",
      description: "Perfectly baked salmon fillet with fresh herbs, lemon, and a side of green beans.",
      category: "Mains",
      price: 149.99,
      image: "/images/dishes/lemon-salmon.jpg",
      ingredients: ["Salmon Fillet", "Lemon", "Dill", "Parsley", "Olive Oil", "Green Beans", "Garlic"].join(','),
      nutritionalInfo: {
        calories: 380,
        protein: 32,
        carbs: 12,
        fat: 22,
        fiber: 4,
      },
      prepTime: 10,
      cookTime: 20,
      featured: true,
      glutenFree: true,
      dairyFree: true,
    },
    {
      id: "5",
      name: "Roasted Vegetable & Chickpea Bowl",
      description: "A hearty bowl of roasted vegetables, chickpeas, and brussels sprouts with tahini sauce.",
      category: "Bowls",
      price: 129.99,
      image: "/images/dishes/roasted-veggie-bowl.jpg",
      ingredients: ["Sweet Potato", "Broccoli", "Brussels Sprouts", "Chickpeas", "Tahini", "Lemon", "Spices"].join(','),
      nutritionalInfo: {
        calories: 420,
        protein: 15,
        carbs: 60,
        fat: 16,
        fiber: 14,
      },
      prepTime: 15,
      cookTime: 30,
      popular: true,
      vegetarian: true,
      vegan: true,
      glutenFree: true,
      dairyFree: true,
    },
    {
      id: "6",
      name: "Berry Smoothie Bowl",
      description: "Thick and creamy berry smoothie topped with banana, granola, and chia seeds.",
      category: "Breakfast",
      price: 189.99,
      image: "/images/dishes/berry-smoothie-bowl.jpg",
      ingredients: ["Mixed Berries", "Banana", "Almond Milk", "Granola", "Chia Seeds", "Coconut Flakes"].join(','),
      nutritionalInfo: {
        calories: 340,
        protein: 8,
        carbs: 65,
        fat: 10,
        fiber: 12,
      },
      prepTime: 10,
      cookTime: 0,
      new: true,
      vegetarian: true,
      vegan: true,
      dairyFree: true,
    },
    {
      id: "7",
      name: "Baked Vegetable Sticks",
      description: "Crispy baked vegetable sticks served with a variety of dipping sauces.",
      category: "Snacks",
      price: 179.99,
      image: "/images/dishes/veggie-sticks-dip.jpg",
      ingredients: ["Zucchini", "Sweet Potato", "Carrot", "Breadcrumbs", "Herbs", "Yogurt Dip", "BBQ Sauce"].join(','),
      nutritionalInfo: {
        calories: 260,
        protein: 6,
        carbs: 40,
        fat: 8,
        fiber: 6,
      },
      prepTime: 20,
      cookTime: 25,
      popular: true,
      vegetarian: true,
    },
  ];

  console.log("Start seeding ...");
  try {
    console.log("Seeding Users...");
    await prisma.user.createMany({ data: users });
    console.log("Users seeded.");
  } catch (error) {
    console.error("Error seeding Users:", error);
  }

  try {
    console.log("Seeding Fruits...");
    await prisma.fruit.createMany({ data: fruits });
    console.log("Fruits seeded.");
  } catch (error) {
    console.error("Error seeding Fruits:", error);
  }

  try {
    console.log("Seeding Juices...");
    await prisma.juice.createMany({ data: juices });
    console.log("Juices seeded.");
  } catch (error) {
    console.error("Error seeding Juices:", error);
  }

  try {
    console.log("Seeding Dishes...");
    await prisma.dish.createMany({ data: dishes });
    console.log("Dishes seeded.");
  } catch (error) {
    console.error("Error seeding Dishes:", error);
  }
  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });