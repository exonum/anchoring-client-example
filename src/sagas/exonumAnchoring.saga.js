import anchoring from 'utils/anchoring'

export default function * exonumAnchoring () {
  anchoring.on('loaded', e => console.log('loaded', e))
  anchoring.on('initialized', e => console.log('initialized', e))
  anchoring.on('error', e => console.log('error', e))
}
