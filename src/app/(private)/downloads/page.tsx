import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Downloaded Wallpapers | PixSlash",
  description:
    "View all the wallpapers you've downloaded from PixSlash. Quickly access and revisit your download history.",
};

const page = () => {
  return (
    <div className="grid h-dvh place-items-center">
      All Downloads Wallpapers
    </div>
  );
};

export default page;
