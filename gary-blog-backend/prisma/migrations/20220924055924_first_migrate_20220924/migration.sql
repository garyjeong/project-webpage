-- CreateTable
CREATE TABLE `user` (
    `id` VARCHAR(100) NOT NULL,
    `useremail` VARCHAR(100) NOT NULL,
    `username` VARCHAR(30) NOT NULL,
    `password` VARCHAR(100) NULL,
    `createAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updateAt` DATETIME(3) NOT NULL,
    `deleteAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `user_useremail_key`(`useremail`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_sns` (
    `seq` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` VARCHAR(191) NOT NULL,
    `sns_id` VARCHAR(20) NOT NULL,
    `sns_type` ENUM('KAKAO', 'NAVER', 'GOOGLE') NOT NULL,

    UNIQUE INDEX `user_sns_sns_id_key`(`sns_id`),
    PRIMARY KEY (`seq`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `post` (
    `post_id` VARCHAR(100) NOT NULL,
    `title` VARCHAR(500) NOT NULL,
    `thumbnail` TEXT NOT NULL,
    `content` VARCHAR(2000) NOT NULL,
    `createAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updateAt` DATETIME(3) NOT NULL,
    `deleteAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `author_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`post_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `post` ADD CONSTRAINT `post_author_id_fkey` FOREIGN KEY (`author_id`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
