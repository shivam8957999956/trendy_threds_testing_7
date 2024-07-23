"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect,Suspense } from "react";
import Confetti from "react-confetti";

// const SuccessPage = () => {
//   const searchParams = useSearchParams();
//   const router = useRouter();

//   const orderId = searchParams.get("orderId");

//   useEffect(() => {
//     if (!orderId) return;

//     const timer = setTimeout(() => {
//       router.push("/orders/" + orderId);
//     }, 5000);

//     return () => {
//       clearTimeout(timer);
//     };
//   }, [orderId, router]);

//   return (
//     <div className="flex flex-col gap-6 items-center justify-center h-[calc(100vh-180px)]">
//      <Confetti width={2000} height={1000} />
//       <h1 className="text-6xl text-green-700">Successful</h1>
//       <h2 className="text-xl font-medium">
//         We sent the invoice to your e-mail
//       </h2>
//       <h3 className="">You are being redirected to the order page...</h3> 
//     </div>
//   );
// };

// export default SuccessPage;

// "use client";
// import React, { Suspense } from "react";
// import { useSearchParams } from "next/navigation";
// import Confetti from "react-confetti";

// Create a separate component to handle search params and redirect logic
const SuccessPageContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const orderId = searchParams.get("orderId");

  useEffect(() => {
    if (!orderId) return;

    const timer = setTimeout(() => {
      router.push("/orders/" + orderId);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [orderId, router]);

  return (
    <div className="flex flex-col gap-6 items-center justify-center h-[calc(100vh-180px)]">
      <Confetti width={2000} height={1000} />
      <h1 className="text-6xl text-green-700">Successful</h1>
      <h2 className="text-xl font-medium">
        We sent the invoice to your e-mail
      </h2>
      <h3 className="">You are being redirected to the order page...</h3>
    </div>
  );
};

// Wrap the component with Suspense
const SuccessPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessPageContent />
    </Suspense>
  );
};

export default SuccessPage;
