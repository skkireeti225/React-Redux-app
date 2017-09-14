// State argument is not application state, only the state
// this reducer is responsible for
export default function(state = {page1:"active", page2:"disabled", page3:"disabled", page4:"disabled"}, action) {
  switch(action.type) {
  case 'ACTIVE_PAGE':
    return action.payload;
  }

  return state;
}
