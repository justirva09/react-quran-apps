import {React, Component, _} from 'libraries';
import { Container, View, Image, Button, Section } from 'components/atoms';
import { BaseLayout } from 'containers';
import { CardHome, LoadingBar } from 'components';
import dataHome from 'assets/JSON/contentHome.js';

class Homepage extends Component {
  componentDidMount() {
    document.title = "Qur'an - Indonesia"
  }

  render(){
    return(
      <BaseLayout title="Aika - Apps">
        <Section style={{padding: '40px 0'}}>
          <View style={{margin:'auto', maxWidth: 900}}>
          <View className="row">
            {!_.isEmpty(dataHome) && _.isArray(dataHome) ? dataHome.map((data, index) => (
              <CardHome data={data} key={index} />
            )) : (
              <View style={{margin: 'auto'}}>
                <LoadingBar />
              </View>
            )}
          </View>
          </View>
        </Section>
      </BaseLayout>
    )
  }
}

export default Homepage;