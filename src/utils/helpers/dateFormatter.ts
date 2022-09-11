import moment from 'moment';

export const formatDateToCalendar = (date: Date | string): string =>
  moment(date).calendar();
