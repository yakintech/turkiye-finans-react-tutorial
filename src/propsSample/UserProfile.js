import React from 'react'
import { PropTypes } from "prop-types";

function UserProfile({ name, surname, age, country }) {

  return (<>
    <h1>Detail:</h1>
    <h1>{name}</h1>
    <h1>{surname}</h1>
    <h1>{age}</h1>
    <h1>{country}</h1>
  </>
  )
}

UserProfile.defaultProps = {
  country: 'Türkiye'
}

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string,
  age: PropTypes.number
}

export default UserProfile