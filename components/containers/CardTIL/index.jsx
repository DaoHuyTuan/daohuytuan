import React from 'react'
import { CardTILWrapper } from './CardTIL.style'
const CardTIL = React.memo(({ title, summary }) => {
  return <CardTILWrapper>{title}</CardTILWrapper>
})
export default CardTIL
