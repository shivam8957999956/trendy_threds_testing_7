"use client";

import { useWixClient } from "@/hooks/useWixClient";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useCartStore } from "@/hooks/useCartStore";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const pathName = usePathname();

  const wixClient = useWixClient();
  const isLoggedIn = wixClient.auth.loggedIn();

  const handleLogout = async () => {
    setIsLoading(true);
    Cookies.remove("refreshToken");
    const { logoutUrl } = await wixClient.auth.logout(window.location.href);
    setIsLoading(false);
    setIsProfileOpen(false);
    setOpen(false);
    router.push("/");
  };

  const { cart, counter, getCart } = useCartStore();

  useEffect(() => {
    getCart(wixClient);
  }, [wixClient, getCart]);

  return (
    <div className="flex flex-row">
      <Link href="/checkout">
        <div className="relative inline-block mr-4">
          <Image src="/cart.png" alt="" width={30} height={30} />
          <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-1 text-xs">
            {counter}
          </div>
        </div>
      </Link>
      <Image
        src="/menu.png"
        alt=""
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl  z-10">
          <Link href="/" onClick={() => setOpen(false)}>
            Homepage
          </Link>
          <Link href="/" onClick={() => setOpen(false)}>
            Shop
          </Link>
          <Link href="/" onClick={() => setOpen(false)}>
            Deals
          </Link>
          <Link href="/aboutUs" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="/contactus" onClick={() => setOpen(false)}>
            Contact
          </Link>
          <Link
            href={isLoggedIn ? "/profile" : "/login"}
            onClick={() => setOpen(false)}
          >
            {isLoggedIn ? "My Account" : "Login"}
          </Link>
          <Link href="/" onClick={() => handleLogout()}>
            Logout
          </Link>
          <Link href="/checkout" onClick={() => setOpen(false)}>
            Cart({counter})
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
