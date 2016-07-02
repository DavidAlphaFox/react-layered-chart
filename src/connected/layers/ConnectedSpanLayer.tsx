import * as React from 'react';
import { connect } from 'react-redux';

import { Interval, Color, SpanLayer, XSpanDatum } from '../../core';
import { ChartState } from '../model/state';
import { selectData, selectXDomain } from '../model/selectors';
import { SeriesId } from '../interfaces';

export interface OwnProps {
  seriesId: SeriesId;
  fillColor?: Color;
  borderColor?: Color;
}

export interface ConnectedProps {
  data: XSpanDatum[];
  xDomain: Interval;
}

function mapStateToProps(state: ChartState, ownProps: OwnProps): ConnectedProps {
  return {
    data: selectData(state)[ownProps.seriesId],
    xDomain: selectXDomain(state)
  };
}

export default connect(mapStateToProps)(SpanLayer) as React.ComponentClass<OwnProps>;
