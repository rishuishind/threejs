import React from 'react';
import {useSnapshot} from 'valtio';

import state from '../store';

const Tab = (props) => {
  const snap = useSnapshot(state);
  return (
    <div
    key={props.tab.name}
    className={`tab-btn ${props.isFilterTab ? 'rounded-full glassmorhism' : 'rounded-4'}`}
    onClick={props.handleClick}
    >
      
    </div>
  )
}

export default Tab