import BaseExports from './base_bundle'

import HLS from '@guzzj/hlsjs-playback'

BaseExports.Loader.registerPlayback(HLS)

export default {
  ...BaseExports,
  HLS,
}
