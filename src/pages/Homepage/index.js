import {React, Component, Link} from 'libraries';
import { Container, View, Image, Button, Section } from 'components/atoms';
import { BaseLayout } from 'containers';
import { PokeCard } from 'components/molecules';
import { CardSection, QuranSection } from 'components';


class Homepage extends Component {
  componentDidMount() {
    document.title = "Qur'an - Indonesia"
  }

  render(){
    return(
      <BaseLayout title="List Surah">
        <Section style={{padding: '40px 0'}}>
          <QuranSection />
        </Section>
      </BaseLayout>
    )
  }
}

export default Homepage;