import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register | PixSlash",
  description:
    "Register in to your PixSlash account to explore, upload, organize, and download high-quality wallpapers for desktop and mobile devices.",
};

const page = () => {
  return <div className="grid h-dvh place-items-center">register</div>;
};

export default page;
