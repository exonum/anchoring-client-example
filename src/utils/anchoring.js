import exonum from 'exonum-client-anchoring'

const anchoring = () => {
  const config = {
    driver: new exonum.drivers.Smartbit({
      token: null,
      network: 'testnet'
    }),
    provider: {
      nodes: ['http://127.0.0.1:8022']
    }
  }
  return new exonum.Anchoring(config)
}

export default anchoring()
