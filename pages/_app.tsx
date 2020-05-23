import '../css/styles.css'
import Gradient from '../components/Gradient'
import Border from '../components/Border'
import Overlay from '../components/Overlay'
import Header from "../components/Header";
import Pattern from "../components/Pattern";
import Footer from "../components/Footer";

import styled from 'styled-components'

// This default export is required in a new `pages/_app.tsx` file.
function MyApp({ className, Component, pageProps }) {
  return <div className={className}>
    <div className="container">
      <Border index={2001} />
      <Overlay index={1000} blendMode={"darken"} opacity={1}></Overlay>
      <Header></Header>
      <Gradient side="left" />
      <Component {...pageProps} />
      <Gradient side="right" />
      <Pattern />
      {/* <Footer /> */}
    </div>
  </div>
}

export default styled(MyApp)`
  padding: 0px 32px 32px 32px;
  position: relative;
  background: #15202b;
  min-height: 100vh;

  .container {
    max-width: 800px;
    margin: auto;
  }
`