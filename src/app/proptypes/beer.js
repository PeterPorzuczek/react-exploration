import PropTypes from "prop-types";

const { any, arrayOf, number, shape, string } = PropTypes;

const volumeShape = shape({
  unit: string,
  value: number
});

const beer = shape({
  abv: number,
  attenuation_level: number,
  boil_volume: volumeShape,
  brewers_tips: string,
  contributed_by: string,
  description: string,
  ebc: number,
  first_brewed: string,
  food_pairing: arrayOf(string),
  ibu: number,
  id: number,
  image_url: string,
  ingredients: shape({
    hops: arrayOf(
      shape({
        add: string,
        amount: volumeShape,
        attribute: string,
        name: string
      })
    ),
    malt: arrayOf(
      shape({
        amount: volumeShape,
        name: string
      })
    ),
    yeast: string
  }),
  method: shape({
    fermentation: shape({
      temp: volumeShape
    }),
    mash_temp: arrayOf(
      shape({
        duration: number,
        temp: volumeShape
      })
    ),
    twist: any
  }),
  name: string,
  ph: number,
  srm: number,
  tagline: string,
  target_fg: number,
  target_og: number,
  volume: volumeShape
});

export default beer;
