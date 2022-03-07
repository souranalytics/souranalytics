import { PrismaClient } from '@prisma/sour-analytics'

const prisma = new PrismaClient()

const main = async () => {
  //
}

main()
  .catch((error) => {
    console.error(error)

    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
