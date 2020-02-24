import {React, PropTypes} from 'libraries';
import { View } from 'components/atoms';

const ListAyah = ({ data, surah, parsingData, showTranslate }) => (
    <View className="m-listAyah">
      <View className="m-listAyah__items">
        <View className="m-listAyah__number">
          {data.numberInSurah}
        </View>
        <View className="m-listAyah__ayah">
          { 
            surah.number === 1 ? data.text : data.text
              && 
            (data.numberInSurah === 1 ? parsingData  : data.text)
          }
        </View>
        <View className={`m-listAyah__translate ${!showTranslate ? 'tl-hide' : ''}`} style={{fontSize: 16, padding: '0 50px', lineHeigth: 2, marginTop: 12, fontFamily: 'Quicksand'}}>{data.translate.text}</View>
      </View>
  </View>
);

ListAyah.propTypes = {
  data: PropTypes.object
}

export default ListAyah;