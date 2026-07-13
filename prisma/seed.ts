import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const company = await prisma.company.upsert({
    where: { code: "DEMO" },
    update: {},
    create: { name: "Demo Distribution Iraq", code: "DEMO", currency: "USD" },
  });

  await prisma.user.upsert({
    where: { email: "admin@nexus.local" },
    update: {},
    create: { companyId: company.id, name: "Demo Administrator", email: "admin@nexus.local", role: UserRole.ADMIN },
  });

  const [brand, category, warehouse, supplier] = await Promise.all([
    prisma.brand.upsert({ where: { name: "Apple" }, update: {}, create: { name: "Apple" } }),
    prisma.category.upsert({ where: { code: "IPHONE" }, update: {}, create: { name: "Smartphones", code: "IPHONE" } }),
    prisma.warehouse.upsert({ where: { companyId_code: { companyId: company.id, code: "BGD-MAIN" } }, update: {}, create: { companyId: company.id, name: "Baghdad Main Warehouse", code: "BGD-MAIN", city: "Baghdad" } }),
    prisma.supplier.upsert({ where: { companyId_code: { companyId: company.id, code: "SUP-001" } }, update: {}, create: { companyId: company.id, name: "Regional Technology Supplier", code: "SUP-001", country: "UAE", leadTimeDays: 30 } }),
  ]);

  const products = [
    ["iPhone 16 Pro 256GB", "IP16P-256", 920, 1099, 180, 70],
    ["iPhone 16 128GB", "IP16-128", 690, 829, 240, 90],
    ["iPhone 16 Pro Max 512GB", "IP16PM-512", 1180, 1399, 95, 45],
  ] as const;

  for (const [name, sku, cost, price, stock, reorder] of products) {
    const product = await prisma.product.upsert({
      where: { companyId_sku: { companyId: company.id, sku } },
      update: {},
      create: { companyId: company.id, brandId: brand.id, categoryId: category.id, name, sku, baseCost: cost, sellingPrice: price, leadTimeDays: 30, minimumOrderQuantity: 10, safetyStock: 30, reorderPoint: reorder },
    });
    await prisma.inventoryBalance.upsert({
      where: { warehouseId_productId: { warehouseId: warehouse.id, productId: product.id } },
      update: {},
      create: { warehouseId: warehouse.id, productId: product.id, onHand: stock, reserved: Math.floor(stock * 0.08), inTransit: Math.floor(stock * 0.25) },
    });
  }

  console.log(`Seeded ${company.name} with supplier ${supplier.name}`);
}

main().finally(() => prisma.$disconnect());
