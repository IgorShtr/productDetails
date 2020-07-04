
import {
  chosenActivity,
  addLink,
  modalState,
  clearActionActivities,
  CHOSEN_ACTIVITY,
  ADD_LINK,
  IS_MODAL_OPEN,
  CLEAR_ACTION_ACTIVITIES,

} from './actions';


const initialState = {
  chosenActivity: "",
  links: [],
  isModalOpen: false,
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
    default:
      return store;

  }
};

export const setСhosenActivity = activity => dispatch => {
  dispatch(chosenActivity(activity));
};

export const setLink = link => dispatch => {
  dispatch(addLink(link));
};

export const setModalState = () => dispatch => {
  dispatch(modalState());
};

export const setClearActionActivities = () => dispatch => {
  dispatch(clearActionActivities());
};
