import Head from "next/head";
import Layout, { siteTitle } from "../components/layout/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "../components/date";

export default function Home({ allPostData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Welcome</h2>
      </section>
      <section className={utilStyles.headingMd}>
        <p>
          <Link href="/posts">
            <a>View My Blog</a>
          </Link>
        </p>
      </section>
    </Layout>
  );
}
