import Head from "next/head";
import getPostMetadata from "../components/utils/getPostMetaData";
import { AllPost } from "../components/utils/PostContent";

export default function Blog() {
  const postMetadata = getPostMetadata();
  return (
    <main>
      <div className="my-28 max-w-4xl mx-auto px-4 min-h-screen">
        <AllPost posts={postMetadata} />
      </div>
    </main>
  );
}
