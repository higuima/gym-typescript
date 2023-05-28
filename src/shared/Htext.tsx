import React from 'react'

type Props = {
    children: React.ReactNode;
}

const Htext = ({children}: Props) => {
  return (
    <h1 className="baiss-3/5 font-montserrat text-3xl font">{children}</h1>
  )
}

export default Htext