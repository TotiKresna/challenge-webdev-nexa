import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.coffee.createMany({
    data: [
      {
        name: 'Espresso',
        price: 15,
        imageUrl: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        name: 'Cappuccino',
        price: 25,
        imageUrl: 'https://images.unsplash.com/photo-1557006021-b85faa2bc5e2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        name: 'Latte',
        price: 30,
        imageUrl: 'https://images.unsplash.com/photo-1593443320739-77f74939d0da?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {   
        name: 'Americano',
        price: 22,
        imageUrl: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        name: 'Mocha',
        price: 28,
        imageUrl: 'https://images.unsplash.com/photo-1619286310410-a95de97b0aec?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
  });
  console.log('Seeding selesai!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });