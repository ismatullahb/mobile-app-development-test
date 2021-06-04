const initialState = {
  name: '',
  event: null,
  guest: null
}

function primaryReducer(state = initialState, action){
  switch (action.type) {
    case 'ADD_NAME_DATA':      
      return { ...state, name: action.payload.name }
    case 'ADD_EVENT_DATA':      
      return { ...state, event: action.payload.event }
    case 'ADD_GUEST_DATA':      
      return { ...state, guest: action.payload.guest }
    default:
      return state
  }
}

export default primaryReducer
