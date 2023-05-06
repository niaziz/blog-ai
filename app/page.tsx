import Trending from "app/(home)/Trending";
import Tech from "app/(home)/Tech";
import Travel from "app/(home)/Travel";
import Other from "app/(shared)/Other";
import Subscribe from "./(shared)/Subscribe";
import SideBar from "./(shared)/Sidebar";
import { prisma } from "app/api/client";

const getPost = async () => {
  const posts = await prisma.post.findMany();

  return posts;
};

export default async function Home() {
  const posts = await getPost();

  return (
    <main className="px-10 leading-7">
      <Trending />
      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4">
          <Tech />
          <Travel />
          <Other />
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
