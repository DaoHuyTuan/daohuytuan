import { ContainerWrapper } from "./Container.style";
const Container = ({ children, clssName }) => (
  <>
    <ContainerWrapper className={clssName ? clssName : ""}>
      {children}
    </ContainerWrapper>
  </>
);

export default Container;
