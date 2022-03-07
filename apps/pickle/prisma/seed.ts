import { PrismaClient } from '@prisma/pickle'

const prisma = new PrismaClient()

const main = async () => {
  await prisma.pricing.create({
    data: {
      collaborators: 10,
      events: 10_000,
      id: 'free',
      name: 'Free',
      price: 0,
      users: 1_000,
      views: 10_000,
      visible: true
    }
  })
}

main()
  .catch((error) => {
    console.error(error)

    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
