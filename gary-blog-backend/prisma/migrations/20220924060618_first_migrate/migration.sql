-- AlterTable
ALTER TABLE `post` MODIFY `deleteAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `deleteAt` DATETIME(3) NULL;

-- CreateTable
CREATE TABLE `comment` (
    `comment_id` VARCHAR(100) NOT NULL,
    `comment` VARCHAR(500) NOT NULL,
    `createAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updateAt` DATETIME(3) NOT NULL,
    `deleteAt` DATETIME(3) NULL,
    `author_id` VARCHAR(191) NOT NULL,
    `post_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`comment_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `comment` ADD CONSTRAINT `comment_author_id_fkey` FOREIGN KEY (`author_id`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `comment` ADD CONSTRAINT `comment_post_id_fkey` FOREIGN KEY (`post_id`) REFERENCES `post`(`post_id`) ON DELETE CASCADE ON UPDATE CASCADE;
