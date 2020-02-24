import {React, Component, Link} from 'libraries';
import {View} from 'components/atoms';

class BaseHeader extends Component {
  render() {
    return(
      <View id="header">
      <View className="o-brandTitle">
        <Link to="/" style={{textDecoration: 'none', color: '#009688'}}>
          <h1>Al-Qur'an{' '}<strong style={{color: '#222'}}>Indonesia</strong></h1>
        </Link>
      </View>
    </View>
    )
  }
}

export default BaseHeader;