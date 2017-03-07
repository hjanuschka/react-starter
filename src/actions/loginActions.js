import superagent from "superagent"

//Login - in case of a good login dispatch a fetch event
//else raise a reject
export function loginUser(form) {
  return function(dispatch) {
    superagent
             .post('http://localhost:8100/backend/login_json')
             .withCredentials()
             .query({username: form.username, password: form.password})
             .then(function(d) {
                dispatch(fetchUsername());
              })
              .catch(function(e) {
                dispatch({
                  type: "FETCH_USER_REJECTED",
                  payload: e
                })
              });
  }
}

export function logOutUser() {
  return function(dispatch) {
    dispatch({
    type: "LOGOUT_USER",
    payload: superagent
             .get('http://localhost:8100/logout')
             .withCredentials()
         });
  }
}
export function fetchUsername() {
  return function(dispatch) {
    dispatch(
      {
        type: "FETCH_USER", payload: superagent
                                     .get('http://localhost:8100/backend/login_name')
                                     .withCredentials()
      }
    )
      
  }
}