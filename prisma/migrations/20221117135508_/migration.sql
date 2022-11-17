-- DropForeignKey
ALTER TABLE "courses" DROP CONSTRAINT "courses_teacher_id_fkey";

-- AddForeignKey
ALTER TABLE "courses" ADD CONSTRAINT "courses_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "teachers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
