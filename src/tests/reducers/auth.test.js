import authReducer from "../../reducers/auth";

test('Should set uid for login', () => {
  const uid = "123lsad";
  const action = {
    type: "LOGIN",
    uid
  }
  const state = authReducer({}, action);
  expect(state).toEqual({ uid });
});

test('Should clear uid for logout', () => {
  const uid = "123lsad";
  const action = {
    type: "LOGOUT"
  }
  const state = authReducer({ uid }, action);
  expect(state).toEqual({});
});