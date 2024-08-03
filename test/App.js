import {useImageDimensions} from '@react-native-community/hooks'
import Bugsnag from '@bugsnag/expo'
Bugsnag.start();
Bugsnag.notify()


const source = require('Midjourney.png')


const {dimensions, loading, error} = useImageDimensions(source)

if (loading || error || !dimensions) {
  return null
}
const {width, height, aspectRatio} = dimensions