ALTER TABLE "entries" RENAME TO "entry";--> statement-breakpoint
ALTER TABLE "folders" RENAME TO "folder";--> statement-breakpoint
ALTER TABLE "entry" DROP CONSTRAINT "entries_user_id_user_id_fk";
--> statement-breakpoint
ALTER TABLE "entry" DROP CONSTRAINT "entries_folder_id_folders_id_fk";
--> statement-breakpoint
ALTER TABLE "folder" DROP CONSTRAINT "folders_user_id_user_id_fk";
--> statement-breakpoint
ALTER TABLE "folder" DROP CONSTRAINT "folders_parent_folder_id_folders_id_fk";
--> statement-breakpoint
ALTER TABLE "entry" ADD CONSTRAINT "entry_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "entry" ADD CONSTRAINT "entry_folder_id_folder_id_fk" FOREIGN KEY ("folder_id") REFERENCES "public"."folder"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "folder" ADD CONSTRAINT "folder_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "folder" ADD CONSTRAINT "folder_parent_folder_id_folder_id_fk" FOREIGN KEY ("parent_folder_id") REFERENCES "public"."folder"("id") ON DELETE no action ON UPDATE no action;