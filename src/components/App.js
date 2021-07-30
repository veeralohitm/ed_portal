import React from 'react';
import Header from './Header';
import Profile from './Profile';
import LoginForm from './LoginForm';
import 'bootstrap/dist/css/bootstrap.min.css';

export const AuthContext = React.createContext();

const initialState = {
  isAuthenticated: false,
  user: null,  
};

const email = localStorage.getItem('email');


const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem('user', email);
      console.log(email);
      return {
        ...state,
        isAuthenticated: true,
        user: email,       
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
    default:
      return state;
  }
};

function App() {

      const [state, dispatch] = React.useReducer(reducer, initialState);
      React.useEffect(() => {
        const user = localStorage.getItem('email') || null  

    if(user){
      dispatch({
        type: 'LOGIN',
        payload: {
          user
          
        }
      })
    }
  }, [])
  return (
   
    <div>
    <AuthContext.Provider
      value={{
        state,
        dispatch
      }}
    >
     <Header />
      <div className="App">{!state.isAuthenticated ? <LoginForm /> : <Profile />}</div>
         

    </AuthContext.Provider>
    
  

    </div>
    
     
   
  
  );
}

export default App;
