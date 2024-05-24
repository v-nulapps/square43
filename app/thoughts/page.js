import { GraphQLClient, gql } from "graphql-request";
import BlogList from "./ui/BlogList";
import styles from "./Insights.module.css";
import Links from "./ui/Links";
import { getAllBlogs } from "@/utils/data/getData";

const client = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_URL);

export const metadata = {
  openGraph: {
    title: "Square43 Studio | Memos",
    description: "Think of this as our status updates.",
    images: [{ url: "/images/About.png" }],
    url: "https://square43.com/thoughts",
  },
  title: "Square43 Studio | Memos",
  description: "Think of this as our status updates.",
  metadataBase: new URL("https://square43.com/"),
};

export default async function Page() {
  const blogs = await getAllBlogs();

  return (
    <div className={styles.Stories}>
      <div className={styles.wrapper}>
        <h1
          style={{
            animation: `fadeInRight 1s forwards ease-in-out`,
            opacity: 0,
          }}
          className={styles.title}
        >
          Taking notes
        </h1>
        <p className={styles.subheading}>
          Think of this as our status updates.
        </p>

        <BlogList blogs={blogs} />
        <Links />
      </div>
    </div>
  );
}
