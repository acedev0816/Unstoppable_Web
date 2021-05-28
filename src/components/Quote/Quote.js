import React from 'react'
import Container from '../Container'

function Quote() {
  return (
    <Container>
      <div className="Section-space-top Section-space-bottom text-center d-flex justify-content-center">
        <div className="w-75">
          <p className="fs-5">
            “Unstoppable is the first multi-coin wallet that supports Bitcoin, Ethereum, and fully shielded Zcash, as well as other coins, and it has a strong, user-centric architecture in which the users own their own keys and their own privacy."
          </p>
          <p className="text-grey fs-4 pt-5 mt-5">
            Zooko Wilcox-O'Hearn
          </p>
          <small className="text-grey">
            CEO of the Electric Coin Company (ECC)
          </small>
        </div>
      </div>
    </Container>
  )
}

export default Quote
