import React from 'react';

import {withStore} from '@spyna/react-store'

function toFixed(num, precision) {
    return (+(Math.round(+(num + 'e' + precision)) + 'e' + -precision)).toFixed(precision);
}

class TotalSupplyContainer extends React.Component {
    render() {
      const {store} = this.props
      const chaiTotalSupply = store.get('chaiTotalSupply')
      if (chaiTotalSupply) {
        return (<p>Dai locked in Chai: {toFixed(chaiTotalSupply,2)} DAI</p>)
      } else {
        return ""
      }
    }
}

export default withStore(TotalSupplyContainer)
