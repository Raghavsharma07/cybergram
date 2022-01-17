import { useReducer } from 'react';
import { createContext } from 'react';
import AuthReducer from './AuthReducer';
const INITIAL_STATE = {
    // user: null,
    user: {
        username: 'raghavsharma',
        _id: '61d87a6073b2c7dc8c13a19e',

        email: 'sharmaraghab388@gmail.com',
        password:
            '$2b$10$RTZxoFc0URZKxYjrKQIyu.bhaHrtq0a9eXqt3Mde/cJw28cQh7JpS',
        isAdmin: false,
        followers: [],
        followings: [],
        profilePicture: '',
    },
    isFetching: false,
    error: false,
};

export const AuthContext = createContext(INITIAL_STATE);
export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
