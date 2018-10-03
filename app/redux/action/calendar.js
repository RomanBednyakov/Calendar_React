import { GET_DATE_CALENDAR, GET_MONTH_CALENDAR } from '../../constants/ActionTypes';
import api from '../../api/index';
import help from '../../helpers/helperAuth';

export function getMonthCalendar(year, month) {
  return (dispatch) => {
    return api.get(`https://api.sportsanalyticsinc.com/events/external/5qUulvNbLKX3ezxNdqdHWA==/${year}/${month + 1}`)
      .then(help.checkStatus)
      .then(response => dispatch({ type: GET_MONTH_CALENDAR, data: response.data }))
      .catch((error) => {
        console.log('error getMonthCalendar', error);
      });
  };
}
export function getDateCalendar() {
  return (dispatch) => {
    return api.get('https://api.sportsanalyticsinc.com/events/external/5qUulvNbLKX3ezxNdqdHWA==/2018/1/20')
      .then(help.checkStatus)
      .then(response => dispatch({ type: GET_DATE_CALENDAR, data: response.data }))
      .catch((error) => {
        console.log('error getDateCalendar', error);
      });
  };
}
