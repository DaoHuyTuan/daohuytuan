import styled from "styled-components";
import { COLOR_THEME } from "Theme/theme";

const listClss = {
    downloadCV: {
        name: "downloadCV",
        style: `
            width: 170px;
            height: 50px;
            background-color: ${COLOR_THEME};
            color: white;
            font-weight: bold;
            border: 2px solid ${COLOR_THEME};
            transition: 0.3s;
            &:hover {
                background-color: #fff;
                color: ${COLOR_THEME};
                transition: 0.3s;
            }
        `
    },
}
const getStyleByClss = clss => {
    switch(clss) {
        case listClss.downloadCV.name: return listClss.downloadCV.style
    }
}
const ButtonWrapper = styled.button`
    border: none;
    outline: none;
    cursor: pointer;
    ${props => props && props.clssName ? getStyleByClss(props.clssName) : ""}
`
export { ButtonWrapper }