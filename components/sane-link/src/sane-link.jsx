import React from 'react'

import Link from 'next/link'

const SaneLink = (props) => {
  const { children, href, ...otherProps } = props

  // If the link is local it will start with a '/' or '#'
  // Otherwise it'll be something like 'https://'
  return href.startsWith('/') || href.startsWith('#') || href === '' ? (
    <Link href={href} {...otherProps}>
      {children}
    </Link>
  ) : (
    <a href={href} {...otherProps} target='_blank' rel='noopener noreferrer'>
      {children}
    </a>
  )
}

export default SaneLink
