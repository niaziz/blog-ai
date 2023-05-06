import Trending from "app/(home)/Trending";
import Tech from "app/(home)/Tech";
import Travel from "app/(home)/Travel";
import Other from "app/(shared)/Other";
import Subscribe from "./(shared)/Subscribe";
import SideBar from "./(shared)/Sidebar";
import { prisma } from "app/api/client";

export const revalidate = 60;

const getPost = async () => {
  const posts = await prisma.post.findMany();

  const formattedPosts = await Promise.all(
    posts.map(async (post) => {
      const imageModule = require(`../public${post.image}`);
      return {
        ...post,
        image: imageModule.default,
      };
    })
  );

  return formattedPosts;
};

export default async function Home() {
  const posts = await getPost();

  const formattedPosts = () => {
    const trendingPost: Array<any> = [];
    const techPost: Array<any> = [];
    const travelPost: Array<any> = [];
    const otherPost: Array<any> = [];

    posts.forEach((post: any, i: number) => {
      if (i < 4) {
        trendingPost.push(post);
      }
      if (post?.category === "Tech") {
        techPost.push(post);
      } else if (post?.category === "Travel") {
        travelPost.push(post);
      } else if (post?.category === "Interior Design") {
        otherPost.push(post);
      }
    });
    return [trendingPost, techPost, travelPost, otherPost];
  };

  const [trendingPost, techPost, travelPost, otherPost] = formattedPosts();

  return (
    <main className="px-10 leading-7">
      <Trending trendingPost={trendingPost} />
      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4">
          <Tech techPost={techPost} />
          <Travel travelPost={travelPost} />
          <Other otherPost={otherPost} />
          <div className="hidden md:block">
            <Subscribe />
          </div>
        </div>
        <div className="1/4">
          <SideBar />
        </div>
      </div>
    </main>
  );
}
