import Vue from 'vue'
import moment from 'moment'

Vue.filter('formatDate', function(created_at) {
    if(created_at) {
      return moment(String(created_at)).format('MM/DD/YYYY')
    }
  });