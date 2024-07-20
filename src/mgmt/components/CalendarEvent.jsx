import PropTypes from "prop-types";

export function CalendarEvent({ event: { title, user } }) {
  return (
    <>
      <strong>{title}</strong>
      <span> - {user.name}</span>
    </>
  );
}

CalendarEvent.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
