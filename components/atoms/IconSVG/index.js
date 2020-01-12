import { IconSVGWrapper } from "./IconSVG.style";
const IconSVG = ({ content, name, handleChange }) => {
  return <IconSVGWrapper src={content} alt={name} onClick={handleChange} />;
};

export default IconSVG;
