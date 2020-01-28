import { IconSVGWrapper } from "./IconSVG.style";
function IconSVG({ content, name, handleChange }) {
  return <IconSVGWrapper src={content} alt={name} onClick={handleChange} />;
}

export default IconSVG;
