import * as actionTypes from "../utils/actionTypes";

const initialBlogState = {
	shareFlag: false,
	selectedTag: null,
	page: 1,
	itemN: null
};

const blog = (state = initialBlogState, action: any) => {
	switch (action.type) {
		case actionTypes.SHARE_SWITCH:
			return {
				...state,
				shareFlag: action.content
			};
		default:
			return {
				...state
			};
	}
};

export default blog;