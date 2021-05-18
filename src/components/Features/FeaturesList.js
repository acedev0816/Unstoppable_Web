import React from 'react'
import Container from '../Container'
import { ReactComponent as Bitcoin } from './bitcoin.svg'
import { ReactComponent as Timelock } from './timelock.svg'
import { ReactComponent as Settings } from './settings.svg'
import { ReactComponent as Dash } from './dash.svg'
import { ReactComponent as Litecoin } from './litecoin.svg'
import { ReactComponent as BitcoinCash } from './bitcoin-cash.svg'
import { ReactComponent as ZCash } from './zcash.svg'
import { ReactComponent as Ethereum } from './ethereum.svg'
import { ReactComponent as Binance } from './binance.svg'
import { ReactComponent as Blocks } from './blocks.svg'
import { ReactComponent as WalletConnect } from './wallet-connect.svg'
import { ReactComponent as User } from './user.svg'
import { ReactComponent as Tor } from './tor.svg'
import { ReactComponent as Globe } from './globe.svg'
import { ReactComponent as Academy } from './academy.svg'

function FeaturesList() {
  return (
    <Container>
      <div className="Section-space-top Section-space-bottom">
        <div className="text-center pb-5 display-5">Features List</div>
        <div className="row">
          <ul className="col-sm-12 col-md-6 col-lg-3 list-unstyled">
            <li className="py-1"><Bitcoin className="me-3" />Bitcoin (SPV enabled)</li>
            <li className="py-1"><Bitcoin className="me-3" />BIP 44/49/84/69</li>
            <li className="py-1"><Timelock className="me-3" />Bitcoin Timelocks</li>
            <li className="py-1"><Settings className="me-3" />Custom transaction fees</li>
          </ul>

          <ul className="col-sm-12 col-md-6 col-lg-3 list-unstyled">
            <li className="py-1"><Dash className="me-3" />DASH (SPV enabled)</li>
            <li className="py-1"><Litecoin className="me-3" />Litecoin (SPV enabled)</li>
            <li className="py-1"><BitcoinCash className="me-3" />Bitcoin Cash (SPV enabled)</li>
            <li className="py-1"><ZCash className="me-3" />Zcash (shielded support)</li>
          </ul>

          <ul className="col-sm-12 col-md-6 col-lg-3 list-unstyled">
            <li className="py-1"><Ethereum className="me-3" />Ethereum (ERC20)</li>
            <li className="py-1"><Binance className="me-3" />Binance (BEP20 / BEP2)</li>
            <li className="py-1"><Blocks className="me-3" />Uniswap / Pancake / 1inch</li>
            <li className="py-1"><WalletConnect className="me-3" />Wallet Connect</li>
          </ul>
          <ul className="col-sm-12 col-md-6 col-lg-3 list-unstyled">
            <li className="py-1"><User className="me-3" />ENS Domains</li>
            <li className="py-1"><Tor className="me-3" />TOR Network (Android)</li>
            <li className="py-1"><Globe className="me-3" />VPN (coming soon)</li>
            <li className="py-1"><Academy className="me-3" />Crypto Academy</li>
          </ul>
        </div>
      </div>
    </Container>
  )
}

export default FeaturesList
