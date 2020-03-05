import {React, Component, _, Fragment} from 'libraries';
import { View, Section } from 'components/atoms';
import { ListSurah, LoadingBar } from 'components/molecules';


class QuranSection extends Component {
  constructor(props){
    super(props);
    this.state = {
      alquran: [],
      isLoading: false,
      filterSearch: ''
    }
  }

  componentDidMount() {
    this.getAllSurah();
  }


  filterController = e => {
    this.setState({
      filterSearch: e.target.value
    })
  }

  filterQuery = () => {
    const { filterSearch, alquran } = this.state;
    return alquran.filter(
      queryData => 
          queryData.name.toLowerCase().indexOf(filterSearch.toLowerCase()) !== -1
          ||
          queryData.englishName.toLowerCase().indexOf(filterSearch.toLowerCase()) !== -1 
          ||
          queryData.revelationType.toLowerCase().indexOf(filterSearch.toLowerCase()) !== -1
    )
  }


  getAllSurah = () => {
    try{
      fetch('https://api.alquran.cloud/v1/surah')
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        console.log(responseJson)
        this.setState({
          alquran: responseJson.data
        })
      });
    }catch(err) {
      console.log(`error!`, err)
    }
  }


  render() {
    const {alquran} = this.state;
    const dataQuran = this.filterQuery()
    return(
      <Fragment>
        <View className="m-searchField">
          <input type="text" onChange={this.filterController} placeholder="Search Surah"/>
        </View>
        <View className="row">
          {!_.isEmpty(dataQuran) && _.isArray(dataQuran) 
          ? dataQuran.map((data, index) => ((
            <ListSurah data={data} key={index} />
            ))) : (
              <Section style={{padding: '40px 0', margin: 'auto'}}>
                <LoadingBar />
              </Section>
            )}
        </View>
      </Fragment>
    )
  }
}

export default QuranSection;