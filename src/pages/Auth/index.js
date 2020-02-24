import {React, Component, PropTypes} from 'libraries';
import { BaseLayout } from 'containers';
import { View } from 'components';


class Auth extends Component {
  render() {
    return (
      <BaseLayout>
        <View style={{marginBottom: '1rem'}}>
          <label>Laki</label>
          <input type="radio" value="L" checked="" />
        </View>
      </BaseLayout>
    )
  }
}

export default Auth;