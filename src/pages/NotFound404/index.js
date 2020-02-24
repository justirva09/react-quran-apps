import {React, Component, Link} from 'libraries';
import { Container, View, Image, Button } from 'components/atoms';
import { BaseLayout } from 'containers';
import { PokeCard } from 'components/molecules';
import { CardSection } from 'components';

class NotFound404 extends Component {
  componentDidMount() {
    document.title = "404: Page Not Found | PokeDex"
  }
  render(){
    return(
      <BaseLayout>
      <section className="section-container">
        <main>
          <Image source="https://assets.pokemon.com/static2/_ui/img/global/psyduck.png" style={{width: '50%',}} /> 
          <div style={{padding:6}}>
            <h2>404 Page Not Found!</h2>
            <p>Sorry! The page you're looking for is not here.</p>
          </div>    
        </main>
        <Link to="/" style={{margin: '20px auto'}} className="p-backButton">Kembali Ke Homepage</Link> 
      </section>
      <style>
        {`
        .section-container {
          padding: 40px 20px;
      }
        main {
          display: flex;
          align-items: center;
          align-content: center;
          justify-content: center;
        }
        `}
      </style>
      </BaseLayout>
    )
  }
}

export default NotFound404;
