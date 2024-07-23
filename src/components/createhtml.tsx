"use client";

import { useWixClient } from "@/hooks/useWixClient";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useCartStore } from "@/hooks/useCartStore";

const CreateHtml = () => {

  return (
    <div className="flex flex-row" onClick={()=>"love"}>
      
    </div>
  );
};

export default CreateHtml;
