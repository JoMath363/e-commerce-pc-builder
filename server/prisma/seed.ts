/* ts-node prisma/seeds/product.seed.ts*/

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
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
        "categoryId": "ad1661fe-4889-4e84-a3a3-9812bb26e221"
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
        "categoryId": "ad1661fe-4889-4e84-a3a3-9812bb26e221"
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
        "categoryId": "ad1661fe-4889-4e84-a3a3-9812bb26e221"
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
        "categoryId": "ad1661fe-4889-4e84-a3a3-9812bb26e221"
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
        "categoryId": "ad1661fe-4889-4e84-a3a3-9812bb26e221"
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
        "categoryId": "ad1661fe-4889-4e84-a3a3-9812bb26e221"
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
        "categoryId": "ad1661fe-4889-4e84-a3a3-9812bb26e221"
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
        "categoryId": "ad1661fe-4889-4e84-a3a3-9812bb26e221"
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
        "categoryId": "ad1661fe-4889-4e84-a3a3-9812bb26e221"
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
        "categoryId": "ad1661fe-4889-4e84-a3a3-9812bb26e221"
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