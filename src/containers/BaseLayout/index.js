import {React, Component, PropTypes, Link} from 'libraries'
import { Container, View } from 'components'

class BaseLayout extends Component {
  static propTypes = {
    children: PropTypes.any,
    showHeader: PropTypes.bool
  }

  static defaultProps = {
    showHeader: true
  }
  render(){
    return(
        <Container style={{margin: 'auto',paddingTop: '10%', maxWidth: 1020, background: '#FFF', position:'relative'}}>
          {this.props.showHeader && (
            <View id="header">
            <View className="o-brandTitle">
              <Link to="/" style={{textDecoration: 'none', color: '#009688'}}>
                <h1>{this.props.title}</h1>
              </Link>
            </View>
          </View>
          )}
          {this.props.children}
        </Container>
    )
  }
}

export default BaseLayout;