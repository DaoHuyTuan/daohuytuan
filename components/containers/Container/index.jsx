import { ContainerWrapper } from './Container.style'
const Container = React.memo(({ children, clssName }) => {
  return <ContainerWrapper className={clssName ? clssName : ''}>{children}</ContainerWrapper>
})

export default Container
