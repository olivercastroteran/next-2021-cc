import Head from 'next/head';
import ArticleList from '../components/ArticleList';

export const getStaticProps = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=6'
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>WebDev News</title>
        <meta name="keywords" content="Web development programming" />
      </Head>

      <ArticleList articles={articles} />
    </>
  );
}
