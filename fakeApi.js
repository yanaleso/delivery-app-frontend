const shops = [
  {
    "id": 1,
    "name": "McDonald's",
    "imageUrl": "https://1000logos.net/wp-content/uploads/2017/03/McDonalds-logo-500x281.png",
    "products": [
      {
        "id": 1,
        "name": "Tsar Burger",
        "description": "Juicy double beef, fresh salad and our secret sauce",
        "price": 7.99,
        "imageUrl": "https://s7d1.scene7.com/is/image/mcdonalds/Sdwch_Hamburger:product-header-mobile?wid=823&hei=472&dpr=off"
      },
      {
        "id": 2,
        "name": "Royal Fries",
        "description": "Crispy golden fries, perfectly salted",
        "price": 2.99,
        "imageUrl": "https://s7d1.scene7.com/is/image/mcdonalds/FFMedium:product-header-mobile?wid=823&hei=472&dpr=off"
      },
      {
        "id": 3,
        "name": "Czarist Cola",
        "description": "Refreshing fizzy drink, ice-cold",
        "price": 1.99,
        "imageUrl": "https://s7d1.scene7.com/is/image/mcdonalds/CocaColaEconom:product-header-mobile?wid=823&hei=472&dpr=off"
      },
      {
        "id": 4,
        "name": "Imperial Ice Cream",
        "description": "Vanilla and chocolate ice cream with caramel topping",
        "price": 3.99,
        "imageUrl": "https://s7d1.scene7.com/is/image/mcdonalds/IceCone:product-header-mobile?wid=823&hei=472&dpr=off"
      },
      {
        "id": 5,
        "name": "Chicken McNuggets",
        "description": "Fresh salad with tomatoes, cucumbers and our house dressing",
        "price": 4.99,
        "imageUrl": "https://s7d1.scene7.com/is/image/mcdonalds/Nuggets_9:product-header-mobile?wid=829&hei=476&dpr=off"
      }
    ]
  },
  {
    "id": 2,
    "name": "McDowell's",
    "products": [
      {
        "id": 6,
        "name": "Big Mick",
        "description": "Two all beef patties, special sauce, lettuce, cheese, pickles, onions on a non sesame seed bun",
        "price": 6.99,
        "imageUrl": "https://via.placeholder.com/200"
      },
      {
        "id": 7,
        "name": "Golden Arches Fries",
        "description": "Crunchy, salty, irresistible",
        "price": 2.99,
        "imageUrl": "https://via.placeholder.com/200"
      },
      {
        "id": 8,
        "name": "McDowell's Milkshake",
        "description": "Thick and creamy, made with real ice cream",
        "price": 3.99,
        "imageUrl": "https://via.placeholder.com/200"
      },
      {
        "id": 9,
        "name": "Queen's Quesadilla",
        "description": "Tasty chicken and cheese in a crispy tortilla",
        "price": 5.99,
        "imageUrl": "https://via.placeholder.com/200"
      },
      {
        "id": 10,
        "name": "Duke's Donut",
        "description": "Deliciously sweet donut with sugar glazing",
        "price": 1.99,
        "imageUrl": "https://via.placeholder.com/200"
      }
    ]
  },
  {
    "id": 3,
    "name": "Subway Surfers",
    "products": [
      {
        "id": 11,
        "name": "Submarine Sandwich",
        "description": "Delicious sub filled with ham, cheese, lettuce and tomatoes",
        "price": 6.99,
        "imageUrl": "https://via.placeholder.com/200"
      },
      {
        "id": 12,
        "name": "Surfer's Fries",
        "description": "Crispy french fries with our special seasoning",
        "price": 2.99,
        "imageUrl": "https://via.placeholder.com/200"
      },
      {
        "id": 13,
        "name": "Train Truffle",
        "description": "Decadent chocolate truffle with a rich and gooey center",
        "price": 3.99,
        "imageUrl": "https://via.placeholder.com/200"
      },
      {
        "id": 14,
        "name": "Skater's Soda",
        "description": "Refreshing fizzy drink with a hint of citrus",
        "price": 1.99,
        "imageUrl": "https://via.placeholder.com/200"
      },
      {
        "id": 15,
        "name": "Railway Ravioli",
        "description": "Delicious pasta filled with cheese and spinach in a tomato sauce",
        "price": 6.99,
        "imageUrl": "https://via.placeholder.com/200"
      }
    ]
  },
  {
    "id": 4,
    "name": "Pizza Portal",
    "products": [
      {
        "id": 16,
        "name": "Teleporter's Tomato Pizza",
        "description": "Classic pizza with fresh tomatoes, mozzarella, and basil",
        "price": 8.99,
        "imageUrl": "https://via.placeholder.com/200"
      },
      {
        "id": 17,
        "name": "Wormhole's White Pizza",
        "description": "A delightful pizza with a creamy white sauce, chicken and green peppers",
        "price": 9.99,
        "imageUrl": "https://via.placeholder.com/200"
      },
      {
        "id": 18,
        "name": "Gateway's Garlic Bread",
        "description": "Crispy garlic bread, perfect as a starter",
        "price": 3.99,
        "imageUrl": "https://via.placeholder.com/200"
      },
      {
        "id": 19,
        "name": "Vortex's Vanilla Gelato",
        "description": "Creamy and delicious vanilla gelato, made in-house",
        "price": 3.99,
        "imageUrl": "https://via.placeholder.com/200"
      },
      {
        "id": 20,
        "name": "Dimension's Dr Pepper",
        "description": "Classic Dr Pepper, served ice cold",
        "price": 1.99,
        "imageUrl": "https://via.placeholder.com/200"
      }
    ]
  },
  {
    "id": 5,
    "name": "Pasta Portal",
    "products": [
      {
        "id": 21,
        "name": "Spaghetti and Meatballs",
        "description": "Classic spaghetti with juicy meatballs in a rich tomato sauce",
        "price": 9.99,
        "imageUrl": "https://via.placeholder.com/200"
      },
      {
        "id": 22,
        "name": "Fettuccine Alfredo",
        "description": "Creamy fettuccine with grilled chicken and parmesan",
        "price": 9.99,
        "imageUrl": "https://via.placeholder.com/200"
      },
      {
        "id": 23,
        "name": "Garlic Bread",
        "description": "Warm, toasted bread with a rich garlic butter",
        "price": 3.99,
        "imageUrl": "https://via.placeholder.com/200"
      },
      {
        "id": 24,
        "name": "Tiramisu",
        "description": "Delicious coffee-flavored Italian dessert",
        "price": 4.99,
        "imageUrl": "https://via.placeholder.com/200"
      },
      {
        "id": 25,
        "name": "Chianti",
        "description": "A glass of classic Italian red wine",
        "price": 5.99,
        "imageUrl": "https://via.placeholder.com/200"
      }
    ]
  }
]

export const getShops = () => {
  return shops;
};

export const getShopById = (shopId) => {
  return shops.find((shop) => shop.id === shopId);
};