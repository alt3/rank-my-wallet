import { BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"
import { Hero } from "@/components/Hero"
import { BlockChains } from "@/components/BlockChains"
import { Sponsors } from "@/components/Sponsors"
import { Footer } from "@/components/Footer"

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

const Home: BlitzPage = () => {
  return (
    <div className="container">
      <main>
        <Hero />
        <BlockChains />
        <Sponsors />
      </main>
      <Footer />
    </div>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
