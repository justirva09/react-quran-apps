import {React, Component} from 'libraries';
import {View} from 'components/atoms';
import { PokeCard } from 'components/molecules';
import pokemonJson from 'assets/JSON/pokeDex.json';
import { connect } from 'react-redux';
import { setPokemon, clearPokemon } from 'config';


class CardSection extends Component {
  constructor(props){
    super(props);
    this.state = {
      filterSearch: '',
      toggle: false
    }
  }

  componentDidMount() {
    this.props.reduxSetPokemon(pokemonJson)
  }
  
  filterController = e => {
    this.setState({
      filterSearch: e.target.value
    })
  }

  filterQuery = () => {
    const { filterSearch, } = this.state;
    return this.props.dataPokemon.filter(
      queryData => queryData.name.toLowerCase().indexOf(filterSearch.toLowerCase()) !== -1
    )
  }

  

  handleToggle = () => {
    const {toggle} = this.state;
    this.setState({
      toggle: !this.state.toggle
    })

    if(toggle) {
      return this.props.reduxSetPokemon(pokemonJson)
    }

    return this.props.reduxClearPokemon()
  }

  render() {
    const { listPokemon } = this.state;
    const { dataPokemon} = this.props
    const pokemon = this.filterQuery();
    return(
      <View id="card-section">
        <button onClick={this.handleToggle}>ILANGIN</button>
        <input type="text" onChange={this.filterController} style={{border: '1px solid #eee', height: 20,width: 450, margin: '10px auto', borderRadius: 6 }} /><hr />
        <View style={{display: 'flex', flexWrap: 'wrap'}}>
          {pokemon.map((data, i) => (
            <PokeCard data={data} key={i}/>
          ))}
        </View>
    </View>
    )
  }
}

const reduxState = state => {
  console.log(`state ==> `,state);
  return {
    dataPokemon: state.pokemon.data
  }
}


const reduxDispatch = dispatch => {
  console.log(`dispatch ==> `, dispatch)
  return {
    reduxSetPokemon: (p) => dispatch(setPokemon(p)),
    reduxClearPokemon: () => dispatch(clearPokemon())
  }
}

export default connect(reduxState, reduxDispatch)(CardSection);
