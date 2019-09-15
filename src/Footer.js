import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { PageTransContext } from './contexts/pageTransContext'

const getGnb = () => {
  return [
    {
      to: '/',
      name: '쯔위'
    },
    {
      to: '/2',
      name: '손나은'
    },
    {
      to: '/3',
      name: '수지'
    },
    {
      to: '/4',
      name: '아이유'
    },
    {
      to: '/5',
      name: '설현'
    }
  ]
}

const getTransDirection = (gnb, gnbIndex) => {
  let pageDirection = 'trans toRight'
  const matched = gnb.find(menu => menu.to === window.location.pathname)
  let matchedIndex = gnb.indexOf(matched)

  if (matchedIndex === -1) {
    matchedIndex = 1
  }

  if (gnbIndex !== matchedIndex) {
    if (gnbIndex >= matchedIndex) {
      pageDirection = 'trans toRight'
    } else {
      pageDirection = 'trans toLeft'
    }
  }

  return pageDirection
}

const Footer = () => {
  const { setPageTrans } = useContext(PageTransContext)

  const gnb = getGnb()

  const handleOnClick = index => {
    const direction = getTransDirection(gnb, index)
    setPageTrans(direction)
  }

  return (
    <nav className="footer">
      {gnb.map((menu, i) => (
          <Link
            key={`gnb-${i}`}
            to={`${menu.to}`}
            exact={menu.exact}
            onClick={() => handleOnClick(i)}
          >
            {menu.name}
          </Link>
        ))}
    </nav>
  )
}

export default Footer;
