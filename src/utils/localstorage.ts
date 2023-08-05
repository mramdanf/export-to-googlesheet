import moment from 'moment';

const LAST_EXPORTED_KEY = 'EXPORTED_TIME';

export function saveLastExportedTime() {
  window.localStorage.setItem(LAST_EXPORTED_KEY, moment().format().toString());
}

export function getLastExportedTime() {
  const time = window.localStorage.getItem(LAST_EXPORTED_KEY) || '';
  if (!time) {
    return '';
  }

  moment.updateLocale('en', {
    relativeTime: {
      future: 'in %s',
      past: '%s ago',
      s: 'a few seconds',
      ss: '%d seconds',
      m: 'a minute',
      mm: '%d minutes',
      h: '1h',
      hh: '%dh',
      d: 'a day',
      dd: '%d days',
      w: 'a week',
      ww: '%d weeks',
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years'
    }
  });

  return moment(time).startOf('second').fromNow();
}

export function removeLastExportedTime() {
  window.localStorage.removeItem(LAST_EXPORTED_KEY);
}
