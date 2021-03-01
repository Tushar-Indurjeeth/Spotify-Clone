export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // REMOVE LATER
    // token: 'BQA_OpT9nSN5uCy409KsaXCZCLXs30uGarbVL5XS81v-mKQSWkAtkeK_ZL0U0ma6CBt9897RgFjPOYafS5FM7C0AegrC7ZJQbBc0Idw77kxwUZUKhyuvzArb8ejlp8ALBz7pwt3d4FnJ2M3fEmEVwPhOAvWltyelrZsNGsz3Z4OR0BAM--hy',
};

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };

        default:
            return state;
    }
};

export default reducer;