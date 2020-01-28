import { actionTypes } from "./actionType";

const activeClass = "drawer-open";
const drawerReducer = (state, action) => {
  let rootClss = JSON.parse(JSON.stringify(state.rootClss));
  let maskClss = JSON.parse(JSON.stringify(state.maskClss));
  let contentClss = JSON.parse(JSON.stringify(state.contentClss));
  switch (action.type) {
    case actionTypes.ON_OPEN:
      rootClss.push(activeClass);
      maskClss.push(activeClass);
      contentClss.push(activeClass);
      return {
        ...state,
        isOpen: true,
        rootClss,
        maskClss,
        contentClss
      };
    case actionTypes.ON_CLOSE:
      rootClss.splice(rootClss.indexOf(activeClass), 1);
      maskClss.splice(maskClss.indexOf(activeClass), 1);
      contentClss.splice(contentClss.indexOf(activeClass), 1);
      return {
        ...state,
        isOpen: false,
        rootClss,
        maskClss,
        contentClss
      };
  }
};
export default drawerReducer;
