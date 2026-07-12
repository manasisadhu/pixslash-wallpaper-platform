import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liked Wallpapers | PixSlash",
  description:
    "Browse all the wallpapers you've liked on PixSlash. Easily revisit and manage your favorite wallpapers in one place.",
};

const page = () => {
  return (
    <div className="grid h-dvh place-items-center">all liked wallpapers</div>
  );
};

export default page;
