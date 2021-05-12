// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

import ClapprCore, { Loader } from '@guzzj/clappr-core'
import { Plugins, Vendor } from '@guzzj/clappr-plugins'

const version = VERSION

for (let plugin of Object.values(Plugins))
  Loader.registerPlugin(plugin)

// TODO: remove on 0.5.x (backward-compatibility only)
const {
  ClickToPause,
  ClosedCaptions,
  DVRControls,
  EndVideo,
  ErrorScreen,
  Favicon,
  GoogleAnalytics,
  MediaControl,
  Poster,
  SeekTime,
  SpinnerThreeBounce,
  Stats,
  WaterMark,
} = Plugins

export default {
  ...ClapprCore,
  ClickToPause,
  ClosedCaptions,
  DVRControls,
  EndVideo,
  ErrorScreen,
  Favicon,
  GoogleAnalytics,
  MediaControl,
  Poster,
  SeekTime,
  SpinnerThreeBounce,
  Stats,
  WaterMark,
  Vendor,
  Plugins,
  version,
}
