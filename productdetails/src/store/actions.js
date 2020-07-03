export const CHOSEN_ACTIVITY = "CHOSEN_ACTIVITY"

export const chosenActivity= payload => ({
  type: CHOSEN_ACTIVITY,
  payload
});

export const IS_MODAL_OPEN = "IS_MODAL_OPEN"

export const modalState = () => ({
  type: IS_MODAL_OPEN,

});


export const ADD_LINK = "ADD_LINK"

export const addLink = (payload) => ({
  type: ADD_LINK,
  payload

});

// export const ACTIVE_ACTIVITY = "ACTIVE_ACTIVITY"

// export const activeActivity = (payload) => ({
//   type: ACTIVE_ACTIVITY,
//   payload

// });


export const CLEAR_ACTION_ACTIVITIES = "CLEAR_ACTION_ACTIVITIES"

export const clearActionActivities = () => ({
  type: CLEAR_ACTION_ACTIVITIES,

});

// export const AVAILABLE_SPORTS_EXACTCITY = "AVAILABLE_SPORTS_EXACTCITY"

// export const availableSportsExactcity = (payload) => ({
//   type: AVAILABLE_SPORTS_EXACTCITY,
//   payload,

// });