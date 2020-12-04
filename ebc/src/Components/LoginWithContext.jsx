import React, { useContext } from 'react';
import { useImmerReducer } from 'use-immer';
import { login } from './utils';

function loginReducer(draft, action) {
  switch (action.type) {
    case 'field': {
      draft[action.fieldName] = action.payload;
      return;
    }
    case 'login': {
      draft.error = '';
      draft.isLoading = true;
      return;
    }
    case 'success': {
      draft.isLoggedIn = true;
      draft.isLoading = false;
      //draft.username = '';
      draft.password = '';
      return;
    }
    case 'error': {
      draft.error = 'Incorrect username or password!';
      draft.isLoggedIn = false;
      draft.isLoading = false;
      draft.username = '';
      draft.password = '';
      return;
    }
    case 'logOut': {
      draft.isLoggedIn = false;
      return;
    }
    default:
      return;
  }
}


const initialState = {
  username: '',
  password: '',
  isLoading: false,
  error: '',
  isLoggedIn: false
};

const StateContext = React.createContext();
const DispatchContext = React.createContext();

export default function LoginUseContext() {
  const [state, dispatch] = useImmerReducer(loginReducer, initialState);
  const { username, password, isLoading, error, isLoggedIn } = state;

  const onSubmit = async (e) => {
    e.preventDefault();

    dispatch({ type: 'login' });

    try {
      await login({ username, password }); // <<< HERE WE CONNECT UP TO THE API CALL IN util.js
      dispatch({ type: 'success' });
    } catch (error) {
      dispatch({ type: 'error' });
    }
  };


  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <div className='App useContext'>
          <div className='login-container'>
            {isLoggedIn ? (
              <>
                <h1>Welcome {username}!</h1>
                <button onClick={() => dispatch({ type: 'logOut' })}>
                  Log Out
                </button>         

              </>
            ) : (
              <form className='form' onSubmit={onSubmit}> {/* HERE THE onSubmit is set up !!*/ }
                {error && <p className='error'>{error}</p>}
                <p>Please Login!</p>
                <input
                  type='text'
                  placeholder='username'
                  value={username}
                  onChange={(e) =>
                    dispatch({
                      type: 'field',
                      fieldName: 'username',
                      payload: e.currentTarget.value,
                    })
                  }
                />
                <input
                  type='password'
                  placeholder='password'
                  autoComplete='new-password'
                  value={password}
                  onChange={(e) =>
                    dispatch({
                      type: 'field',
                      fieldName: 'password',
                      payload: e.currentTarget.value,
                    })
                  }
                />
                <button className='submit' type='submit' disabled={isLoading}>
                  {isLoading ? 'Logging in...' : 'Log In'}
                </button>
              </form>
            )}
          </div>


        </div>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

