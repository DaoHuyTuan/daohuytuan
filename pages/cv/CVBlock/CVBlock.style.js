import styled from "styled-components";
import { COLOR_THEME_2 } from "Theme/theme";

const CVBlockWrapper = styled.div`
    margin-top: 120px;
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-column-gap: 24px;
    & .profile-info {
        justify-content: space-between;
        padding-top: 20px;
        display: flex;
        &__content {
            display: flex;
            flex-flow: column;
        }
        &__fullname {
            font-size: 40px;
            font-weight: bold;
        }
        &__info {
            font-size: 16px;
        }
        &__role {
            display: block;
            background-color: ${COLOR_THEME_2};
            color: #ffffff;
            font-size: 12px;
            padding: 5px 10px;
            border-radius: 30px;
        }
    }
    & .profile-pic {
        & img {
            width: 100%;
        }
    }
`
export {
    CVBlockWrapper
}