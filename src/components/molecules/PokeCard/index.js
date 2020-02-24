import {React, PropTypes, Link} from 'libraries';
import {Image, View} from 'components/atoms';
import Text from 'components/atoms/Text';

const PokeCard = ({ data }) => {
  const backgroundColor = {
    background: `${data.type[0] === 'water' ? '#4592c4' : ''
    || data.type[0] === 'grass' ? '#9bcc50' : ''
    || data.type[0] === 'fire' ? '#fd7d24' : ''
    || data.type[0] === 'bug' ? '#729f3f' : ''}
`}

return(
  <View className="m-pokeCard">
  <View className="m-pokeCardItem">
    <View className="m-pokeCardThumbnail">
      <Image source={data.thumbnail} alt={data.title} />
      <Text 
        className="m-pokeType"
        style={backgroundColor}>
          <Link 
            style={{textDecoration: 'none', color: '#FFF', textTransform: 'uppercase'}} 
            to={`/type-poke/${data.type[0]}`}
          >
            {data.type[0]}
          </Link>
        </Text>
    </View>
    <View className="m-pokeCardBody">
        <Link to={`/detail-poke/${data.id}/${data.name}`}>{data.title}</Link>
    </View>
  </View>
</View>
)}

PokeCard.defaultProps = {
  data: {
    id: 1,
    thumbnail: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png',
    title: 'Bulbasaur',
    type: 'Grass'
  }
}


PokeCard.propTypes = {
  data: PropTypes.object
}
export default PokeCard;