import React from 'react';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';
import PropTypes from 'prop-types';

const PropertyListing = ({ propertyList }) => {
    return (
        <ul className="PropertyListing">
            {propertyList?.slice(0, 5).map((property, index) => (
                <li key={index}>
                    <PropertyCard {...property} />
                </li>
            ))}
        </ul>
    );
};

PropertyListing.propTypes = {
    propertyList: PropTypes.array,
};

export default PropertyListing;
