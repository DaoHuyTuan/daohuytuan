import styled from "styled-components";

const CVBlockWrapper = styled.div`
    margin-top: 120px;
    width: 100%;
    display: flex;
    & .profile-info {
        flex: 2;
        justify-content: space-between;
        display: flex;
        &__content {
            
        }
    }
    & .profile-pic {
        flex: 1;
        & img {
            width: 100%;
        }
    }
`
export {
    CVBlockWrapper
}