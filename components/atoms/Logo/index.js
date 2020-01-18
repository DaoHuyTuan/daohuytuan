import { LogoWrapper } from "./Logo.style";
const Logo = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <LogoWrapper href={href} ref={ref} onClick={onClick}>
      ppdusv
    </LogoWrapper>
  );
});
export default Logo;
