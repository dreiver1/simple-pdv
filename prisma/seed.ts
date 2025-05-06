import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Cria o papel "Admin" se não existir
  const adminRole = await prisma.role.upsert({
    where: { name: 'Admin' },
    update: {},
    create: {
      name: 'Admin',
    },
  });

  // Cria permissões básicas se não existirem
  const permissions = ['CREATE_USER', 'DELETE_USER', 'UPDATE_USER', 'VIEW_USER'];
  for (const permissionName of permissions) {
    await prisma.permission.upsert({
      where: { name: permissionName },
      update: {},
      create: { name: permissionName },
    });
  }

  // Relaciona permissões ao papel "Admin"
  const allPermissions = await prisma.permission.findMany();
for (const permission of allPermissions) {
  await prisma.rolePermission.upsert({
    where: {
      roleId_permissionId: {
        roleId: adminRole.id,
        permissionId: permission.id,
      },
    },
    update: {},
    create: {
      roleId: adminRole.id,
      permissionId: permission.id,
    },
  });
}

  // Cria o usuário administrador se não existir
  const hashedPassword = bcrypt.hashSync('admin123', 10);
  await prisma.user.upsert({
    where: { userName: 'admin' },
    update: {},
    create: {
      name: 'Administrator',
      email: 'admin@example.com',
      password: hashedPassword,
      userName: 'admin',
      cpf: '00000000000',
      data: '1990-01-01',
      roleId: adminRole.id,
    },
  });

  console.log('Usuário administrador criado com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });