"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Cpanel = () => {
  const router = useRouter();
  useEffect(() => {
    router.push(
      "https://s786.bom1.mysecurecloudhost.com:2083/cpsess2600507737/frontend/jupiter/index.html"
    );
  }, [router]);
  return <div>Redirecting...</div>;
};
export default Cpanel;
