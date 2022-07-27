const getIsLoggedIn = state => state?.auth?.isLoggedIn ?? false;

const getUsername = state => state?.auth?.user?.name ?? '';

const getToken = state => state?.auth?.token ?? '';

const getIsFetchingCurrent = state => state?.auth?.isFetchingCurrentUser ?? false;


const authSelectors = {
    getIsLoggedIn,
    getUsername,
    getToken,
    getIsFetchingCurrent,
};

export default authSelectors;