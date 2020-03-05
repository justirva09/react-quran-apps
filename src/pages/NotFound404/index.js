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
      <BaseLayout showHeader={false} title={`404 Page Not Found`} className="quran-section" linkTo="/quran">
        <main>
          <div className="p-section">
            <h1>404 Page Not Found!</h1>
            <p>Sorry! The page you're looking for is not here.</p>
            <Link to="/" style={{margin: '20px auto'}} className="p-backButton">Kembali Ke Homepage</Link> 
          </div>
        </main>
      <style>
        {`
        .p-section {
          padding: 0 5rem 5rem 5rem;
          width: 50%;
          align-items: center;
          justify-content: center;
          text-align: center;
      }
        main {
          display: flex;
          align-items: center;
          align-content: center;
          justify-content: center;
          font-family: Quicksand
        }
        html, body, #root {
          height: 100%;
      }
        `}
      </style>
      </BaseLayout>
    )
  }
}

export default NotFound404;
