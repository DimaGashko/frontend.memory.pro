import Vue from 'vue';

/**
 * @param {number} val time value in seconds
 */
Vue.filter('time', function(val) {
  if (!val) return '0';
  val = Math.round(val);

  const min = Math.floor(val / 60);
  const sec = (val - min * 60) % 60;

  const formatedMin = (min + '').padStart(2, '0');
  const formatedSec = (sec + '').padStart(2, '0');

  return `${formatedMin}:${formatedSec}`;
});
