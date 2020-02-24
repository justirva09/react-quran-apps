import {React, Component, _} from 'libraries';
import { View, Section } from 'components/atoms';
import { API } from 'config';
import { ListSurah, LoadingBar } from 'components/molecules';


class QuranSection extends Component {
  constructor(props){
    super(props);
    this.state = {
      alquran: [],
      isLoading: false
    }
  }

  componentDidMount() {
    this.getAllSurah();
  }



  // testGetSurah = () => {
  //   fetch('http://api.alquran.cloud/v1/surah')
  // .then((response) => {
  //   return response.json();
  // })
  // .then((myJson) => {
  //   console.log(myJson);
  // });
  // }


  getAllSurah = () => {
    try{
      fetch('http://api.alquran.cloud/v1/surah')
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
    return(
      <View className="row">
        {!_.isEmpty(alquran) && _.isArray(alquran) 
        ? alquran.map((data, index) => ((
            <ListSurah data={data} key={index} />
          ))) : (
            <Section style={{padding: '40px 0', margin: 'auto'}}>
              <LoadingBar />
            </Section>
          )}
      </View>
    )
  }
}

export default QuranSection;