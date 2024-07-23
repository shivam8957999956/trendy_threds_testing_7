import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="min-h-screen  p-8">
    <div className="text-center mb-16">
      <h1 className="text-6xl font-extrabold text-gray-900 drop-shadow-lg">About Us</h1>
      <p className="mt-4 text-2xl text-gray-700">
        Welcome to Trendy Threds. We design with passion and style.
      </p>
    </div>
    {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="relative group">
        <Image
          src="/slide1.png"
          alt="Our Team"
          width={600}
          height={400}
          className="rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-lg"></div>
      </div>
      <div className="relative group">
        <Image
          src="/salesecondmob.png"
          alt="Our Process"
          width={600}
          height={400}
          className="rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-lg"></div>
      </div>
    </div> */}
    <div className="mt-16">
      <h2 className="text-5xl font-bold text-gray-900 mb-4 drop-shadow-lg">Our Mission</h2>
      <p className="text-xl text-gray-700">
        Our mission is to provide high-quality, luxurious clothing that makes you feel confident and stylish.
        We believe in sustainable fashion and ethical production practices.
      </p>
    </div>
    <div className="mt-16">
      <h2 className="text-5xl font-bold text-gray-900 mb-4 drop-shadow-lg">What Sets Us Apart</h2>
      <ul className="list-disc list-inside text-xl text-gray-700 space-y-2">
        <li>Trendy Designs: Our design team is always ahead of the curve, staying on top of the latest fashion trends to bring you the coolest and most innovative t-shirts.</li>
        <li>Quality Materials: We use only the finest materials to ensure that our t-shirts are not only stylish but also comfortable and durable.</li>
        <li>Ethical Production: We believe in sustainable fashion. Our products are made with care, ensuring ethical production practices and a minimal environmental footprint.</li>
        <li>Customer-Centric Approach: Our customers are at the heart of everything we do. We strive to provide an exceptional shopping experience, from easy navigation on our website to fast and reliable delivery.</li>
      </ul>
    </div>
    <div className="mt-16">
      <h2 className="text-5xl font-bold text-gray-900 mb-4 drop-shadow-lg">Meet the Team</h2>
      <p className="text-xl text-gray-700">
        Our team is a vibrant mix of fashion enthusiasts, designers, and innovators, all driven by a shared passion for style and quality. We work tirelessly to bring our vision to life and ensure that each piece in our collection is a work of art.
      </p>
    </div>
    <div className="mt-16">
      <h2 className="text-5xl font-bold text-gray-900 mb-4 drop-shadow-lg">Join the Movement</h2>
      <p className="text-xl text-gray-700">
        Trendy Threds is more than just a clothing brand, it's a community. We love seeing how our customers style their favorite pieces, and we encourage you to share your looks with us on social media using #[YourBrandHashtag]. Together, we can inspire others to embrace their unique style and live boldly.
      </p>
    </div>
    <div className="mt-16">
      <h2 className="text-5xl font-bold text-gray-900 mb-4 drop-shadow-lg">Get in Touch</h2>
      <p className="text-xl text-gray-700">
        We love hearing from our customers! Whether you have a question, feedback, or just want to say hello, don't hesitate to reach out to us at [your email address] or connect with us on [social media links].
      </p>
      <p className="text-xl text-gray-700">
        Thank you for being a part of the Trendy Threds family. Stay stylish!
      </p>
    </div>
  </div>
    // <div className="min-h-screen ">
     
    //   <main className="container mx-auto px-6 py-12">
    //     <section className="text-center mb-16">
    //       <h2 className="text-4xl font-bold mb-4">Welcome to Trendy Threds</h2>
    //       <p className="text-gray-700 text-lg">
    //         We are dedicated to providing the best service in the industry.
    //       </p>
    //     </section>
    //     <section className="mb-16">
    //       <div className="flex flex-col md:flex-row items-center mb-8">
    //         {/* <div className="w-full md:w-1/2">
    //           <Image
    //             src="/logo.png"
    //             alt="Our Mission"
    //             width={600}
    //             height={400}
    //             className="rounded-lg shadow-lg"
    //           />
    //         </div> */}
    //         {/* <div className="w-full md:w-1/2 md:pl-8 mt-4 md:mt-0">
    //           <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
    //           <p className="text-gray-700">
    //             Our mission is to deliver exceptional value to our customers
    //             through high-quality products and services. We strive to exceed
    //             expectations and foster a culture of excellence.
    //           </p>
    //         </div> */}
    //       </div>
    //     </section>
    //     {/* <section className="mb-16">
    //       <h3 className="text-2xl font-bold text-center mb-8">Meet Our Team</h3>
    //       <div className="flex flex-wrap -mx-4">
    //         <div className="w-full md:w-1/3 px-4 mb-8">
    //           <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    //             <Image
    //               src="/logo.png"
    //               alt="Team Member"
    //               width={400}
    //               height={400}
    //               className="w-full h-64 object-cover"
    //             />
    //             <div className="p-6">
    //               <h4 className="text-xl font-bold mb-2">John Doe</h4>
    //               <p className="text-gray-700">CEO</p>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="w-full md:w-1/3 px-4 mb-8">
    //           <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    //             <Image
    //               src="/logo.png"
    //               alt="Team Member"
    //               width={400}
    //               height={400}
    //               className="w-full h-64 object-cover"
    //             />
    //             <div className="p-6">
    //               <h4 className="text-xl font-bold mb-2">Jane Smith</h4>
    //               <p className="text-gray-700">CTO</p>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="w-full md:w-1/3 px-4 mb-8">
    //           <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    //             <Image
    //               src="/logo.png"
    //               alt="Team Member"
    //               width={400}
    //               height={400}
    //               className="w-full h-64 object-cover"
    //             />
    //             <div className="p-6">
    //               <h4 className="text-xl font-bold mb-2">Sarah Lee</h4>
    //               <p className="text-gray-700">COO</p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //     <section className="text-center">
    //       <h3 className="text-2xl font-bold mb-4">Join Us</h3>
    //       <p className="text-gray-700 text-lg mb-8">
    //         Interested in joining our team? Check out our careers page for open positions.
    //       </p>
    //       <a
    //         href="/careers"
    //         className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
    //       >
    //         View Careers
    //       </a>
    //     </section> */}
    //   </main>
      
    // </div>
  );
};

export default AboutUs;
