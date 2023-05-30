import Feature from 'components/Feature'
import Hero from 'components/Hero'
import Layout from 'components/Layout/Layout'
import Pricing from 'components/Pricing'
import SeoHead from 'components/SeoHead'

export default function IndexPage({ posts }) {
  return (
    <>
      <SeoHead title="LaslesVPN Landing Page" />
      <Layout>
        <Hero />
        <Feature />
        <Pricing />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  // const client = createClient({
  //   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  //   dataset: 'production',
  //   apiVersion: '2022-03-25',
  //   useCdn: false,
  // })

  const posts = []
  return {
    props: {
      posts,
    },
  }
}
