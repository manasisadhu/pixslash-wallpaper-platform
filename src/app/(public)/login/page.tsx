import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | PixSlash",
  description:
    "Log in in to your PixSlash account to explore, upload, organize, and download high-quality wallpapers for desktop and mobile devices.",
};

const page = () => {
  return <div className="grid h-dvh place-items-center">Login</div>;
};

export default page;
