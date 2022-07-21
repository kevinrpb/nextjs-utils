import React from 'react'

import dynamic from 'next/dynamic'

const AiIcon = (name) =>
  dynamic(async () => {
    const _module = await import('react-icons/ai')
    return _module[name]
  })

const BiIcon = (name) =>
  dynamic(async () => {
    const _module = await import('react-icons/bi')
    return _module[name]
  })

const FaIcon = (name) =>
  dynamic(async () => {
    const _module = await import('react-icons/fa')
    return _module[name]
  })

const FiIcon = (name) =>
  dynamic(async () => {
    const _module = await import('react-icons/fi')
    return _module[name]
  })

const GiIcon = (name) =>
  dynamic(async () => {
    const _module = await import('react-icons/gi')
    return _module[name]
  })

const _imports = {
  'Ai': AiIcon,
  'Bi': BiIcon,
  'Fa': FaIcon,
  'Fi': FiIcon,
  'Gi': GiIcon,
}

const ImportedIcon = (name) => {
  const prefix = name.substring(0, 2)

  if (prefix in _imports)
    return _imports[prefix](name)
  else
    return undefined
}

const DynamicIcon = ({ name, ...rest }) => {
    const Component = ImportedIcon(name)

    return (
      <>
        {Component != undefined ? <Component {...rest} /> : `__icon__${name}`}
      </>
    )
  }

  export default DynamicIcon
