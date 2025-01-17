import { defineComponent } from './vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import { fetchMeetupById } from './meetupService.js';
import MeetupView from '../06-MeetupView/MeetupView.js';

export default defineComponent({
  name: 'PageMeetup',
  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },

  props: {
    meetupId: {
      type: Number,
      required: true,
    },
  },

  data: function () {
    return {
      isLoading: true,
      error: '',
      meetup: null,
    };
  },
  watch: {
    meetupId: {
      immediate: true,
      async handler(newId) {
        try {
          this.isLoading = true;
          this.meetup = await fetchMeetupById(newId);
        } catch (e) {
          this.error = e.message;
        }
        this.isLoading = false;
      },
    },
  },

  template: `
    <div class='page-meetup'>

    <ui-container v-if='isLoading'>
      <ui-alert>Загрузка...</ui-alert>
    </ui-container>
    <ui-container v-else-if='error'>
      <ui-alert>{{ error }}</ui-alert>
    </ui-container>
    <meetup-view v-else :meetup='meetup' />
    </div>`,
});
