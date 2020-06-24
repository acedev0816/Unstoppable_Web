import React from 'react'

import Container from '../Container'
import List from '../List'
import Button from '../Button'

import './Banner.scss'

function Banner() {
  return (
    <Container clipped={false}>
      <div className="Banner">
        <div className="Banner-start">
          <img
            className="Banner-img"
            src="/images/banner/coins.png"
            alt=""
          />
        </div>
        <div className="Banner-end">
          <div className="Banner-text">
            Your Guide To Crypto Investments
          </div>
          <div className="Banner-action">
            <List>
              <Button
                text="Google Play" icon="google-play"
                link="https://play.google.com/store/apps/details?id=io.horizontalsystems.bankwallet" yellow />
              <Button
                text="App Store" icon="app-store"
                link="https://itunes.apple.com/app/bank-bitcoin-wallet/id1447619907?ls=1&mt=8" yellow />
              <Button
                text="Download APK" icon="download"
                link="https://github.com/horizontalsystems/bank-wallet-android/releases" />
            </List>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Banner
