import PropTypes from "prop-types";
import Beer from "./beer";

const { arrayOf, shape } = PropTypes;

const related = shape({
  ibu: arrayOf(Beer),
  abv: arrayOf(Beer),
  ebc: arrayOf(Beer)
});

export default related;
