
import UpdateButton from "@/components/UpdateButton";
import { updateUser } from "@/lib/actions";
import { wixClientServer } from "@/lib/wixClientServer";
import { members } from "@wix/members";
import Link from "next/link";
import { format } from "timeago.js";

const ProfilePage = async () => {
  let wixClient;
  try {
    wixClient = await wixClientServer();
  } catch (error) {
    console.error("Error initializing Wix client:", error);
    return <div className="">Error initializing Wix client</div>;
  }

  let user;
  try {
    user = await wixClient.members.getCurrentMember({
      fieldsets: [members.Set.FULL],
    });
  } catch (error) {
    console.error("Error fetching current member:", error);
    return <div className="">Error fetching current member</div>;
  }

  if (!user.member?.contactId) {
    console.error("Member ID is undefined:", user);
    return <div className="">Not logged in!</div>;
  }

  let orderRes;
  try {
    orderRes = await wixClient.orders.searchOrders({
      search: {
        filter: { "buyerInfo.contactId": { $eq: user.member?.contactId } },
      },
    });
  } catch (error) {
    console.error("Error fetching orders:", error);
    return <div className="">Error fetching orders</div>;
  }

  return (
    <div className="flex flex-col md:flex-row gap-24 md:h-[calc(100vh-180px)] items-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
  <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-6 animate__animated animate__fadeInLeft">
    <h1 className="text-3xl font-bold mb-4 text-blue-600">Profile</h1>
    <form action={updateUser} className="mt-12 flex flex-col gap-6">
      <input type="text" hidden name="id" value={user.member.contactId} />
      <label className="text-sm text-gray-700">Username</label>
      <input
        type="text"
        name="username"
        placeholder={user.member?.profile?.nickname || "john"}
        className="ring-2 ring-gray-300 rounded-md p-3 max-w-96 transition duration-300 ease-in-out focus:ring-blue-500"
      />
      <label className="text-sm text-gray-700">First Name</label>
      <input
        type="text"
        name="firstName"
        placeholder={user.member?.contact?.firstName || "John"}
        className="ring-2 ring-gray-300 rounded-md p-3 max-w-96 transition duration-300 ease-in-out focus:ring-blue-500"
      />
      <label className="text-sm text-gray-700">Surname</label>
      <input
        type="text"
        name="lastName"
        placeholder={user.member?.contact?.lastName || "Doe"}
        className="ring-2 ring-gray-300 rounded-md p-3 max-w-96 transition duration-300 ease-in-out focus:ring-blue-500"
      />
      <label className="text-sm text-gray-700">Phone</label>
      <input
        type="text"
        name="phone"
        placeholder={
          (user.member?.contact?.phones &&
            user.member?.contact?.phones[0]) ||
          "+1234567"
        }
        className="ring-2 ring-gray-300 rounded-md p-3 max-w-96 transition duration-300 ease-in-out focus:ring-blue-500"
      />
      <label className="text-sm text-gray-700">E-mail</label>
      <input
        type="email"
        name="email"
        placeholder={user.member?.loginEmail || "john@gmail.com"}
        className="ring-2 ring-gray-300 rounded-md p-3 max-w-96 transition duration-300 ease-in-out focus:ring-blue-500"
      />
      <UpdateButton />
    </form>
  </div>
  <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-6 animate__animated animate__fadeInRight">
    <h1 className="text-3xl font-bold mb-4 text-blue-600">Orders</h1>
    <div className="mt-12 flex flex-col gap-4">
      {orderRes.orders.map((order) => (
        <Link
          href={`/orders/${order._id}`}
          key={order._id}
          className="flex justify-between px-4 py-4 rounded-md hover:bg-green-100 transition duration-300 ease-in-out transform hover:scale-105 even:bg-slate-100"
        >
          <span className="w-1/4 text-blue-500 font-medium">{order._id?.substring(0, 10)}...</span>
          <span className="w-1/4 text-gray-800">₹{order.priceSummary?.subtotal?.amount}</span>
          {order._createdDate && (
            <span className="w-1/4 text-gray-600">{format(order._createdDate)}</span>
          )}
          <span className="w-1/4 text-gray-600">{order.status}</span>
        </Link>
      ))}
    </div>
  </div>
</div>
  );
};

export default ProfilePage;

// import UpdateButton from "@/components/UpdateButton";
// import { updateUser } from "@/lib/actions";
// import { wixClientServer } from "@/lib/wixClientServer";
// import { members } from "@wix/members";
// import Link from "next/link";
// import { format } from "timeago.js";

// const ProfilePage = async () => {
//   const wixClient = await wixClientServer();

//   const user = await wixClient.members.getCurrentMember({
//     fieldsets: [members.Set.FULL],
//   });

//   if (!user.member?.contactId) {
//     return <div className="">Not logged in!</div>;
//   }

//   const orderRes = await wixClient.orders.searchOrders({
//     search: {
//       filter: { "buyerInfo.contactId": { $eq: user.member?.contactId } },
//     },
//   });

//   return (
//     <div className="flex flex-col md:flex-row gap-24 md:h-[calc(100vh-180px)] items-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
//       <div className="w-full md:w-1/2">
//         <h1 className="text-2xl">Profile</h1>
//         <form action={updateUser} className="mt-12 flex flex-col gap-4">
//           <input type="text" hidden name="id" value={user.member.contactId} />
//           <label className="text-sm text-gray-700">Username</label>
//           <input
//             type="text"
//             name="username"
//             placeholder={user.member?.profile?.nickname || "john"}
//             className="ring-1 ring-gray-300 rounded-md p-2 max-w-96"
//           />
//           <label className="text-sm text-gray-700">First Name</label>
//           <input
//             type="text"
//             name="firstName"
//             placeholder={user.member?.contact?.firstName || "John"}
//             className="ring-1 ring-gray-300 rounded-md p-2 max-w-96"
//           />
//           <label className="text-sm text-gray-700">Surname</label>
//           <input
//             type="text"
//             name="lastName"
//             placeholder={user.member?.contact?.lastName || "Doe"}
//             className="ring-1 ring-gray-300 rounded-md p-2 max-w-96"
//           />
//           <label className="text-sm text-gray-700">Phone</label>
//           <input
//             type="text"
//             name="phone"
//             placeholder={
//               (user.member?.contact?.phones &&
//                 user.member?.contact?.phones[0]) ||
//               "+1234567"
//             }
//             className="ring-1 ring-gray-300 rounded-md p-2 max-w-96"
//           />
//           <label className="text-sm text-gray-700">E-mail</label>
//           <input
//             type="email"
//             name="email"
//             placeholder={user.member?.loginEmail || "john@gmail.com"}
//             className="ring-1 ring-gray-300 rounded-md p-2 max-w-96"
//           />
//           <UpdateButton />
//         </form>
//       </div>
//       <div className="w-full md:w-1/2">
//         <h1 className="text-2xl">Orders</h1>
//         <div className="mt-12 flex flex-col">
//           {orderRes.orders.map((order) => (
//             <Link
//               href={`/orders/${order._id}`}
//               key={order._id}
//               className="flex justify-between px-2 py-6 rounded-md hover:bg-green-50 even:bg-slate-100"
//             >
//               <span className="w-1/4">{order._id?.substring(0, 10)}...</span>
//               <span className="w-1/4">
//                 ${order.priceSummary?.subtotal?.amount}
//               </span>
//               {order._createdDate && (
//                 <span className="w-1/4">{format(order._createdDate)}</span>
//               )}
//               <span className="w-1/4">{order.status}</span>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;
