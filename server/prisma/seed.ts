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
        description: "Blazing 8-core Zen 5 CPU with Radeon graphics for extreme performance.",
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
        description: "8-core Zen 4 powerhouse with high boost clocks for gaming and multitask.",
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
        description: "Efficient 6-core Zen 4 CPU with high clock speeds for smooth computing.",
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
        description: "Compact 6-core Zen 5 CPU with low TDP and high boost for speed.",
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
        description: "8-core Zen 4 CPU built for high-frequency performance and gaming.",
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
        description: "16-core Zen 5 beast with top boost clocks for intense workloads.",
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
        description: "Affordable 6-core Zen 3 CPU for daily tasks and light gaming.",
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
        description: "8-core Zen 5 CPU with low power draw and strong performance.",
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
        description: "6-core Zen 3 CPU with fast clocks, perfect for mid-range builds.",
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
        description: "6-core Zen 3 CPU balancing efficiency and solid performance.",
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
        name: "Asus PRIME B650-PLUS WIFI",
        description: "ATX AM5 motherboard with Wi-Fi and support for 192GB memory.",
        price: 159.99,
        stock: 10,
        imageUrl: "",
        specs: {
          socket: "AM5",
          form_factor: "ATX",
          max_memory: "192 GB",
          memory_slots: "4 slots",
          color: "Black / Silver"
        },
        categoryId: "9b080981-fe57-4bf3-97e2-93267d901938"
      },
      {
        name: "MSI B650 GAMING PLUS WIFI",
        description: "Gaming ATX motherboard with AM5 socket, Wi-Fi, 192GB RAM support.",
        price: 169.99,
        stock: 10,
        imageUrl: "",
        specs: {
          socket: "AM5",
          form_factor: "ATX",
          max_memory: "192 GB",
          memory_slots: "4 slots",
          color: "Black"
        },
        categoryId: "9b080981-fe57-4bf3-97e2-93267d901938"
      },
      {
        name: "MSI MAG B650 TOMAHAWK WIFI",
        description: "Durable ATX AM5 motherboard with Wi-Fi, supports up to 256GB RAM.",
        price: 189.42,
        stock: 10,
        imageUrl: "",
        specs: {
          socket: "AM5",
          form_factor: "ATX",
          max_memory: "256 GB",
          memory_slots: "4 slots",
          color: "Black"
        },
        categoryId: "9b080981-fe57-4bf3-97e2-93267d901938"
      },
      {
        name: "Gigabyte X870E AORUS ELITE WIFI7",
        description: "Premium ATX AM5 motherboard with Wi-Fi 7 and 256GB max memory.",
        price: 325.31,
        stock: 10,
        imageUrl: "",
        specs: {
          socket: "AM5",
          form_factor: "ATX",
          max_memory: "256 GB",
          memory_slots: "4 slots",
          color: "Black"
        },
        categoryId: "9b080981-fe57-4bf3-97e2-93267d901938"
      },
      {
        name: "Asus PRIME B550M-A WIFI II",
        description: "Micro ATX AM4 motherboard with Wi-Fi, supports up to 128GB RAM.",
        price: 99.99,
        stock: 10,
        imageUrl: "",
        specs: {
          socket: "AM4",
          form_factor: "Micro ATX",
          max_memory: "128 GB",
          memory_slots: "4 slots",
          color: "Blue / Silver"
        },
        categoryId: "9b080981-fe57-4bf3-97e2-93267d901938"
      },
      {
        name: "Gigabyte B650 EAGLE AX",
        description: "ATX AM5 motherboard with high RAM capacity and AX Wi-Fi support.",
        price: 157.99,
        stock: 10,
        imageUrl: "",
        specs: {
          socket: "AM5",
          form_factor: "ATX",
          max_memory: "192 GB",
          memory_slots: "4 slots",
          color: "Gray / Black"
        },
        categoryId: "9b080981-fe57-4bf3-97e2-93267d901938"
      },
      {
        name: "Asus TUF GAMING B850-PLUS WIFI",
        description: "TUF Gaming ATX AM5 motherboard with Wi-Fi and 192GB RAM support.",
        price: 217.99,
        stock: 10,
        imageUrl: "",
        specs: {
          socket: "AM5",
          form_factor: "ATX",
          max_memory: "192 GB",
          memory_slots: "4 slots",
          color: "Black / Silver"
        },
        categoryId: "9b080981-fe57-4bf3-97e2-93267d901938"
      },
      {
        name: "ASRock B650M Pro RS WiFi",
        description: "Micro ATX AM5 motherboard with Wi-Fi, supports up to 256GB RAM.",
        price: 139.99,
        stock: 10,
        imageUrl: "",
        specs: {
          socket: "AM5",
          form_factor: "Micro ATX",
          max_memory: "256 GB",
          memory_slots: "4 slots",
          color: "Black / Silver"
        },
        categoryId: "9b080981-fe57-4bf3-97e2-93267d901938"
      },
      {
        name: "MSI MAG X870 TOMAHAWK WIFI",
        description: "High-end ATX AM5 motherboard with Wi-Fi and 256GB max memory.",
        price: 269.99,
        stock: 10,
        imageUrl: "",
        specs: {
          socket: "AM5",
          form_factor: "ATX",
          max_memory: "256 GB",
          memory_slots: "4 slots",
          color: "Black"
        },
        categoryId: "9b080981-fe57-4bf3-97e2-93267d901938"
      },
      {
        name: "Gigabyte A520M K V2",
        description: "Entry-level Micro ATX AM4 motherboard with 64GB max memory support.",
        price: 68.47,
        stock: 10,
        imageUrl: "",
        specs: {
          socket: "AM4",
          form_factor: "Micro ATX",
          max_memory: "64 GB",
          memory_slots: "2 slots",
          color: "Brown / Black"
        },
        categoryId: "9b080981-fe57-4bf3-97e2-93267d901938"
      }
    ]
  });

  // Memory
  await prisma.product.createMany({
    data: [
      {
        name: "Corsair Vengeance RGB 32 GB",
        description: "",
        price: 94.99,
        stock: 0,
        imageUrl: "",
        specs: {
          speed: "DDR5 6000",
          modules: "2x16GB",
          price_per_gb: 2.968,
          color: "Black",
          first_word_latency: 12,
          cas_latency: 36
        },
        categoryId: "86ff4b9b-8b25-4fa8-8822-c48a9a9fb133"
      },
      {
        name: "G.Skill Flare X5 32 GB",
        description: "",
        price: 89.99,
        stock: 0,
        imageUrl: "",
        specs: {
          speed: "DDR5 6000",
          modules: "2x16GB",
          price_per_gb: 2.812,
          color: "Black",
          first_word_latency: 12,
          cas_latency: 36
        },
        categoryId: "86ff4b9b-8b25-4fa8-8822-c48a9a9fb133"
      },
      {
        name: "Corsair Vengeance LPX 16 GB",
        description: "",
        price: 45.99,
        stock: 0,
        imageUrl: "",
        specs: {
          speed: "DDR4 3200",
          modules: "2x8GB",
          price_per_gb: 2.874,
          color: "Black / Yellow",
          first_word_latency: 10,
          cas_latency: 16
        },
        categoryId: "86ff4b9b-8b25-4fa8-8822-c48a9a9fb133"
      },
      {
        name: "Corsair Vengeance 32 GB",
        description: "",
        price: 129.99,
        stock: 0,
        imageUrl: "",
        specs: {
          speed: "DDR5 6000",
          modules: "2x16GB",
          price_per_gb: 4.062,
          color: "Black / Gray",
          first_word_latency: 10,
          cas_latency: 30
        },
        categoryId: "86ff4b9b-8b25-4fa8-8822-c48a9a9fb133"
      },
      {
        name: "TEAMGROUP T-Create Expert 32 GB",
        description: "",
        price: 98.99,
        stock: 0,
        imageUrl: "",
        specs: {
          speed: "DDR5 6000",
          modules: "2x16GB",
          price_per_gb: 3.093,
          color: "Black",
          first_word_latency: 10,
          cas_latency: 30
        },
        categoryId: "86ff4b9b-8b25-4fa8-8822-c48a9a9fb133"
      },
      {
        name: "Corsair Vengeance LPX 32 GB",
        description: "",
        price: 77.98,
        stock: 0,
        imageUrl: "",
        specs: {
          speed: "DDR4 3600",
          modules: "2x16GB",
          price_per_gb: 2.437,
          color: "Black / Yellow",
          first_word_latency: 10,
          cas_latency: 18
        },
        categoryId: "86ff4b9b-8b25-4fa8-8822-c48a9a9fb133"
      },
      {
        name: "Crucial Pro Overclocking 32 GB",
        description: "",
        price: 84.99,
        stock: 0,
        imageUrl: "",
        specs: {
          speed: "DDR5 6000",
          modules: "2x16GB",
          price_per_gb: 2.656,
          color: "Black",
          first_word_latency: 12,
          cas_latency: 36
        },
        categoryId: "86ff4b9b-8b25-4fa8-8822-c48a9a9fb133"
      },
      {
        name: "G.Skill Trident Z5 RGB 64 GB",
        description: "",
        price: 234.99,
        stock: 0,
        imageUrl: "",
        specs: {
          speed: "DDR5 6400",
          modules: "2x32GB",
          price_per_gb: 3.672,
          color: "Black / Silver",
          first_word_latency: 10,
          cas_latency: 32
        },
        categoryId: "86ff4b9b-8b25-4fa8-8822-c48a9a9fb133"
      },
      {
        name: "Corsair Vengeance RGB 64 GB",
        description: "",
        price: 229.99,
        stock: 0,
        imageUrl: "",
        specs: {
          speed: "DDR5 6000",
          modules: "2x32GB",
          price_per_gb: 3.594,
          color: "Black",
          first_word_latency: 10,
          cas_latency: 30
        },
        categoryId: "86ff4b9b-8b25-4fa8-8822-c48a9a9fb133"
      },
      {
        name: "TEAMGROUP T-Force Delta RGB 32 GB",
        description: "",
        price: 105.99,
        stock: 0,
        imageUrl: "",
        specs: {
          speed: "DDR5 6000",
          modules: "2x16GB",
          price_per_gb: 3.312,
          color: "White",
          first_word_latency: 10,
          cas_latency: 30
        },
        categoryId: "86ff4b9b-8b25-4fa8-8822-c48a9a9fb133"
      }
    ]
  });

  // Power Supplies
  await prisma.product.createMany({
    data: [
      {
        name: "MSI MAG A750GL PCIE5",
        description: "ATX 750W PSU, gold efficiency, full modular, black.",
        price: 109.99,
        stock: 0,
        imageUrl: "",
        specs: {
          type: "ATX",
          efficiency: "gold",
          wattage: "750W",
          modular: "Full",
          color: "Black"
        },
        categoryId: "83db0f42-36dd-43a5-920c-bdb476b3459f"
      },
      {
        name: "MSI MAG A850GL PCIE5",
        description: "ATX 850W PSU, gold efficiency, full modular, black.",
        price: 121.99,
        stock: 0,
        imageUrl: "",
        specs: {
          type: "ATX",
          efficiency: "gold",
          wattage: "850W",
          modular: "Full",
          color: "Black"
        },
        categoryId: "83db0f42-36dd-43a5-920c-bdb476b3459f"
      },
      {
        name: "MSI MAG A650BN",
        description: "ATX 650W PSU, bronze efficiency, non-modular, black.",
        price: 74.98,
        stock: 0,
        imageUrl: "",
        specs: {
          type: "ATX",
          efficiency: "bronze",
          wattage: "650W",
          modular: "Non-modular",
          color: "Black"
        },
        categoryId: "83db0f42-36dd-43a5-920c-bdb476b3459f"
      },
      {
        name: "Corsair RM1000e (2023)",
        description: "ATX 1000W PSU, gold efficiency, full modular, black.",
        price: 179.99,
        stock: 0,
        imageUrl: "",
        specs: {
          type: "ATX",
          efficiency: "gold",
          wattage: "1000W",
          modular: "Full",
          color: "Black"
        },
        categoryId: "83db0f42-36dd-43a5-920c-bdb476b3459f"
      },
      {
        name: "Corsair RM750e (2025)",
        description: "ATX 750W PSU, full modular, black, efficiency unknown.",
        price: 99.99,
        stock: 0,
        imageUrl: "",
        specs: {
          type: "ATX",
          efficiency: "Unknown",
          wattage: "750W",
          modular: "Full",
          color: "Black"
        },
        categoryId: "83db0f42-36dd-43a5-920c-bdb476b3459f"
      },
      {
        name: "Corsair RM850e (2025)",
        description: "ATX 850W PSU, full modular, black, efficiency unknown.",
        price: 119.99,
        stock: 0,
        imageUrl: "",
        specs: {
          type: "ATX",
          efficiency: "Unknown",
          wattage: "850W",
          modular: "Full",
          color: "Black"
        },
        categoryId: "83db0f42-36dd-43a5-920c-bdb476b3459f"
      },
      {
        name: "MSI MAG A550BN",
        description: "ATX 550W PSU, bronze efficiency, non-modular, black.",
        price: 54.99,
        stock: 0,
        imageUrl: "",
        specs: {
          type: "ATX",
          efficiency: "bronze",
          wattage: "550W",
          modular: "Non-modular",
          color: "Black"
        },
        categoryId: "83db0f42-36dd-43a5-920c-bdb476b3459f"
      },
      {
        name: "Corsair RM850x (2024)",
        description: "ATX 850W PSU, full modular, black, efficiency unknown.",
        price: 144.99,
        stock: 0,
        imageUrl: "",
        specs: {
          type: "ATX",
          efficiency: "Unknown",
          wattage: "850W",
          modular: "Full",
          color: "Black"
        },
        categoryId: "83db0f42-36dd-43a5-920c-bdb476b3459f"
      },
      {
        name: "Corsair SF1000 (2024)",
        description: "SFX 1000W PSU, platinum efficiency, full modular, black.",
        price: 239.99,
        stock: 0,
        imageUrl: "",
        specs: {
          type: "SFX",
          efficiency: "platinum",
          wattage: "1000W",
          modular: "Full",
          color: "Black"
        },
        categoryId: "83db0f42-36dd-43a5-920c-bdb476b3459f"
      },
      {
        name: "MSI MAG A650GL",
        description: "ATX 650W PSU, gold efficiency, full modular, black.",
        price: 129.94,
        stock: 0,
        imageUrl: "",
        specs: {
          type: "ATX",
          efficiency: "gold",
          wattage: "650W",
          modular: "Full",
          color: "Black"
        },
        categoryId: "83db0f42-36dd-43a5-920c-bdb476b3459f"
      }
    ]
  });

  // Storage
  await prisma.product.createMany({
    data: [
      {
        name: "Samsung 990 Pro",
        description: "SSD 2000GB, M.2 PCIe 4.0, 2048MB cache, 0.075$/GB.",
        price: 149.99,
        stock: 0,
        imageUrl: "",
        specs: {
          capacity: "2000 GB",
          price_per_gb: "0.075 $/GB",
          type: "SSD",
          cache: "2048 MB",
          form_factor: "M.2-2280",
          interface: "M.2 PCIe 4.0 X4"
        },
        categoryId: "218fc3ff-4ef6-493b-af44-6c5a8b344642"
      },
      {
        name: "Crucial P3 Plus",
        description: "SSD 1000GB, M.2 PCIe 4.0, no cache, 0.057$/GB.",
        price: 56.95,
        stock: 0,
        imageUrl: "",
        specs: {
          capacity: "1000 GB",
          price_per_gb: "0.057 $/GB",
          type: "SSD",
          cache: "None",
          form_factor: "M.2-2280",
          interface: "M.2 PCIe 4.0 X4"
        },
        categoryId: "218fc3ff-4ef6-493b-af44-6c5a8b344642"
      },
      {
        name: "Crucial P3 Plus",
        description: "SSD 2000GB, M.2 PCIe 4.0, no cache, 0.057$/GB.",
        price: 113.95,
        stock: 0,
        imageUrl: "",
        specs: {
          capacity: "2000 GB",
          price_per_gb: "0.057 $/GB",
          type: "SSD",
          cache: "None",
          form_factor: "M.2-2280",
          interface: "M.2 PCIe 4.0 X4"
        },
        categoryId: "218fc3ff-4ef6-493b-af44-6c5a8b344642"
      },
      {
        name: "Samsung 990 Pro",
        description: "SSD 4000GB, M.2 PCIe 4.0, 4096MB cache, 0.075$/GB.",
        price: 299.99,
        stock: 0,
        imageUrl: "",
        specs: {
          capacity: "4000 GB",
          price_per_gb: "0.075 $/GB",
          type: "SSD", cache: "4096 MB",
          form_factor: "M.2-2280",
          interface: "M.2 PCIe 4.0 X4"
        },
        categoryId: "218fc3ff-4ef6-493b-af44-6c5a8b344642"
      },
      {
        name: "Kingston NV3",
        description: "SSD 1000GB, M.2 PCIe 4.0, no cache, 0.058$/GB.",
        price: 58,
        stock: 0,
        imageUrl: "",
        specs: {
          capacity: "1000 GB",
          price_per_gb: "0.058 $/GB",
          type: "SSD",
          cache: "None",
          form_factor: "M.2-2280",
          interface: "M.2 PCIe 4.0 X4"
        },
        categoryId: "218fc3ff-4ef6-493b-af44-6c5a8b344642"
      },
      {
        name: "Samsung 990 Pro",
        description: "SSD 1000GB, M.2 PCIe 4.0, 1024MB cache, 0.1$/GB.",
        price: 99.99,
        stock: 0,
        imageUrl: "",
        specs: {
          capacity: "1000 GB",
          price_per_gb: "0.1 $/GB",
          type: "SSD",
          cache: "1024 MB",
          form_factor: "M.2-2280",
          interface: "M.2 PCIe 4.0 X4"
        },
        categoryId: "218fc3ff-4ef6-493b-af44-6c5a8b344642"
      },
      {
        name: "Samsung 990 EVO Plus",
        description: "SSD 2000GB, M.2 PCIe 5.0 X2, no cache, 0.065$/GB.",
        price: 129.99,
        stock: 0,
        imageUrl: "",
        specs: {
          capacity: "2000 GB",
          price_per_gb: "0.065 $/GB",
          type: "SSD",
          cache: "None",
          form_factor: "M.2-2280",
          interface: "M.2 PCIe 5.0 X2"
        },
        categoryId: "218fc3ff-4ef6-493b-af44-6c5a8b344642"
      },
      {
        name: "Western Digital WD_Black SN850X",
        description: "SSD 2000GB, M.2 PCIe 4.0, no cache, 0.077$/GB.",
        price: 154.54,
        stock: 0,
        imageUrl: "",
        specs: {
          capacity: "2000 GB",
          price_per_gb: "0.077 $/GB",
          type: "SSD",
          cache: "None",
          form_factor: "M.2-2280",
          interface: "M.2 PCIe 4.0 X4"
        },
        categoryId: "218fc3ff-4ef6-493b-af44-6c5a8b344642"
      },
      {
        name: "Silicon Power UD90",
        description: "SSD 2000GB, M.2 PCIe 4.0, no cache, 0.046$/GB.",
        price: 92.97,
        stock: 0,
        imageUrl: "",
        specs: {
          capacity: "2000 GB",
          price_per_gb: "0.046 $/GB",
          type: "SSD",
          cache: "None",
          form_factor: "M.2-2280",
          interface: "M.2 PCIe 4.0 X4"
        },
        categoryId: "218fc3ff-4ef6-493b-af44-6c5a8b344642"
      },
      {
        name: "Samsung 9100 PRO",
        description: "SSD 4000GB, M.2 PCIe 5.0 X4, 4096MB cache, 0.107$/GB.",
        price: 429.99,
        stock: 0,
        imageUrl: "",
        specs: {
          capacity: "4000 GB",
          price_per_gb: "0.107 $/GB",
          type: "SSD",
          cache: "4096 MB",
          form_factor: "M.2-2280",
          interface: "M.2 PCIe 5.0 X4"
        },
        categoryId: "218fc3ff-4ef6-493b-af44-6c5a8b344642"
      }
    ]
  });

  // Graphics Cards
  await prisma.product.createMany({
    data: [
      {
        name: "MSI GeForce RTX 3060 Ventus 2X 12G",
        description: "Compact and powerful MSI RTX 3060 Ventus 2X with 12GB memory. Perfect for gamers seeking smooth 1080p and 1440p performance in a sleek black design.",
        price: 299.97,
        stock: 0,
        imageUrl: "",
        specs: {
          chipset: "GeForce RTX 3060 12GB",
          memory: "12 GB",
          core_clock: "1320 MHz",
          boost_clock: "1777 MHz",
          color: "Black",
          length: "235 mm"
        },
        categoryId: "53c2b7e2-9795-4dfa-b765-7868420240e5"
      },
      {
        name: "Sapphire PULSE",
        description: "High-performance Sapphire PULSE Radeon RX 9060 XT with 16GB memory. Ideal for smooth gaming at high settings with efficient cooling and black aesthetics.",
        price: 379.99,
        stock: 0,
        imageUrl: "",
        specs: {
          chipset: "Radeon RX 9060 XT",
          memory: "16 GB",
          core_clock: "2220 MHz",
          boost_clock: "3290 MHz",
          color: "Black",
          length: "240 mm"
        },
        categoryId: "53c2b7e2-9795-4dfa-b765-7868420240e5"
      },
      {
        name: "MSI SHADOW 3X OC",
        description: "MSI SHADOW 3X OC with 16GB memory offers extreme graphics performance for enthusiasts. Designed for demanding gaming and professional workloads.",
        price: 829.99,
        stock: 0,
        imageUrl: "",
        specs: {
          chipset: "GeForce RTX 5070 Ti",
          memory: "16 GB",
          core_clock: "2300 MHz",
          boost_clock: "2497 MHz",
          color: "Black",
          length: "303 mm"
        },
        categoryId: "53c2b7e2-9795-4dfa-b765-7868420240e5"
      },
      {
        name: "Gigabyte WINDFORCE OC SFF",
        description: "Gigabyte WINDFORCE OC SFF delivers 12GB of memory and solid performance in a compact form. Perfect for smaller builds without compromising power.",
        price: 549.99,
        stock: 0,
        imageUrl: "",
        specs: {
          chipset: "GeForce RTX 5070",
          memory: "12 GB",
          core_clock: "2160 MHz",
          boost_clock: "2542 MHz",
          color: "Black",
          length: "282 mm"
        },
        categoryId: "53c2b7e2-9795-4dfa-b765-7868420240e5"
      },
      {
        name: "Sapphire PULSE",
        description: "Sapphire PULSE Radeon RX 9070 XT with 16GB memory ensures smooth 4K gaming with efficient cooling and reliability. Sleek black design for modern setups.",
        price: 749.99,
        stock: 0,
        imageUrl: "",
        specs: {
          chipset: "Radeon RX 9070 XT",
          memory: "16 GB",
          core_clock: "2400 MHz",
          boost_clock: "2970 MHz",
          color: "Black",
          length: "320 mm"
        },
        categoryId: "53c2b7e2-9795-4dfa-b765-7868420240e5"
      },
      {
        name: "ASRock Challenger OC",
        description: "ASRock Challenger OC Radeon RX 9060 XT with 16GB memory. Offers strong performance for gaming at high settings with a stylish Black/Silver finish.",
        price: 369.99,
        stock: 0,
        imageUrl: "",
        specs: {
          chipset: "Radeon RX 9060 XT",
          memory: "16 GB",
          core_clock: "2220 MHz",
          boost_clock: "3290 MHz",
          color: "Black / Silver",
          length: "249 mm"
        },
        categoryId: "53c2b7e2-9795-4dfa-b765-7868420240e5"
      },
      {
        name: "Gigabyte GAMING OC",
        description: "Gigabyte GAMING OC Radeon RX 9070 XT with 16GB memory. Built for high-end gaming and content creation with powerful clocks and stable performance.",
        price: 729.99,
        stock: 0,
        imageUrl: "",
        specs: {
          chipset: "Radeon RX 9070 XT",
          memory: "16 GB",
          core_clock: "2520 MHz",
          boost_clock: "3060 MHz",
          color: "Black",
          length: "288 mm"
        },
        categoryId: "53c2b7e2-9795-4dfa-b765-7868420240e5"
      },
      {
        name: "Gigabyte GAMING OC",
        description: "Gigabyte GAMING OC Radeon RX 7600 XT with 16GB memory. Perfect for modern AAA titles with a stylish Black/Gray design and strong boost clocks.",
        price: 359.97,
        stock: 0,
        imageUrl: "",
        specs: {
          chipset: "Radeon RX 7600 XT",
          memory: "16 GB",
          core_clock: "1720 MHz",
          boost_clock: "2810 MHz",
          color: "Black / Gray",
          length: "281 mm"
        },
        categoryId: "53c2b7e2-9795-4dfa-b765-7868420240e5"
      },
      {
        name: "Asus ROG Astral OC",
        description: "Asus ROG Astral OC with 32GB memory delivers extreme performance for enthusiasts and professionals. Perfect for 4K gaming and rendering with a premium Black/Silver design.",
        price: 3359.99,
        stock: 0,
        imageUrl: "",
        specs: {
          chipset: "GeForce RTX 5090",
          memory: "32 GB",
          core_clock: "2010 MHz",
          boost_clock: "2610 MHz",
          color: "Black / Silver",
          length: "358 mm"
        },
        categoryId: "53c2b7e2-9795-4dfa-b765-7868420240e5"
      },
      {
        name: "ASRock Challenger D",
        description: "ASRock Challenger D Radeon RX 6600 with 8GB memory. Compact and efficient card for smooth gaming and multimedia tasks in a sleek black finish.",
        price: 219.99,
        stock: 0,
        imageUrl: "",
        specs: {
          chipset: "Radeon RX 6600",
          memory: "8 GB",
          core_clock: "1626 MHz",
          boost_clock: "None",
          color: "Black",
          length: "269 mm"
        },
        categoryId: "53c2b7e2-9795-4dfa-b765-7868420240e5"
      }
    ]
  });

  // Coolers
  await prisma.product.createMany({
    data: [
      {
        name: "Thermalright Peerless Assassin 120 SE",
        description: "Thermalright Peerless Assassin 120 SE air cooler, 1550 RPM, 25.6 dB noise level, black/silver color.",
        price: 34.9,
        stock: 0,
        imageUrl: "",
        specs: {
          rpm: "1550 RPM",
          noise_level: "25.6 dB",
          color: "Black / Silver",
          size: "Unknown"
        },
        categoryId: "8200571b-0c15-44d4-b7c1-0801d2ecdaac"
      },
      {
        name: "ARCTIC Liquid Freezer III Pro 360",
        description: "ARCTIC Liquid Freezer III Pro 360 liquid cooler, 600-3000 RPM, black color, 360 mm radiator.",
        price: 84.99,
        stock: 0,
        imageUrl: "",
        specs: {
          rpm: "600-3000 RPM",
          noise_level: "Unknown",
          color: "Black",
          size: "360 mm"
        },
        categoryId: "8200571b-0c15-44d4-b7c1-0801d2ecdaac"
      },
      {
        name: "Cooler Master Hyper 212 Black Edition",
        description: "Cooler Master Hyper 212 Black Edition air cooler, 650-2000 RPM, 6.5-26 dB noise level, black color.",
        price: 25.99,
        stock: 0,
        imageUrl: "",
        specs: {
          rpm: "650-2000 RPM",
          noise_level: "6.5-26 dB",
          color: "Black",
          size: "Unknown"
        },
        categoryId: "8200571b-0c15-44d4-b7c1-0801d2ecdaac"
      },
      {
        name: "Thermalright Phantom Spirit 120 SE ARGB",
        description: "Thermalright Phantom Spirit 120 SE ARGB air cooler, 1500 RPM, 25.6 dB noise level, black/silver color.",
        price: 37.9,
        stock: 0,
        imageUrl: "",
        specs: {
          rpm: "1500 RPM",
          noise_level: "25.6 dB",
          color: "Black / Silver",
          size: "Unknown"
        },
        categoryId: "8200571b-0c15-44d4-b7c1-0801d2ecdaac"
      },
      {
        name: "Thermalright Aqua Elite V3",
        description: "Thermalright Aqua Elite V3 liquid cooler, 1500 RPM, 25.6 dB noise level, black color, 360 mm radiator.",
        price: 54.9,
        stock: 0,
        imageUrl: "",
        specs: {
          rpm: "1500 RPM",
          noise_level: "25.6 dB",
          color: "Black",
          size: "360 mm"
        },
        categoryId: "8200571b-0c15-44d4-b7c1-0801d2ecdaac"
      },
      {
        name: "Noctua NH-D15 chromax.black",
        description: "Noctua NH-D15 chromax.black air cooler, 300-1500 RPM, 19.2-24.6 dB noise level, black color.",
        price: 139.94,
        stock: 0,
        imageUrl: "",
        specs: {
          rpm: "300-1500 RPM",
          noise_level: "19.2-24.6 dB",
          color: "Black",
          size: "Unknown"
        },
        categoryId: "8200571b-0c15-44d4-b7c1-0801d2ecdaac"
      },
      {
        name: "NZXT Kraken 360",
        description: "NZXT Kraken 360 liquid cooler, 500-1800 RPM, 17.9-30.6 dB noise level, black color, 360 mm radiator.",
        price: 179.99,
        stock: 0,
        imageUrl: "",
        specs: {
          rpm: "500-1800 RPM",
          noise_level: "17.9-30.6 dB",
          color: "Black",
          size: "360 mm"
        },
        categoryId: "8200571b-0c15-44d4-b7c1-0801d2ecdaac"
      },
      {
        name: "Corsair NAUTILUS 360 RS ARGB",
        description: "Corsair NAUTILUS 360 RS ARGB liquid cooler, 2100 RPM, 34 dB noise level, black color, 360 mm radiator.",
        price: 129.99,
        stock: 0,
        imageUrl: "",
        specs: {
          rpm: "2100 RPM",
          noise_level: "34 dB",
          color: "Black",
          size: "360 mm"
        },
        categoryId: "8200571b-0c15-44d4-b7c1-0801d2ecdaac"
      },
      {
        name: "ARCTIC Liquid Freezer III 360 A-RGB",
        description: "ARCTIC Liquid Freezer III 360 A-RGB liquid cooler, 200-2000 RPM, black color, 360 mm radiator.",
        price: 159.99,
        stock: 0,
        imageUrl: "",
        specs: {
          rpm: "200-2000 RPM",
          noise_level: "Unknown",
          color: "Black",
          size: "360 mm"
        },
        categoryId: "8200571b-0c15-44d4-b7c1-0801d2ecdaac"
      },
      {
        name: "Thermalright Assassin X 120 Refined SE",
        description: "Thermalright Assassin X 120 Refined SE air cooler, 1550 RPM, 25.6 dB noise level, black/silver color.",
        price: 17.89,
        stock: 0,
        imageUrl: "",
        specs: {
          rpm: "1550 RPM",
          noise_level: "25.6 dB",
          color: "Black / Silver",
          size: "Unknown"
        },
        categoryId: "8200571b-0c15-44d4-b7c1-0801d2ecdaac"
      }
    ]
  });

  // Cases
  await prisma.product.createMany({
    data: [
      {
        name: "Montech XR",
        description: "Montech XR Mid Tower: sleek black design with tempered glass side panel, offering 45L volume and room for 2x 3.5\" drives. Ideal for stylish, compact ATX builds.",
        price: 83.59,
        stock: 0,
        imageUrl: "",
        specs: {
          type: "ATX Mid Tower",
          color: "Black",
          psu: "None",
          side_panel: "Tempered Glass",
          external_volume: "45 L",
          internal_35_bays: 2
        },
        categoryId: "871bac22-c9be-4bd3-a33b-b6d8d511b0ad"
      },
      {
        name: "Phanteks XT PRO",
        description: "Phanteks XT PRO offers a robust ATX Mid Tower experience with tempered glass side, 51.8L volume, and dual 3.5\" bays. Perfect for airflow-focused builds in sleek black.",
        price: 67.98,
        stock: 0,
        imageUrl: "",
        specs: {
          type: "ATX Mid Tower",
          color: "Black",
          psu: "None",
          side_panel: "Tempered Glass",
          external_volume: "51.8 L",
          internal_35_bays: 2
        },
        categoryId: "871bac22-c9be-4bd3-a33b-b6d8d511b0ad"
      },
      {
        name: "NZXT H5 Flow (2024)",
        description: "NZXT H5 Flow combines a compact 45L ATX Mid Tower with a sleek black tempered glass panel. Great for streamlined, modern builds with 1x 3.5\" drive support.",
        price: 84.99,
        stock: 0,
        imageUrl: "",
        specs: {
          type: "ATX Mid Tower",
          color: "Black",
          psu: "None",
          side_panel: "Tempered Glass",
          external_volume: "45 L",
          internal_35_bays: 1
        },
        categoryId: "871bac22-c9be-4bd3-a33b-b6d8d511b0ad"
      },
      {
        name: "Corsair 3500X ARGB",
        description: "Corsair 3500X ARGB in white: 55.9L ATX Mid Tower with tempered glass side panel, dual 3.5\" bays, and vibrant ARGB accents for stylish, high-performance setups.",
        price: 115.99,
        stock: 0,
        imageUrl: "",
        specs: {
          type: "ATX Mid Tower",
          color: "White",
          psu: "None",
          side_panel: "Tempered Glass",
          external_volume: "55.9 L",
          internal_35_bays: 2
        },
        categoryId: "871bac22-c9be-4bd3-a33b-b6d8d511b0ad"
      },
      {
        name: "Cooler Master MasterBox Q300L",
        description: "Cooler Master Q300L: compact 33.6L MicroATX Mini Tower with acrylic side panel. Perfect for budget builds that want a modern look in a small footprint.",
        price: 45.98,
        stock: 0,
        imageUrl: "",
        specs: {
          type: "MicroATX Mini Tower",
          color: "Black",
          psu: "None",
          side_panel: "Acrylic",
          external_volume: "33.6 L",
          internal_35_bays: 1
        },
        categoryId: "871bac22-c9be-4bd3-a33b-b6d8d511b0ad"
      },
      {
        name: "Corsair 4000D Airflow",
        description: "Corsair 4000D Airflow: black ATX Mid Tower with tinted tempered glass panel, optimized airflow, 48.6L volume, and space for 2x 3.5\" drives. Ideal for performance builds.",
        price: 94.99,
        stock: 0,
        imageUrl: "",
        specs: {
          type: "ATX Mid Tower",
          color: "Black",
          psu: "None",
          side_panel: "Tinted Tempered Glass",
          external_volume: "48.6 L",
          internal_35_bays: 2
        },
        categoryId: "871bac22-c9be-4bd3-a33b-b6d8d511b0ad"
      }
    ]
  });

  // Case Fans
  await prisma.product.createMany({
    data: [
      {
        name: "Lian Li Uni Fan SL-Infinity 3-Pack",
        description: "Unleash a stunning light show with Lian Li Uni Fan SL-Infinity 3-Pack in sleek black. Designed for 120mm mounts, these fans deliver up to 61.3 CFM airflow with whisper-quiet operation thanks to PWM control.",
        price: 89.99,
        stock: 0,
        imageUrl: "",
        specs: {
          size: "120mm",
          color: "Black",
          rpm: "Variable",
          airflow: "0–61.3 CFM",
          noise_level: "0–29 dBA",
          pwm: true
        },
        categoryId: "952948b4-e9c0-46be-82af-4da78a9ae56e"
      },
      {
        name: "Noctua NF-A12x25 PWM chromax.black.swap",
        description: "The Noctua NF-A12x25 PWM in chromax.black.swap combines 120mm high-performance airflow with ultra-quiet operation. Perfect for builders who want efficiency and a stealthy look.",
        price: 37.95,
        stock: 0,
        imageUrl: "",
        specs: {
          size: "120mm",
          color: "Black",
          rpm: "450–2000",
          airflow: "60.09 CFM",
          noise_level: "22.6 dBA",
          pwm: true
        },
        categoryId: "952948b4-e9c0-46be-82af-4da78a9ae56e"
      },
      {
        name: "Lian Li Uni Fan SL-Infinity 3-Pack",
        description: "Brighten your build with Lian Li Uni Fan SL-Infinity 3-Pack in white. 120mm PWM fans deliver a smooth light display with airflow up to 61.3 CFM, keeping your rig cool and stylish.",
        price: 87.99,
        stock: 0,
        imageUrl: "",
        specs: {
          size: "120mm",
          color: "White",
          rpm: "Variable",
          airflow: "0–61.3 CFM",
          noise_level: "0–29 dBA",
          pwm: true
        },
        categoryId: "952948b4-e9c0-46be-82af-4da78a9ae56e"
      },
      {
        name: "Thermalright TL-C12C-S X3 3-Pack",
        description: "Thermalright TL-C12C-S X3 delivers reliable 120mm cooling with 1550 RPM and 66.17 CFM airflow. These black PWM fans provide balanced performance and quiet operation for any build.",
        price: 13.59,
        stock: 0,
        imageUrl: "",
        specs: {
          size: "120mm",
          color: "Black",
          rpm: "1550",
          airflow: "66.17 CFM",
          noise_level: "25.6 dBA",
          pwm: true
        },
        categoryId: "952948b4-e9c0-46be-82af-4da78a9ae56e"
      },
      {
        name: "ARCTIC P12 PWM PST",
        description: "ARCTIC P12 PWM PST offers high static pressure and excellent airflow in a 120mm form factor. Black fans with PWM support, perfect for radiators and high-density heatsinks.",
        price: 9.99,
        stock: 0,
        imageUrl: "",
        specs: {
          size: "120mm",
          color: "Black",
          rpm: "200–1800",
          airflow: "56.3 CFM",
          noise_level: "Variable",
          pwm: true
        },
        categoryId: "952948b4-e9c0-46be-82af-4da78a9ae56e"
      },
      {
        name: "Corsair RS120 ARGB 3-Pack",
        description: "Corsair RS120 ARGB 3-Pack combines 120mm cooling with vibrant RGB lighting. PWM control allows precise speed adjustments while airflow ranges from 13.3 to 72.8 CFM for optimal performance.",
        price: 47.99,
        stock: 0,
        imageUrl: "",
        specs: {
          size: "120mm",
          color: "Black",
          rpm: "420–2100",
          airflow: "13.3–72.8 CFM",
          noise_level: "10–36 dBA",
          pwm: true
        },
        categoryId: "952948b4-e9c0-46be-82af-4da78a9ae56e"
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