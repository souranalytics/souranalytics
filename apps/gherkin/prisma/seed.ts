import { PrismaClient } from '@prisma/gherkin'

const prisma = new PrismaClient()

const main = async () => {
  await prisma.pricing.create({
    data: {
      collaborators: 3,
      events: 10,
      id: 'free',
      name: 'Free',
      plans: 10,
      price: 0,
      properties: 10,
      views: 10,
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
