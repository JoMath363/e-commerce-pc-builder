/* ts-node prisma/seeds/product.seed.ts*/

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  /* await prisma.product.createMany({
    data: [
      {
        "name": "AMD Ryzen 7 5800X",
        "description": "8-core, 16-thread unlocked desktop processor.",
        "price": 1599.00,
        "stock": 20,
        "imageUrl": "https://example.com/ryzen.jpg",
        "specs": {
          "cores": "8",
          "threads": "16",
          "baseClock": "3.8GHz",
          "socket": "AM4"
        },
        "categoryId": "a7b7aab0-5fb1-4621-b15c-cbf4725a78ff"
      },
      {
        name: "Intel Core i7-12700K",
        description: "12-core (8P+4E), 20-thread processor with Intel UHD Graphics 770.",
        price: 2199,
        stock: 15,
        imageUrl: "https://example.com/i7-12700k.jpg",
        specs: {
          cores: "12 (8P+4E)",
          threads: "20",
          socket: "LGA1700",
          baseClock: "3.6GHz"
        },
        categoryId: "a7b7aab0-5fb1-4621-b15c-cbf4725a78ff"
      },
      {
        name: "AMD Ryzen 9 7900X",
        description: "12-core, 24-thread processor with 5.6GHz max boost and PCIe 5.0 support.",
        price: 2999,
        stock: 10,
        imageUrl: "https://example.com/ryzen-9-7900x.jpg",
        specs: {
          cores: "12",
          threads: "24",
          socket: "AM5",
          baseClock: "4.7GHz"
        },
        categoryId: "a7b7aab0-5fb1-4621-b15c-cbf4725a78ff"
      },
      {
        name: "Intel Core i5-13600K",
        description: "14-core (6P+8E), 20-thread processor for mid-range gaming and productivity.",
        price: 1599,
        stock: 25,
        imageUrl: "https://example.com/i5-13600k.jpg",
        specs: {
          cores: "14 (6P+8E)",
          threads: "20",
          socket: "LGA1700",
          baseClock: "3.5GHz"
        },
        categoryId: "a7b7aab0-5fb1-4621-b15c-cbf4725a78ff"
      },
      {
        name: "AMD Ryzen 5 5600X",
        description: "6-core, 12-thread processor with efficient performance for gaming.",
        price: 1049,
        stock: 30,
        imageUrl: "https://example.com/ryzen-5-5600x.jpg",
        specs: {
          cores: "6",
          threads: "12",
          socket: "AM4",
          baseClock: "3.7GHz"
        },
        categoryId: "a7b7aab0-5fb1-4621-b15c-cbf4725a78ff"
      },
      {
        name: "Intel Core i9-13900K",
        description: "24-core (8P+16E), 32-thread flagship CPU for high-end PCs.",
        price: 3899,
        stock: 5,
        imageUrl: "https://example.com/i9-13900k.jpg",
        specs: {
          cores: "24 (8P+16E)",
          threads: "32",
          socket: "LGA1700",
          baseClock: "3.0GHz"
        },
        categoryId: "a7b7aab0-5fb1-4621-b15c-cbf4725a78ff"
      }
    ]
  }); */

  await prisma.user.createMany({
    data: [
      {
        name: "admin",
        email: "admin@gmail.com",
        isAdmin: true,
        passwordHash: "$2b$08$7lyTcM8SHihNs/oE0ql4u.Dvzg7e/T1pRl.FFTUe6V5doEdaJfw6m"
      }
    ]
  })

  console.log('Seed inserida com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(() => {
    prisma.$disconnect();
  });