import React from 'react';
import PropTypes from 'prop-types';
import Fipe from '../../api/fipe';
import { steps2 } from '../../structures/structures';

export default function VehiclesFormAo({ currentStep }) {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {
      steps2[currentStep].id === 'VEHICLES_FORM' && (
        <Fipe currentStep={currentStep} />
      )
    }
    </>
  );
}

VehiclesFormAo.propTypes = {
  currentStep: PropTypes.number.isRequired,
};
