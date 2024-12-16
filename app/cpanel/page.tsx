"use client";
import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";

const page = () => {
  const router = useRouter();
  useLayoutEffect(() => {
    router.push(
      "https://s786.bom1.mysecurecloudhost.com:2083/cpsess2600507737/frontend/jupiter/index.html"
    );
  }, []);
  return <div>Redirecting...</div>;
};
export default page;
