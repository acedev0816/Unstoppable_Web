import React from 'react'

import Container from '../Container'
import Slider from '../Slider'
import Icon from '../Icon'
import Card from '../Card'

import './Wallet.scss'
import GetWallet from '../GetWallet'

function Wallet() {
  return (
    <div className="Wallet">
      <Container clipped={false}>
        <div className="Section-head">
          <div className="Section-icon">
            <Icon name="wallet" />
          </div>
          <div className="Section-text">
            One wallet for all major cryptocurrencies
          </div>
          <div className="Section-info">
            Store and manage over 60 cryptocurrencies and hundreds of crypto tokens on all major blockchains.
          </div>
        </div>
      </Container>
      <Container className="Section-image">
        <img
          className="Wallet-screen"
          src="/images/wallet/coins.jpg"
          srcSet="/images/wallet/coins@2x.jpg 2x"
          alt=""
        />
      </Container>
      <Container>
        <div className="Wallet-purpose">
          <Slider slidesToScroll={3} slidesToShow={3}>
            <Card
              number="1"
              title="Who is it for?"
              info="For those who hold financial independence, wealth privacy and open access to markets in high regard." />
            <Card
              number="2"
              title="What is it for?"
              info="For seamless investing in cryptocurrency and blockchain projects, making them understandable and accessible." />
            <Card
              number="3"
              title="Why this wallet?"
              info="It enables anyone to privately access financial services without risk of confiscation or fear of being censored." />
          </Slider>
        </div>
        <div className="Section-head">
          <div className="Section-icon">
            <Icon name="phone" />
          </div>
          <div className="Section-text">
            Intuitive and powerful
          </div>
          <div className="Section-info">
            Manage your assets in a responsive and user-friendly interface. Unstoppable engineered using native iOS and Android programming languages
            and therefore able to provide better performance, smoother interface and overall wider selection of features.
          </div>
        </div>
      </Container>
      <Container className="Section-image Section-image-big">
        <img
          className="Wallet-screen"
          src={`/images/wallet/screens.png`}
          srcSet={`/images/wallet/screens@2x.png 2x, /images/wallet/screens@3x.png 3x`}
          alt=""
        />
      </Container>
      <div className="Wallet-download">
        <GetWallet  />
      </div>
    </div>
  )
}

export default Wallet
