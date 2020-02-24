import {React, Component} from 'libraries';
import { Container, View, Image, Button } from 'components/atoms';
import { BaseLayout } from 'containers';
import data from 'assets/JSON/pokeDex.json';
import { PokeCard } from 'components';

class TypeList extends Component {
  constructor(props){
    super(props);
    console.log(this.props)
  }
  componentDidMount() {
    document.title = "Type - PokeDex"
  }
  render(){
    const typePokemon = this.props.match.params.Type;
    const dataPokemon = data.filter(dataItem => {
      console.log('===> ', dataItem.type, typePokemon);
      let found = false;
      dataItem.type.map(xx => {
        if(xx === typePokemon) found = true;
        return;
      })
      return found
    })
    console.log(dataPokemon)
    return(
      <BaseLayout>
      <section className="section-container">
    <h2>Type Pokemon : {typePokemon}</h2><hr />
         <View className="row">
          {dataPokemon.map((data, i) => (
            <PokeCard data={data} key={i} />
          ))}
         </View>
      </section>
      </BaseLayout>
    )
  }
}

export default TypeList;