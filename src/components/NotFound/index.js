import {NotFoundContainer, Heading, Desc, Image} from './styledComponents'

import CartContext from '../../context/CartContext'

const NotFound = () => (
  <CartContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const imageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      const isDark = isDarkTheme ? 'white' : 'black'

      return (
        <>
          <NotFoundContainer isDark={isDark}>
            <Image src={imageUrl} alt="not found" />
            <Heading isDark={isDark}>Page Not Found</Heading>
            <Desc isDark={isDark}>
              We are sorry, the page you requested could not be found.
            </Desc>
          </NotFoundContainer>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default NotFound
