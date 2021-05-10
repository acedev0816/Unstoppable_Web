import React, { useState } from 'react'

import Home from '../Home'
import Page from '../Page'
import Feature from '../Feature'
import Wallet from '../Wallet'
import Footer from '../Footer/Footer'
import Join from '../Join/Join'

import './App.scss'

function App() {
  const [feature, setFeature] = useState({
    hand: '',
    face: '',
    independence: ''
  })

  const onMouseEnter = (key, value) => {
    if (feature[key] !== value) {
      setFeature({ [key]: value })
    }
  }

  const onMouseLeave = (key) =>
    setFeature({ [key]: null })

  return (
    <div className="App">
      <div id="page-1" className="Page-black">
        <Home />
      </div>
      <div id="page-2" className="Page-dark">
        <Page img="hand"
              onMouseLeave={() => onMouseLeave('hand')}
              featureImg={feature.hand}
              text="Unchain Assets"
              info="In contrast to assets stored with traditional financial institutions, no entity can put assets on hold or prevent you from transacting when using Unstoppable."
              rtl dark>

          <Feature
            icon="non-custodial"
            onMouseEnter={() => onMouseEnter('hand', 'non-custodial')}
            isActive={feature.hand === 'non-custodial'}
            title="Non Custodial"
            info="Have exclusive control over funds without relying on a custodian entity." />
          <Feature
            icon="wallet"
            onMouseEnter={() => onMouseEnter('hand', 'wallet')}
            isActive={feature.hand === 'wallet'}
            title="Multi Wallet"
            info="Safely manage multiple wallets capable of storing any token in a single app." />
          <Feature
            icon="pie"
            onMouseEnter={() => onMouseEnter('hand', 'portfolio')}
            isActive={feature.hand === 'portfolio'}
            title="Portfolio Tracker"
            info={
              <>
                Analyze and monitor portfolio performance over time. <a href="/" className="text-nowrap text-decoration-none">Coming Soon</a>
              </>
            } />
        </Page>
      </div>
      <div id="page-3" className="Page-black">
        <Page img="independence"
              onMouseLeave={() => onMouseLeave('independence')}
              featureImg={feature.independence}
              text="Go Borderless"
              info="Bypass the traditional finance layer entirely and enter the boundless world of Decentralized Finances (DeFi) with unmatched opportunities.">

          <Feature
            icon="swap"
            onMouseEnter={() => onMouseEnter('independence', 'swap')}
            isActive={feature.independence === 'swap'}
            title="DeFi Enabled"
            info="Swap assets and put assets to work in income-generating opportunities." />

          <Feature
            icon="chart"
            onMouseEnter={() => onMouseEnter('independence', 'market')}
            isActive={feature.independence === 'market'}
            title="Market Analytics"
            info="Discover crypto markets with institutional-grade analytics features." />

          <Feature
            icon="ring"
            onMouseEnter={() => onMouseEnter('independence', 'search')}
            isActive={feature.independence === 'search'}
            title="Action Alerts"
            info="Be among the first to react to price-impacting market events." />

        </Page>
      </div>
      <div id="page-4" className="Page-dark">
        <Page img="face"
              onMouseLeave={() => onMouseLeave('face')}
              featureImg={feature.face}
              text="Stay Private"
              info="Use an instrument that takes extra privacy measures making it much harder for anyone to know who you are and what are you up to."
              rtl>

          <Feature
            icon="stop"
            onMouseEnter={() => onMouseEnter('face', 'no-data')}
            isActive={feature.face === 'no-data'}
            title="No data"
            info="There are no servers keeping user accounts or any kind of identifiers." />

          <Feature
            icon="user"
            onMouseEnter={() => onMouseEnter('face', 'no-kyc')}
            isActive={feature.face === 'no-kyc'}
            title="No KYC"
            info="There are no identity checks that may potentially expose sensitive data to the outer world." />

          <Feature
            icon="incognito"
            onMouseEnter={() => onMouseEnter('face', 'privacy')}
            isActive={feature.face === 'privacy'}
            title="Privacy settings"
            info="Keep the context of your connectivity private even from your internet provider." />

        </Page>
      </div>
      <div id="page-5" className="Page-black">
        <Wallet />
      </div>
      <div id="page-6" className="Page-dark">
        <Join />
      </div>
      <div id="page-7" className="Page-dark">
        <Footer />
      </div>
    </div>
  )
}

export default App
