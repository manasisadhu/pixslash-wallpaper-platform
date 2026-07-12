import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Upload Wallpaper | PixSlash",
  description:
    "Upload high-quality wallpapers to share with the PixSlash community.",
};

const page = () => {
  return <div className="grid h-dvh place-items-center">upload</div>;
};

export default page;
