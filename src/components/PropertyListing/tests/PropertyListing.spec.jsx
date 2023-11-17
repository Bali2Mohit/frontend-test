import React from 'react';
import { render, screen } from '@testing-library/react';
import { within } from '@testing-library/dom';
import PropertyListing from '../PropertyListing';

const mockPropertyList = [
    { propertyTitle: 'Some title' },
    { propertyTitle: 'Some title1' },
    { propertyTitle: 'Some title2' },
    { propertyTitle: 'Some title3' },
    { propertyTitle: 'Some title4' },
    { propertyTitle: 'Some title5' },
    { propertyTitle: 'Some title6' },
    { propertyTitle: 'Some title7' },
];

describe('PropertyListing', () => {
    it('should render five property cards', async () => {
        render(<PropertyListing propertyList={mockPropertyList} />);
        const propertiesList = screen.getByRole('list');
        const propertyCards = await within(propertiesList).findAllByRole('listitem');
        expect(propertyCards).toHaveLength(5);
    });

    it('should return empty list for undefined data', async () => {
        render(<PropertyListing propertyList={undefined} />);
        const propertiesList = screen.getByRole('list');
        expect(propertiesList).toBeEmptyDOMElement();
    });
});
