import Head from 'next/head'
import HomeContainer from '../containers/home'

const Homepage = () => {
  return (
    <>
      <Head>
        <title>Binargram</title>
      </Head>
      <HomeContainer />
    </>
  )
}

export default Homepage