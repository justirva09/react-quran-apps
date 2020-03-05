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
    const {history} = this.props;
    return(
        <Container className={this.props.className} style={{margin: 'auto',paddingTop: '10%', maxWidth: 1020, position:'relative'}}>
          {this.props.showHeader && (
            <View id="header">
            <View className="o-brandTitle">
              <Link to={this.props.linkTo} style={{textDecoration: 'none', color: '#009688'}}>
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