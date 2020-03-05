import {React, Component, _, Link} from 'libraries';
import {  View, Section } from 'components/atoms';
import { BaseLayout } from 'containers';
import { IoIosAnalytics, IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import {  LoadingBar, ListAyah } from 'components';

class Surah extends Component {
  constructor(props){
    super(props);
    this.state = {
      surah: [],
      ayat: [],
      translateAyah: [],
      showPanel: false,
      showTranslate: false
    }
  }


  componentDidMount() {
    this.getSurah()
  }


  getSurah = async(idSurah) => {
    const id = idSurah ? idSurah : this.props.match.params.id
    // const payload1 = {
    //   path: `${id}`
    // }
    // const payload2 = {
    //   path: `${id}/id.indonesian`
    // }
    try {
      // const resSurah = await API.GetAllSurah(payload1);
      // const resTerjemahan = await API.GetAllSurah(payload2);

      const resSurah =  await fetch(`https://api.alquran.cloud/v1/surah/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        return responseJson
      });
    
      const resTerjemahan = await fetch(`https://api.alquran.cloud/v1/surah/${id}/id.indonesian`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        return responseJson
      });

      const surah = _.get(resSurah, 'data', null);
      const ayat = _.get(surah, 'ayahs', []);
      const translate = _.get(resTerjemahan, 'data.ayahs', []);

      const mergeAyat = ayat.map((val, i) => {
        return {
          ...val,
          translate: translate[i],
        }
      });

      this.setState({
        ayat: mergeAyat,
        surah: surah
      }, () => {
        document.title = `surah - ${surah.englishName}`
      })
    } catch (err) {
      console.log(`error!`,err)
      alert(err);
      window.location.reload();
    }
  }

  handleShowPanel = () => {
    this.setState({
      showPanel: !this.state.showPanel
    })
  }

  handleShowTl = () => {
    this.setState({
      showTranslate: !this.state.showTranslate
    })
  }

  handleNextPages = () => {
    const id = this.props.match.params.id;
    const dataId = parseFloat(id);
    const amountId = dataId + 1;
    if(amountId > 114) {
      return alert('Sudah Mencapai Surah Terakhir');
    }
    const {history} = this.props;
    history.push(`/quran/surah/${amountId}`);
    this.setState({
      ayat: [],
      showPanel: false
    }, () => {
      this.getSurah(amountId);
    })
  }

  handlePreviousPages = () => {
    const id = this.props.match.params.id;
    const dataId = parseFloat(id);
    const amountId = dataId - 1;
    if(amountId < 1) {
      return alert('Anda Sudah Mencapai Surah Pertama')
    }
    const {history} = this.props;
    history.push(`/quran/surah/${amountId}`);
    this.setState({
      ayat: [],
      showPanel: false
    }, () => {
      this.getSurah(amountId)
    })
  }

  RenderPanel = () => {
    const { surah, showPanel } = this.state;
    return(
      <View className={`panelWrapper ${showPanel ? 'show' : ''}`}>
        <View style={{position:'relative'}} className="panel_close" onClick={this.handleShowPanel}>
          <span>X</span>
        </View>
        <View className="panelWrapper__items row">
          <View className="panelWrapper__col">
          <h3 style={{padding: 0, margin: 0, marginBottom: 10}}>Detail Surah</h3>
            <table>
              <tbody>
                <tr>
                  <td>Nama Surah</td>
                  <td style={{padding: '0 10px'}}>:</td>
                  <td>{surah.englishName}</td>
                </tr>
                <tr>
                  <td>Jumlah Ayat</td>
                  <td style={{padding: '0 10px'}}>:</td>
                  <td>{surah.numberOfAyahs}</td>
                </tr>
                <tr>
                  <td>Di Turunkan</td>
                  <td style={{padding: '0 10px'}}>:</td>
                  <td>{surah.revelationType}</td>
                </tr>
              </tbody>
            </table>
          </View>
          <View className="panelWrapper__col row">
            <span onClick={this.handlePreviousPages}><IoIosArrowDropleft size="20px" /></span>
            <span onClick={this.handleShowTl}>Terjemahan</span>
            <span onClick={this.handleNextPages}><IoIosArrowDropright size="20px" /></span>
          </View>
        </View>
      </View>
    )
  }

  render(){
    const { surah, ayat, showTranslate } = this.state;
    const pageTitle = `Surah : ${surah.englishName}`
    const checkAyah = ayat.filter(dataItem => {
      return dataItem
    })
    const bissmillah =  checkAyah[0] ? checkAyah[0].text.replace("بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ") : null;
    
    return(
      <BaseLayout showHeader={true} title={`${surah.englishName ? pageTitle : ''}`} className="quran-section" linkTo="/quran">
        <Section className="list-section" style={{position: 'relative'}}>
          <View className="content-ayah">
          <View className="p-contentAyah__items row">
              {surah.englishName !== "Al-Faatiha" ? <View className="bismillah">{bissmillah}</View> : null}
            </View>
            <View className="row">
              {!_.isEmpty(ayat) && _.isArray(ayat)
               ? ayat.map((data, i) => {
                 let parsingData = data.text.split("بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ");
                 return (
                     <ListAyah data={data} key={i} surah={surah} parsingData={parsingData} showTranslate={showTranslate} />
                )
               }) : 
              (
                <Section style={{padding: '40px 0', margin: 'auto'}}>
                  <LoadingBar />
                </Section>
              )}
            </View>
            <View className="open-panel bounce" onClick={this.handleShowPanel}><IoIosAnalytics size="30px" /></View>
            <this.RenderPanel />
          </View>
        </Section>
      </BaseLayout>
    )
  }
}

export default Surah;