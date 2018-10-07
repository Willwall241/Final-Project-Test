import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import 'fullcalendar';
import Modal from "../../components/Modal";

// ... and fullcalendar-reactwrapper.
import FullCalendar from 'fullcalendar-reactwrapper';

class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {
          title: 'All Day Event',
          start: '2017-05-01'
        },
        {
          title: 'Long Event',
          start: '2017-05-07',
          end: '2017-05-10'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2017-05-09T16:00:00'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2017-05-16T16:00:00'
        },
        {
          title: 'Conference',
          start: '2017-05-11',
          end: '2017-05-13'
        },
        {
          title: 'Meeting',
          start: '2017-05-12T10:30:00',
          end: '2017-05-12T12:30:00'
        },
        {
          title: 'Birthday Party',
          start: '2017-05-13T07:00:00'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2017-05-28'
        }
      ]
    };
    $('#calendar').fullCalendar('render');
  }

  render() {
    return (
      <div id="example-component">
      <Modal/>
        <FullCalendar
          id="your-custom-ID"
          header={{
            left: 'prev,next today myCustomButton',
            center: 'title',
            right: 'month,basicWeek,basicDay'
          }}
          navLinks={true} // can click day/week names to navigate views
          editable={true}
          eventLimit={true} // allow "more" link when too many events
          events={this.state.events}
        />
      </div>
    );
  }
}

MainApp.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default MainApp;
