import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile | PixSlash",
  description:
    "Update your profile picture, personal information, password, and manage your PixSlash account, including account deletion.",
};

const page = () => {
  return <div className="grid h-dvh place-items-center">User Profile</div>;
};

export default page;
