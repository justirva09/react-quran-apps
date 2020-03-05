import {React, PropTypes, Link} from 'libraries';
import {View} from 'components';

const CardHome = ({data}) => (
  <View className="m-colMenu">
  <View className="m-colMenu__items">
    <View className="m-colMenu__thumbnail">
      <img src={`${data.image}`} alt={data.title} />
    </View>
    <View className="m-colMenu__body">
      <Link to={data.linkTo}>
        {data.title}
      </Link>
    </View>
  </View>
</View>
)

CardHome.propTypes = {
  data: PropTypes.object
}

CardHome.defaultProps = {
  data: {
    title: 'Cooming Soon',
    image: 'No Image Avaible',
    linkTo: () =>  alert(`test`)
  }
}

export default CardHome;