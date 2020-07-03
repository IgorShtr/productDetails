// import axios from 'axios';
import {
  chosenActivity,
  addLink,
  modalState,
  clearActionActivities,
  // availableSportsExactcity,
  // activeActivity,
  CHOSEN_ACTIVITY,
  ADD_LINK,
  IS_MODAL_OPEN,
  CLEAR_ACTION_ACTIVITIES,
  // AVAILABLE_SPORTS,
  // AVAILABLE_SPORTS_EXACTCITY,
} from './actions';


const initialState = {
  chosenActivity: "ADD LINK",
  links: [],
  isModalOpen: true,
  // availableSports: [],
  // availableSportsExactcity: [],
  // activeActivity: "",


};

export function productDetailsReduser(store = initialState, { type, payload }) {
  switch (type) {
    case CHOSEN_ACTIVITY: {
      return {
        ...store,
        chosenActivity: payload
      }
    }
  
    case ADD_LINK: {
      return {
        ...store,
        links: [...store.links, payload]
      }
    }
    case IS_MODAL_OPEN: {
      return {
        ...store,
        isModalOpen: !store.isModalOpen
      }
    }
    case CLEAR_ACTION_ACTIVITIES: {     
            return {
        ...store,
        links: []

      }
    }
    // case AVAILABLE_SPORTS_EXACTCITY: {
    //   const activitiesArrey = payload.map(({ activity }) => {
    //     const slugs = activity.map(({ slug }) => { return slug })
    //     return slugs
    //   });
    //   const activities = Array.from(new Set(activitiesArrey.reduce((a, b) => a.concat(b), [])))
    //   return {
    //     ...store,
    //     availableSportsExactcity: activities

    //   }
    // }
    default:
      return store;

  }
}

export const setСhosenActivity = activity => dispatch => {
  dispatch(chosenActivity(activity));  
};

export const setLink = link => dispatch => {
  dispatch(addLink(link));
};

export const setModalState = () => dispatch => {
  dispatch(modalState());
}

// export const setAvailableClubs = () => dispatch => {
//   axios
//     .get(`https://instasport.co/dashboard/api/v1/clubs/`)
//     .then(result => {
//       dispatch(availableClubs(result.data));
//       dispatch(availableCities());
//       dispatch(availableSports());
//     })
//     .catch(err => {
//       console.log(err);
//     });

// };




export const setClearActionActivities= () => dispatch => {
  dispatch(clearActionActivities());
}
