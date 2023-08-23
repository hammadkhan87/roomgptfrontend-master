import { Helmet } from "react-helmet"
import {Link} from "react-router-dom"
import { PRO_PRICE_ID, ULTRA_PRICE_ID } from "../constants/cosntants"
import { getPriceId } from "../constants/cosntants"
import { useEffect, useState } from "react"
import SubscriptionMeter from "../components/SubscriptionMeter"
import '../App.css'

const Home = ()=>{

  const [priceId, setPriceId] = useState()


  useEffect(()=>{
    const setPriceId_ = async ()=>{
      setPriceId(await getPriceId())
    }
    setPriceId_()
  }, [])





    return (
        
      <div>
      <title>ImprovementAI - The #1 AI-Powered Interior Designer</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="color-scheme" content="light only" />
      <meta name="description" content="Upload a photo of your room and let our AI do the magic." />
      <meta property="og:site_name" content="ImprovementAI - The #1 AI-Powered Interior Designer" />
      <meta property="og:title" content="ImprovementAI - The #1 AI-Powered Interior Designer" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="Upload a photo of your room and let our AI do the magic." />
      <link href="https://fonts.googleapis.com/css2?display=swap&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700" rel="stylesheet" type="text/css" />
      <link rel="icon" type="image/png" href="assets/images/favicon.png" />
      <link rel="apple-touch-icon" href="assets/images/apple-touch-icon.png" />
      <link rel="stylesheet" href="/main.css" />
      <noscript>&lt;link rel="stylesheet" href="assets/noscript.css" /&gt;</noscript>
      <div id="wrapper">
          <SubscriptionMeter/>
        <div id="main">
          
          <div className="inner">
            <section id="home-section">
              <h2 id="text24">Pricing Plans</h2>
              <div id="container06" className="container columns">
                <div className="wrapper">
                  <div className="inner">
                    <div>
                      <p id="text38">Free Plan</p>
                      <h2 id="text01">$0/month</h2>
                      <p id="text05" className="style1">Suitable for trying out ImprovementAI</p>
                      <div id="list06" className="style1 list"><ul><li><p>3 Designs</p></li><li><p>Standard Quality Renders</p></li><li><p>Standard AI Model</p></li><li><p>All Styles Unlocked</p></li><li><p>No Watermark</p></li><li><p><s>Commercial License</s></p></li><li><p><s>24 Hours Support</s></p></li></ul></div>
                    </div>
                    <div>
                      <p id="text33" className="style8">Pro Plan</p>
                      <h2 id="text34" className="style4">$9.99/month</h2>
                      <p id="text07" className="style1">Suitable for individuals looking to transform their home.</p>
                      <div id="list01" className="style2 list"><ul><li><p>50 Designs Every Month</p></li><li><p>Higher Quality Renders</p></li><li><p>Newest AI Model</p></li><li><p>All Styles Unlocked</p></li><li><p>No Watermark</p></li><li><p>Commercial License</p></li><li><p>24 Hours Support</p></li></ul></div>
                    </div>
                    <div>
                      <p id="text02" className="style7">Ultra Plan</p>
                      <h2 id="text39" className="style11">$19.99/month</h2>
                      <p id="text15" className="style1">Suitable for real estate agents, home builders, interior designers and businesses.</p>
                      <div id="list05" className="style2 list"><ul><li><p>150 Designs Every Month</p></li><li><p>Higher Quality Renders</p></li><li><p>Newest AI Model</p></li><li><p>All Styles Unlocked</p></li><li><p>No Watermark</p></li><li><p>Commercial License</p></li><li><p>24 Hours Support</p></li></ul></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="container07" className="container default full screen mx-4">
                <div className="wrapper">
                  <div className="inner">
                    <ul id="buttons02" className="buttons">
                      <li>
                        <Link className="one bg-gray-400 font-bold px-4 py-4 rounded-lg text-black" to={"/dream"}>{priceId? "Unsubscribe": "Free Plan"}</Link>
                      </li>
                      <li>
                      <Link className="one bg-cyan-400 font-bold px-4 py-4 rounded-lg" to={"/pay/pro"}>{priceId===PRO_PRICE_ID?"Current Plan": (priceId)? "Downgrade": "Pro"}</Link>
                      </li>
                      <li>
                      <Link className="one bg-green-400 font-bold px-4 py-4 rounded-lg" to={"/pay/ultra"}>{priceId===ULTRA_PRICE_ID?"Current Plan": (priceId)? "Upgrade": "Ultra"}</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Helmet>
        <script src="/main.js"></script>
      </Helmet>
    </div>
    
    )
}

export default Home