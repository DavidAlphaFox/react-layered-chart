import * as React from 'react';
import * as ReactDOM from 'react-dom';

import STATIC_CHART from './StaticChart';
import BASIC_INTERACTIVE_CHART from './BasicInteractiveChart';
import CONTROLLED_INTERACTIVE_CHART from './ControlledInteractiveChart';
import CONNECTED_INTERACTIVE_CHART from './ConnectedInteractiveChart';
import COMPLICATED_CHART from './ComplicatedChart';

import '../styles/index.less';
import './example-styles.less';

const APP_ELEMENT = document.getElementById('app');

const TEST_COMPONENT = (
  <div className='container'>
    <div className='explanation'>This is a basic, static chart. It is not interactive.</div>
    {STATIC_CHART}
    <div className='explanation'>This is a basic interactive chart. Drag to pan and scroll to zoom.</div>
    {BASIC_INTERACTIVE_CHART}
    <div className='explanation'>This chart is pannable, but with limits.</div>
    {CONTROLLED_INTERACTIVE_CHART}
    <div className='explanation'>This chart is pannable and zoomable, and can be reset by clicking the button.</div>
    {CONNECTED_INTERACTIVE_CHART}
    <div className='explanation'>This chart implements a bunch of features from around the library all in one.</div>
    <div className='explanation'>Drag to pan, zoom to scroll and shift-drag to draw a selection.</div>
    {COMPLICATED_CHART}
  </div>
);

// This setTimeout fixes a demo-only issue where Webpack's delivery of the CSS via JS injection comes too late and the
// polling canvas layers render for a split second too small. It's not a library bug, just a side effect of the way that
// Webpack's style-loader injects styles interacting poorly with react-layered-chart checking how large a <canvas> is.`
setTimeout(() => {
  ReactDOM.render(TEST_COMPONENT, APP_ELEMENT);
}, 50);
