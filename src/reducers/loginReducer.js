export default function reducer(state={
    user: {
      name: null,
    },
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_USER": {
        return {...state, fetching: true}
      }
      case "LOGOUT_USER_FULFILLED":
        return {
          ...state,
          fetching: false, 
          error: null,
          user: {name: null},
          output: "Logged out"
        }
      break;
      case "LOGIN_USER_REJECTED":
      case "FETCH_USER_REJECTED": {
        return {
          ...state,
          fetching: false, error: action.payload,
          output: "Error " + action.payload
        }
      }
      case "FETCH_USER_FULFILLED":
       {
        if(!action.payload.body) {
          return {
            ...state,
            fetching: false,
            fetched: false,
            error: "Login failed",
            output: "Logged Out"
          }
        }
        return {
          ...state,
          fetching: false,
          fetched: true,
          error: null,
          user: {name: action.payload.body.username},
          output: "Logged in as  " + action.payload.body.username
        }
      }
      case "FETCH_USER_PENDING":
        return {
          ...state,
          fetching: true,
          fetched: false,
          error: null,
          output: "Pending"
        }
      break;
      case "SET_USER_NAME": {
        return {
          ...state,
          user: {...state.user, name: action.payload},
        }
      }
    }

    return state
}