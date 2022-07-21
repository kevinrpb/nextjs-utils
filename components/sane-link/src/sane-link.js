import React from 'react'

import Link from 'next/link'

const SaneLink = (props) => {
  const { children, onClick, href } = props

  // If the link is local it will start with a '/' or '#'
  // Otherwise it'll be something like 'https://'
  return href.startsWith('/') || href.startsWith('#') || href === '' ? (
    <Link {...props}>
      <a onClick={onClick} {...props}>
        {children}
      </a>
    </Link>
  ) : (
    <a onClick={onClick} {...props} target='_blank' rel='noopener noreferrer'>
      {children}
    </a>
  )
}

export default SaneLink
