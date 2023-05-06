import { prisma } from "@/app/api/client";
import React from "react";
import { Post as PostType } from "@prisma/client";
import { FormattedPost } from "./types";
import Sidebar from "@/app/(shared)/Sidebar";

type Props = {
  params: { id: string };
};

const getPost = async (id: string) => {
  const post: PostType | null = await prisma.post.findUnique({
    where: { id },
  });

  const formattedPost = {
    ...post,
    createdAt: post?.createdAt?.toISOString(),
    updatedAt: post?.updatedAt?.toISOString(),
  };

  return formattedPost;
};

const Post = async ({ params }: Props) => {
  const { id } = params;
  const post: any = await getPost(id);
  console.log(id)
  return (
    <main className="px-10 leading-7">
      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4">{/* <Content /> */}</div>
        <div className="basis-1/4">
          <Sidebar />
        </div>
      </div>
    </main>
  );
};

export default Post;
