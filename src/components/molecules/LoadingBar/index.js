import {React, PropTypes} from 'libraries';
import { Image, View } from 'components/atoms';
import animation from 'assets/images/animation.gif';

const LoadingBar = () => (
  <View className="animation">
    <Image source={animation} alt="animation" />
  </View>
)

export default LoadingBar;