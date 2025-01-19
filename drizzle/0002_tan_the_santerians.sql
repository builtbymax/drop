ALTER TABLE "entry" RENAME TO "entries";--> statement-breakpoint
ALTER TABLE "folder" RENAME TO "folders";--> statement-breakpoint
ALTER TABLE "entries" DROP CONSTRAINT "entry_user_id_user_id_fk";
--> statement-breakpoint
ALTER TABLE "entries" DROP CONSTRAINT "entry_folder_id_folder_id_fk";
--> statement-breakpoint
ALTER TABLE "folders" DROP CONSTRAINT "folder_user_id_user_id_fk";
--> statement-breakpoint
ALTER TABLE "folders" DROP CONSTRAINT "folder_parent_folder_id_folder_id_fk";
--> statement-breakpoint
ALTER TABLE "entries" ADD CONSTRAINT "entries_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "entries" ADD CONSTRAINT "entries_folder_id_folders_id_fk" FOREIGN KEY ("folder_id") REFERENCES "public"."folders"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "folders" ADD CONSTRAINT "folders_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "folders" ADD CONSTRAINT "folders_parent_folder_id_folders_id_fk" FOREIGN KEY ("parent_folder_id") REFERENCES "public"."folders"("id") ON DELETE no action ON UPDATE no action;