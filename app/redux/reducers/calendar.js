import { GET_MONTH_CALENDAR, GET_DATE_CALENDAR } from '../../constants/ActionTypes';

const initial = {
  eventForDay: [],
  eventForMonth: [],
};

const calendar = (state = initial, action) => {
  const { data } = action;
  switch (action.type) {
    case GET_MONTH_CALENDAR:
      return {
        ...state,
        eventForMonth: data,
      };
    case GET_DATE_CALENDAR:
      return {
        ...state,
        eventForDay: data,
      };
    default:
      return state;
  }
};
export default calendar;
