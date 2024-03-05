import React from 'react'
import { HeaderWrapper, Logo } from './styles'
import { Link } from 'react-router-dom'
import CitySelect from './CitySelect/CitySelect'

const Header = () => {
  return (
    // as 로 header로 태그명 변경
    <HeaderWrapper as="header">
      <Logo>
        <Link to="/">
          <img src="./images/logo.svg" alt="logo" />
        </Link>
        <h2>날씨 앱</h2>
      </Logo>
      <CitySelect />
    </HeaderWrapper>
  )
}

export default Header

