import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PostModuleBase } from "./base/post.module.base";
import { PostService } from "./post.service";
import { PostController } from "./post.controller";

@Module({
  imports: [PostModuleBase, forwardRef(() => AuthModule)],
  controllers: [PostController],
  providers: [PostService],
  exports: [PostService],
})
export class PostModule {}
