import { defineComponent } from './vendor/vue.esm-browser.js';
import UiAlert from './UiAlert.js';
import UiContainer from './UiContainer.js';
import MeetupDescription from '../02-MeetupDescription/MeetupDescription.js';
import MeetupCover from '../03-MeetupCover/MeetupCover.js';
import MeetupAgenda from '../05-MeetupAgenda/MeetupAgenda.js';
import MeetupInfo from '../04-MeetupInfo/MeetupInfo.js';

export default defineComponent({
  name: 'MeetupView',

  components: {
    UiAlert,
    UiContainer,
    MeetupDescription,
    MeetupCover,
    MeetupAgenda,
    MeetupInfo,
  },

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },

  template: `
    <div>
    <meetup-cover :title='meetup.title' :image='meetup.image' />
    <ui-container>
      <div class='meetup'>
        <div class='meetup__content'>
          <h3>Описание</h3>
          <meetup-description :description='meetup.description' />
          <h3>Программа</h3>
          <meetup-agenda v-if='meetup.agenda && meetup.agenda.length' :agenda='meetup.agenda' />
          <ui-alert v-else>Программа пока пуста...</ui-alert>
        </div>
        <div class='meetup__aside'>
          <meetup-info :date='meetup.date' :place='meetup.place' :organizer='meetup.organizer' />
        </div>
      </div>
    </ui-container>
    </div>`,
});
