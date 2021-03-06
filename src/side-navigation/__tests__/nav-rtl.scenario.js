/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import * as React from 'react';
import {ThemeProvider, LightTheme} from '../../index.js';
import {component as NavScenario} from './nav.scenario.js';

export const name = 'nav-rtl';

export const component = () => (
  <ThemeProvider theme={{...LightTheme, direction: 'rtl'}}>
    <div dir="rtl">
      <NavScenario />
    </div>
  </ThemeProvider>
);
