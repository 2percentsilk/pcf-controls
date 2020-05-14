import * as React from 'react';
import SimpleReactCalendar from 'simple-react-calendar';

export interface ICalendar {
  minNumberOfWeeks: number;
  weekStartsOn: number;
}
  
export const CalendarAnchor: React.FunctionComponent<ICalendar> = props => {
  
  return (
    <SimpleReactCalendar
      activeMonth={new Date()}
      minNumberOfWeek={props.minNumberOfWeeks}
      weekStartsOn={props.weekStartsOn} />
  );
  
};