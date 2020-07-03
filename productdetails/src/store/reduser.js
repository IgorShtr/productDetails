// import axios from 'axios';
import {
  chosenActivity,
  addLink,
  // availableSports,
  // activeCity,
  // availableSportsExactcity,
  // activeActivity,
  CHOSEN_ACTIVITY,
  ADD_LINK,
  // ACTIVE_CITY,
  // ACTIVE_ACTIVITY,
  // AVAILABLE_SPORTS,
  // AVAILABLE_SPORTS_EXACTCITY,
} from './actions';


const initialState = {
  chosenActivity: "ADD LINK",
  links: [],
  // activeCity: [],
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
    // case ACTIVE_ACTIVITY: {
    //   return {
    //     ...store,
    //     activeActivity: payload
    //   }
    // }
    // case AVAILABLE_SPORTS: {
    //   const activitiesArrey = store.availableClubs.map(({ activity }) => {
    //     const slugs = activity.map(({ slug }) => { return slug })
    //     return slugs
    //   });
    //   const activities = Array.from(new Set(activitiesArrey.reduce((a, b) => a.concat(b), [])))
    //   return {
    //     ...store,
    //     availableSports: activities

    //   }
    // }
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




// export const setActiveActivity = (activity) => dispatch => {
//   dispatch(activeActivity(activity));
// }

// export const setAvailableSportsExactcity = (activeCityClubsList) => dispatch => {
//   dispatch(availableSportsExactcity(activeCityClubsList));
// }
