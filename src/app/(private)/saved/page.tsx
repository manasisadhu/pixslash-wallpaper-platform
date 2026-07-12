import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saved Posts | PixSlash",
  description:
    "Access all your saved wallpapers in one place and revisit your favorite posts on PixSlash.",
};

const page = () => {
  return <div className="grid h-dvh place-items-center">Saved Posts</div>;
};

export default page;
