-- CreateTable
CREATE TABLE `products` (
    `id` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `price` INTEGER NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `amount` INTEGER NOT NULL,

    UNIQUE INDEX `products_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `stock` (
    `id` INTEGER NOT NULL,
    `amount` INTEGER NOT NULL,

    UNIQUE INDEX `stock_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
