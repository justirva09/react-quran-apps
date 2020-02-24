import {React, Component, Link} from 'libraries';
import { Container, View, Image, Button, Section } from 'components/atoms';
import { BaseLayout } from 'containers';
import { IoMdBook } from "react-icons/io";

class Homepage extends Component {
  componentDidMount() {
    document.title = "Qur'an - Indonesia"
  }

  render(){
    return(
      <BaseLayout title="Aika - Apps">
        <Section style={{padding: '40px 0'}}>
          <View className="row">

            <View className="m-colMenu">
              <View className="m-colMenu__items">
                <View className="m-colMenu__thumbnail">
                  <IoMdBook size="105px" />
                </View>
                <View className="m-colMenu__body">
                  <Link to="/quran">
                    Baca Qur'an
                  </Link>
                </View>
              </View>
            </View>

            <View className="m-colMenu">
              <View className="m-colMenu__items">
                <View className="m-colMenu__thumbnail">
                Cooming Soon
                </View>
                <View className="m-colMenu__body">
                Cooming Soon
                </View>
              </View>
            </View>

            <View className="m-colMenu">
              <View className="m-colMenu__items">
                <View className="m-colMenu__thumbnail">
                Cooming Soon
                </View>
                <View className="m-colMenu__body">
                Cooming Soon
                </View>
              </View>
            </View>

            <View className="m-colMenu">
              <View className="m-colMenu__items">
                <View className="m-colMenu__thumbnail">
                  Cooming Soon
                </View>
                <View className="m-colMenu__body">
                  Baca Qur'an
                </View>
              </View>
            </View>

            <View className="m-colMenu">
              <View className="m-colMenu__items">
                <View className="m-colMenu__thumbnail">
                Cooming Soon
                </View>
                <View className="m-colMenu__body">
                  Cooming Soon
                </View>
              </View>
            </View>

            <View className="m-colMenu">
              <View className="m-colMenu__items">
                <View className="m-colMenu__thumbnail">
                  Cooming Soon
                </View>
                <View className="m-colMenu__body">
                  Cooming Soon
                </View>
              </View>
            </View>
            
          </View>
        </Section>
      </BaseLayout>
    )
  }
}

export default Homepage;