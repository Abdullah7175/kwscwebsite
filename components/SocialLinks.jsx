import Link from "next/link";

// Hero social links home three
const hero_link_home_three = [
  {
    id: 1,
    link: "https://www.facebook.com",
    title: "Facebook",
  },
  {
    id: 2,
    link: "https://www.linkedin.com",
    title: "LinkedIn",
  },
  {
    id: 3,
    link: "https://www.instagram.com",
    title: "Instagram",
  },
  {
    id: 4,
    link: "https://www.twitter.com",
    title: "Twitter",
  },
  {
    id: 5,
    link: "https://www.dribbble.com",
    title: "Dribbble",
  },
];

export const SocialLinks = () => {
  return (
    <>
      {hero_link_home_three.map((h_item, h_index) => (
        <Link
          key={h_index}
          href={h_item.link}
          target="_blank"
          className="border border-gray-700 px-4 py-2 min-h-[70px] flex items-center justify-center 
               transition-all duration-300 ease-in-out 
               hover:border-red-500 hover:text-red-500"
        >
          {h_item.title}
        </Link>
      ))}
    </>
  );
};

// CopyRight text
const copy_right_text = {
  copy_right: <>Copyright {new Date().getFullYear()}, All Rights Reserved</>,
};

export const CopyRight = () => {
  return <>{copy_right_text.copy_right}</>;
};
