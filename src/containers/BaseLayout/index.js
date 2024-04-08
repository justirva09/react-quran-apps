import {React, Component, PropTypes, Link} from 'libraries'
import { Container, View } from 'components'

class BaseLayout extends Component {
  static propTypes = {
    children: PropTypes.any,
    showHeader: PropTypes.bool,
    className: PropTypes.string
  }

  static defaultProps = {
    showHeader: true
  }
  render(){
    const pathname = window.location.pathname;

    const isSurahRoute = pathname.startsWith('/surah/');
    return(
        <Container className={this.props.className} style={{margin: 'auto',paddingTop: '10%', maxWidth: 1020, position:'relative'}}>
          {this.props.showHeader && (
            <View id="header">
            <View className="o-brandTitle">
            {!isSurahRoute ? (
                    <h1 style={{color: '#009688'}}>Qur'an Indonesia</h1>
                ) : (
                    <Link to={this.props.linkTo} style={{ textDecoration: 'none', color: '#009688' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 30px' }}>
                            <h1 style={{ fontSize: 18 }}>{this.props.title.name}</h1>
                            <h1 style={{ fontSize: 18 }}>{this.props.title.name} - (<span>{this.props.title.englishName}</span>)</h1>
                            <h1 style={{ fontSize: 18 }}>(<span>{this.props.title.number}</span>)</h1>
                        </div>
                    </Link>
                )}
            </View>
          </View>
          )}
          {this.props.children}
        </Container>
    )
  }
}

export default BaseLayout;