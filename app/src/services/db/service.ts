import { prisma } from './client';

class _dbService {
  fetchAllUsers = async() => await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  })
}

export const DbService = new _dbService();
