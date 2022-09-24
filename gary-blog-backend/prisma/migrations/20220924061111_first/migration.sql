/*
  Warnings:

  - A unique constraint covering the columns `[comment_id]` on the table `comment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[post_id]` on the table `post` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id]` on the table `user_sns` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `comment_comment_id_key` ON `comment`(`comment_id`);

-- CreateIndex
CREATE UNIQUE INDEX `post_post_id_key` ON `post`(`post_id`);

-- CreateIndex
CREATE UNIQUE INDEX `user_id_key` ON `user`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `user_sns_user_id_key` ON `user_sns`(`user_id`);

-- AddForeignKey
ALTER TABLE `user_sns` ADD CONSTRAINT `user_sns_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
