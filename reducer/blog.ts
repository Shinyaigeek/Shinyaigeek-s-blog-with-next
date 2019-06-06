import * as actionTypes from "../utils/actionTypes";

const initialBlogState = {
	shareFlag: false,
	selectedTag: null,
	page: 1,
	itemN: null
};

const blog = (state = initialBlogState, action: any) => {
	switch (action.type) {
		case actionTypes.SHARE_ON:
			return {
				...state,
				shareFlag: true
			};
		case actionTypes.SHARE_OFF:
			return {
				...state,
				shareFlag: false
			};
		default:
			return {
				...state
			};
	}
};

export default blog;