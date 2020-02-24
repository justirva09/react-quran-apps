import {React, PropTypes, Link} from 'libraries';
import {View, Text} from 'components/atoms';

const ListSurah = ({ data }) => (
  <Link className="m-listSurah" style={{textDecoration: 'none'}} to={`/quran/surah/${data.number}`}>
  <View className="m-listSurah--Items row">
    <View className="m-numberSurah">
      {data.number}
    </View>
    <View className="m-detailSurah">
      <Text>{data.englishName} - {data.name}</Text>
      <Text>{data.numberOfAyahs} - {data.revelationType}</Text>
    </View>
  </View>
</Link>
);


ListSurah.propTypes = {
  data: PropTypes.object
}

export default ListSurah;