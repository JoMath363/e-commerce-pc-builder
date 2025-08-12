/* ts-node prisma/seeds/product.seed.ts*/

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Categories
  await prisma.category.createMany({
    data: [
      {
        "id": "b6b935f4-eef4-4c54-adc4-9388daab6901",
        "name": "processors"
      },
      {
        "id": "9b080981-fe57-4bf3-97e2-93267d901938",
        "name": "motherboards"
      },
      {
        "id": "86ff4b9b-8b25-4fa8-8822-c48a9a9fb133",
        "name": "memory"
      },
      {
        "id": "53c2b7e2-9795-4dfa-b765-7868420240e5",
        "name": "graphics-cards"
      },
      {
        "id": "218fc3ff-4ef6-493b-af44-6c5a8b344642",
        "name": "storage"
      },
      {
        "id": "83db0f42-36dd-43a5-920c-bdb476b3459f",
        "name": "power-supplies"
      },
      {
        "id": "871bac22-c9be-4bd3-a33b-b6d8d511b0ad",
        "name": "cases"
      },
      {
        "id": "8200571b-0c15-44d4-b7c1-0801d2ecdaac",
        "name": "coolers"
      },
      {
        "id": "952948b4-e9c0-46be-82af-4da78a9ae56e",
        "name": "case-fans"
      }
    ]
  })

  // Processors
  await prisma.product.createMany({
    data: [
      {
        name: "AMD Ryzen 7 9800X3D",
        description: "",
        price: 451.5,
        stock: 0,
        imageUrl: "",
        specs: {
          core_count: "8",
          core_clock: "4.7 GHz",
          boost_clock: "5.2 GHz",
          microarchitecture: "Zen 5",
          tdp: "120 W",
          graphics: "Radeon"
        },
        categoryId: "b6b935f4-eef4-4c54-adc4-9388daab6901"
      },
      {
        name: "AMD Ryzen 7 7800X3D",
        description: "",
        price: 340.05,
        stock: 0,
        imageUrl: "",
        specs: {
          core_count: "8",
          core_clock: "4.2 GHz",
          boost_clock: "5.0 GHz",
          microarchitecture: "Zen 4",
          tdp: "120 W",
          graphics: "Radeon"
        },
        categoryId: "b6b935f4-eef4-4c54-adc4-9388daab6901"
      },
      {
        name: "AMD Ryzen 5 7600X",
        description: "",
        price: 170.49,
        stock: 0,
        imageUrl: "",
        specs: {
          core_count: "6",
          core_clock: "4.7 GHz",
          boost_clock: "5.3 GHz",
          microarchitecture: "Zen 4",
          tdp: "105 W",
          graphics: "Radeon"
        },
        categoryId: "b6b935f4-eef4-4c54-adc4-9388daab6901"
      },
      {
        name: "AMD Ryzen 5 9600X",
        description: "",
        price: 204.99,
        stock: 0,
        imageUrl: "",
        specs: {
          core_count: "6",
          core_clock: "3.9 GHz",
          boost_clock: "5.4 GHz",
          microarchitecture: "Zen 5",
          tdp: "65 W",
          graphics: "Radeon"
        },
        categoryId: "b6b935f4-eef4-4c54-adc4-9388daab6901"
      },
      {
        name: "AMD Ryzen 7 7700X",
        description: "",
        price: 242.98,
        stock: 0,
        imageUrl: "",
        specs: {
          core_count: "8",
          core_clock: "4.5 GHz",
          boost_clock: "5.4 GHz",
          microarchitecture: "Zen 4",
          tdp: "105 W",
          graphics: "Radeon"
        },
        categoryId: "b6b935f4-eef4-4c54-adc4-9388daab6901"
      },
      {
        name: "AMD Ryzen 9 9950X3D",
        description: "",
        price: 649.99,
        stock: 0,
        imageUrl: "",
        specs: {
          core_count: "16",
          core_clock: "4.3 GHz",
          boost_clock: "5.7 GHz",
          microarchitecture: "Zen 5",
          tdp: "170 W",
          graphics: "Radeon"
        },
        categoryId: "b6b935f4-eef4-4c54-adc4-9388daab6901"
      },
      {
        name: "AMD Ryzen 5 5500",
        description: "",
        price: 74.22,
        stock: 0,
        imageUrl: "",
        specs: {
          core_count: "6",
          core_clock: "3.6 GHz",
          boost_clock: "4.2 GHz",
          microarchitecture: "Zen 3",
          tdp: "65 W",
          graphics: ""
        },
        categoryId: "b6b935f4-eef4-4c54-adc4-9388daab6901"
      },
      {
        name: "AMD Ryzen 7 9700X",
        description: "",
        price: 305.89,
        stock: 0,
        imageUrl: "",
        specs: {
          core_count: "8",
          core_clock: "3.8 GHz",
          boost_clock: "5.5 GHz",
          microarchitecture: "Zen 5",
          tdp: "65 W",
          graphics: "Radeon"
        },
        categoryId: "b6b935f4-eef4-4c54-adc4-9388daab6901"
      },
      {
        name: "AMD Ryzen 5 5600X",
        description: "",
        price: 158.99,
        stock: 0,
        imageUrl: "",
        specs: {
          core_count: "6",
          core_clock: "3.7 GHz",
          boost_clock: "4.6 GHz",
          microarchitecture: "Zen 3",
          tdp: "65 W",
          graphics: ""
        },
        categoryId: "b6b935f4-eef4-4c54-adc4-9388daab6901"
      },
      {
        name: "AMD Ryzen 5 5600",
        description: "",
        price: 125.61,
        stock: 0,
        imageUrl: "",
        specs: {
          core_count: "6",
          core_clock: "3.5 GHz",
          boost_clock: "4.4 GHz",
          microarchitecture: "Zen 3",
          tdp: "65 W",
          graphics: ""
        },
        categoryId: "b6b935f4-eef4-4c54-adc4-9388daab6901"
      }
    ]
  });

  // MotherBoards
  await prisma.product.createMany({
    data: [
      {
        "name": "Asus PRIME B650-PLUS WIFI",
        "description": "High-performance ATX motherboard with AM5 socket, Wi-Fi connectivity, and support for up to 192GB memory.",
        "price": 159.99,
        "stock": 10,
        "imageUrl": "",
        "specs": {
          "socket": "AM5",
          "form_factor": "ATX",
          "max_memory": "192 GB",
          "memory_slots": "4 slots",
          "color": "Black / Silver"
        },
        "categoryId": "9b080981-fe57-4bf3-97e2-93267d901938"
      },
      {
        "name": "MSI B650 GAMING PLUS WIFI",
        "description": "ATX gaming motherboard with AM5 socket, Wi-Fi, and support for up to 192GB of RAM.",
        "price": 169.99,
        "stock": 10,
        "imageUrl": "",
        "specs": {
          "socket": "AM5",
          "form_factor": "ATX",
          "max_memory": "192 GB",
          "memory_slots": "4 slots",
          "color": "Black"
        },
        "categoryId": "9b080981-fe57-4bf3-97e2-93267d901938"
      },
      {
        "name": "MSI MAG B650 TOMAHAWK WIFI",
        "description": "Durable ATX motherboard with AM5 socket, Wi-Fi support, and up to 256GB memory capacity.",
        "price": 189.42,
        "stock": 10,
        "imageUrl": "",
        "specs": {
          "socket": "AM5",
          "form_factor": "ATX",
          "max_memory": "256 GB",
          "memory_slots": "4 slots",
          "color": "Black"
        },
        "categoryId": "9b080981-fe57-4bf3-97e2-93267d901938"
      },
      {
        "name": "Gigabyte X870E AORUS ELITE WIFI7",
        "description": "Premium ATX motherboard with AM5 socket, Wi-Fi 7, and 256GB max memory support.",
        "price": 325.31,
        "stock": 10,
        "imageUrl": "",
        "specs": {
          "socket": "AM5",
          "form_factor": "ATX",
          "max_memory": "256 GB",
          "memory_slots": "4 slots",
          "color": "Black"
        },
        "categoryId": "9b080981-fe57-4bf3-97e2-93267d901938"
      },
      {
        "name": "Asus PRIME B550M-A WIFI II",
        "description": "Micro ATX motherboard with AM4 socket, Wi-Fi, and support for up to 128GB RAM.",
        "price": 99.99,
        "stock": 10,
        "imageUrl": "",
        "specs": {
          "socket": "AM4",
          "form_factor": "Micro ATX",
          "max_memory": "128 GB",
          "memory_slots": "4 slots",
          "color": "Blue / Silver"
        },
        "categoryId": "9b080981-fe57-4bf3-97e2-93267d901938"
      },
      {
        "name": "Gigabyte B650 EAGLE AX",
        "description": "ATX motherboard with AM5 socket, high memory capacity, and AX Wi-Fi support.",
        "price": 157.99,
        "stock": 10,
        "imageUrl": "",
        "specs": {
          "socket": "AM5",
          "form_factor": "ATX",
          "max_memory": "192 GB",
          "memory_slots": "4 slots",
          "color": "Gray / Black"
        },
        "categoryId": "9b080981-fe57-4bf3-97e2-93267d901938"
      },
      {
        "name": "Asus TUF GAMING B850-PLUS WIFI",
        "description": "TUF Gaming ATX motherboard with AM5 socket, Wi-Fi, and 192GB RAM support.",
        "price": 217.99,
        "stock": 10,
        "imageUrl": "",
        "specs": {
          "socket": "AM5",
          "form_factor": "ATX",
          "max_memory": "192 GB",
          "memory_slots": "4 slots",
          "color": "Black / Silver"
        },
        "categoryId": "9b080981-fe57-4bf3-97e2-93267d901938"
      },
      {
        "name": "ASRock B650M Pro RS WiFi",
        "description": "Micro ATX motherboard with AM5 socket, Wi-Fi, and up to 256GB RAM capacity.",
        "price": 139.99,
        "stock": 10,
        "imageUrl": "",
        "specs": {
          "socket": "AM5",
          "form_factor": "Micro ATX",
          "max_memory": "256 GB",
          "memory_slots": "4 slots",
          "color": "Black / Silver"
        },
        "categoryId": "9b080981-fe57-4bf3-97e2-93267d901938"
      },
      {
        "name": "MSI MAG X870 TOMAHAWK WIFI",
        "description": "High-end ATX motherboard with AM5 socket, Wi-Fi, and 256GB max memory.",
        "price": 269.99,
        "stock": 10,
        "imageUrl": "",
        "specs": {
          "socket": "AM5",
          "form_factor": "ATX",
          "max_memory": "256 GB",
          "memory_slots": "4 slots",
          "color": "Black"
        },
        "categoryId": "9b080981-fe57-4bf3-97e2-93267d901938"
      },
      {
        "name": "Gigabyte A520M K V2",
        "description": "Entry-level Micro ATX motherboard with AM4 socket and 64GB max memory support.",
        "price": 68.47,
        "stock": 10,
        "imageUrl": "",
        "specs": {
          "socket": "AM4",
          "form_factor": "Micro ATX",
          "max_memory": "64 GB",
          "memory_slots": "2 slots",
          "color": "Brown / Black"
        },
        "categoryId": "9b080981-fe57-4bf3-97e2-93267d901938"
      }
    ]

  });

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