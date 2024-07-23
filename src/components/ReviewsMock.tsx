import Image from "next/image";
const hashCode = (str: any) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32-bit integer
  }
  return Math.abs(hash);
};

// Function to get unique reviews for a product
const getReviewsForProduct = (
  productId: any,
  reviewsData: any,
  numReviews = 4
) => {
  const reviews = reviewsData.data;
  const hash = hashCode(productId);
  const totalReviews = reviews.length;

  // Use the hash to generate unique indices
  const selectedReviews = [];
  for (let i = 0; i < numReviews; i++) {
    const index = (hash + i) % totalReviews;
    selectedReviews.push(reviews[index]);
  }

  return selectedReviews;
};

const ReviewsMock = async ({ productId }: { productId: string }) => {
  // const reviewRes = await fetch(
  //   `https://api.fera.ai/v3/public/reviews?product.id=${productId}&public_key=${process.env.NEXT_PUBLIC_FERA_ID}`
  // );
  const rev = {
    data: [
      {
        id: "review_1",
        customer: {
          avatar_url: "/profile.png",
          display_name: "Amit Kumar",
        },
        rating: 5,
        heading: "Exceptional Quality",
        body: "The cotton is incredibly soft and comfortable. Perfect fit!",
      },
      {
        id: "review_2",
        customer: {
          avatar_url: "/profile.png",
          display_name: "Priya Sharma",
        },
        rating: 5,
        heading: "Stylish and Comfortable",
        body: "Amazing design and very comfortable. Loving it!",
      },
      {
        id: "review_3",
        customer: {
          avatar_url: "/profile.png",
          display_name: "Ravi Verma",
        },
        rating: 4,
        heading: "Good Purchase",
        body: "Bahut acchi quality hai, fitting bhi perfect hai. Totally worth it.",
      },
      {
        id: "review_4",
        customer: {
          avatar_url: "/profile.png",
          display_name: "Sunita Gupta",
        },
        rating: 5,
        heading: "Highly Recommended",
        body: "Absolutely love this t-shirt! So soft and luxurious.",
      },
      {
        id: "review_5",
        customer: {
          avatar_url: "/profile.png",
          display_name: "Rajesh Singh",
        },
        rating: 5,
        heading: "Great Fit",
        body: "The t-shirt fits perfectly and the material is top-notch.",
      },
      {
        id: "review_6",
        customer: {
          avatar_url: "/profile.png",
          display_name: "Anita Desai",
        },
        rating: 5,
        heading: "Fantastic Purchase",
        body: "Exceeded my expectations. Great product!",
      },
      {
        id: "review_7",
        customer: {
          avatar_url: "/profile.png",
          display_name: "Kiran Joshi",
        },
        rating: 4,
        heading: "Very Nice",
        body: "Acchi quality hai aur design bhi badiya hai.",
      },
      {
        id: "review_8",
        customer: {
          avatar_url: "/profile.png",
          display_name: "Suresh Patil",
        },
        rating: 5,
        heading: "Superb",
        body: "Happy with the purchase. The cotton is very soft and comfortable.",
      },
      {
        id: "review_9",
        customer: {
          avatar_url: "/profile.png",
          display_name: "Nisha Aggarwal",
        },
        rating: 5,
        heading: "Excellent",
        body: "Very satisfied with this t-shirt. Feels luxurious!",
      },
      {
        id: "review_10",
        customer: {
          avatar_url: "/profile.png",
          display_name: "Vikram Mehta",
        },
        rating: 4,
        heading: "Good Choice",
        body: "Worth the price. Comfortable and stylish.",
      },
      {
        id: "review_11",
        customer: {
          avatar_url: "/profile.png",
          display_name: "Alok Mishra",
        },
        rating: 4,
        heading: "Decent Quality",
        body: "Accha hai, but could be better.",
      },
      {
        id: "review_12",
        customer: {
          avatar_url: "/profile.png",
          display_name: "Meena Kapoor",
        },
        rating: 5,
        heading: "Loved It",
        body: "Highly recommend this t-shirt. Soft and comfortable.",
      },
      {
        id: "review_13",
        customer: {
          avatar_url: "/profile.png",
          display_name: "Anil Bhatt",
        },
        rating: 5,
        heading: "Pretty Good",
        body: "Satisfied with the quality and design.",
      },
      {
        id: "review_14",
        customer: {
          avatar_url: "/profile.png",
          display_name: "Shweta Singh",
        },
        rating: 5,
        heading: "Amazing!",
        body: "Absolutely fantastic t-shirt. Loving the feel of the cotton.",
      },
      {
        id: "review_15",
        customer: {
          avatar_url: "/profile.png",
          display_name: "Arjun Khanna",
        },
        rating: 4,
        heading: "Decent",
        body: "Not bad, but could be better.",
      },
      {
        id: "review_16",
        customer: {
          avatar_url: "/profile.png",
          display_name: "Deepa Rao",
        },
        rating: 5,
        heading: "Good Value",
        body: "Worth every penny. Great quality!",
      },
      {
        id: "review_17",
        customer: {
          avatar_url: "/profile.png",
          display_name: "Manish Jain",
        },
        rating: 5,
        heading: "Excellent Choice",
        body: "Very happy with this t-shirt. Feels very premium.",
      },
      {
        id: "review_18",
        customer: {
          avatar_url: "/profile.png",
          display_name: "Rohit Kumar",
        },
        rating: 5,
        heading: "Good Product",
        body: "Satisfied with the quality and fit. Will buy again.",
      },
      {
        id: "review_19",
        customer: {
          avatar_url: "/profile.png",
          display_name: "Sneha Pillai",
        },
        rating: 5,
        heading: "Fantastic!",
        body: "Exceeds expectations. Very soft and comfortable.",
      },
      {
        id: "review_20",
        customer: {
          avatar_url: "/profile.png",
          display_name: "Pooja Sharma",
        },
        rating: 5,
        heading: "Pretty Good",
        body: "Happy with the purchase. The cotton feels luxurious.",
      },
      {
        id: "review_21",
        customer: {
          avatar_url: "/profile.png",
          display_name: "Gaurav Desai",
        },
        rating: 4,
        heading: "Good Value",
        body: "Bahut accha product hai. Worth the price.",
      },
      {
        id: "review_22",
        customer: {
          avatar_url: "/profile.png",
          display_name: "Rina Bose",
        },
        rating: 5,
        heading: "Amazing Product",
        body: "Highly recommend this t-shirt. Very soft and comfortable.",
      },
      {
        id: "review_23",
        customer: {
          avatar_url: "/profile.png",
          display_name: "Varun Malhotra",
        },
        rating: 4,
        heading: "Good Quality",
        body: "Happy with the quality and design.",
      },
      {
        id: "review_24",
        customer: {
          avatar_url: "/profile.png",
          display_name: "Kavita Iyer",
        },
        rating: 5,
        heading: "Excellent",
        body: "Very pleased with this t-shirt. Feels very premium.",
      },
      {
        id: "review_25",
        customer: {
          avatar_url: "/profile.png",
          display_name: "Sahil Chauhan",
        },
        rating: 5,
        heading: "Good Buy",
        body: "Worth the money. Very soft and comfortable.",
      },
      {
        id: "review_26",
        customer: {
          avatar_url: "/profile.png",
          display_name: "Neha Jain",
        },
        rating: 4,
        heading: "Decent",
        body: "It’s okay, but could be better.",
      },
      {
        id: "review_27",
        customer: {
          avatar_url: "/profile.png",
          display_name: "Rakesh Kumar",
        },
        rating: 5,
        heading: "Fantastic!",
        body: "Exceeded expectations. Very satisfied with this t-shirt.",
      },
      {
        id: "review_28",
        customer: {
          avatar_url: "/profile.png",
          display_name: "Seema Joshi",
        },
        rating: 5,
        heading: "Good Value",
        body: "Satisfied with the purchase. The cotton is very soft.",
      },
    ],
  };

  const reviews = getReviewsForProduct(productId, rev);

  return reviews?.map((review: any) => (
    <div className="flex flex-col gap-4" key={review.id}>
      {/* USER */}
      <div className="flex items-center gap-4 font-medium">
        <Image
          src={review.customer.avatar_url}
          alt=""
          width={32}
          height={32}
          className="rounded-full"
        />
        <span>{review.customer.display_name}</span>
      </div>
      {/* STARS */}
      <div className="flex gap-2">
        {Array.from({ length: review.rating }).map((_, index) => (
          <Image src="/star.png" alt="" key={index} width={16} height={16} />
        ))}
      </div>
      {/* DESC */}
      {review.heading && <p>{review.heading}</p>}
      {review.body && <p>{review.body}</p>}
      {/* <div className="">
        {review.media.map((media: any) => (
          <Image
            src={media.url}
            key={media.id}
            alt=""
            width={100}
            height={50}
            className="object-cover"
          />
        ))}
      </div> */}
    </div>
  ));
};

export default ReviewsMock;
