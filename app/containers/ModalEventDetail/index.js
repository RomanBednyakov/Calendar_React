import React from 'react';
import './ModalEventDetail.scss';

const ModalEventDetail = (props) => {
  const {
    eventName, coordinator, email, venue, phone, venueCity, venueState, venueStreet1,
  } = props.eventDetail;
  return (
    <div className="modalEventDetail">
      <span className="modalEventDetail__title">{eventName}</span>
      <span className="modalEventDetail__details"><span className="modalEventDetail__modify">Coordinator:</span> {coordinator}</span>
      <span className="modalEventDetail__details"><span className="modalEventDetail__modify">Email:</span> {email}</span>
      <span className="modalEventDetail__details"><span className="modalEventDetail__modify">Phone:</span> {phone}</span>
      <span className="modalEventDetail__details"><span className="modalEventDetail__modify">Venue:</span> {venue}</span>
      <span className="modalEventDetail__details"><span className="modalEventDetail__modify">Venue City:</span> {venueCity}</span>
      <span className="modalEventDetail__details"><span className="modalEventDetail__modify">Venue State:</span> {venueState}</span>
      <span className="modalEventDetail__details"><span className="modalEventDetail__modify">Venue Street:</span> {venueStreet1}</span>
    </div>
  );
};
export default ModalEventDetail;
