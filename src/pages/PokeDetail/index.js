import {React, Component} from 'libraries';
import { Container, View, Section, Image } from 'components/atoms';
import { BaseLayout } from 'containers';
import Text from 'components/atoms/Text';
import dataDetail from 'assets/JSON/pokeDex.json';

class PokeDetail extends Component {
  constructor(props){
    super(props);
    console.log(`props`,this.props)
  }
  componentDidMount() {
    document.title = "Poke Detail- PokeDex"
  }
  render(){
    let id  = this.props.match.params.id;
    const data = dataDetail.filter(data => data.id == id)
    const pokemonDetail = data[0];
    console.log(pokemonDetail)
    const backgroundColor = {
      background: `${pokemonDetail.type[0] === 'water' ? '#4592c4' : ''
      || pokemonDetail.type[0] === 'grass' ? '#9bcc50' : ''
      || pokemonDetail.type[0] === 'fire' ? '#fd7d24' : ''
      || pokemonDetail.type[0] === 'bug' ? '#729f3f' : ''}
  `}
    return(
      <BaseLayout showHeader={true}>
        <Section>
          <View className="o-PokeDetail">
            <View className="o-PokeItem">
              <View className="o-PokeThumbnail">
                <Image source={pokemonDetail.thumbnail} style={backgroundColor}/>
              </View>
              <View className="o-PokeBody">
                <Text tag="h1">{pokemonDetail.name}</Text>
                <Text tag="h5">Description</Text><hr />
                <Text>{pokemonDetail ? pokemonDetail.description : 'Belum ada Deskripsi '}</Text>
                <Text tag="h5">Weaknesses</Text><hr />
                <View className="row">
                  {pokemonDetail.weakness.map((val, i) => (
                    <View key={i} style={{width: '50%', padding: 8, boxSizing: 'border-box'}}>
                      <Text> > {val}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </View>
        </Section>
      </BaseLayout>
    )
  }
}

export default PokeDetail;