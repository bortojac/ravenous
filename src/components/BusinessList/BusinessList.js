import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';
import { PropagateLoader } from 'react-spinners';

// create BusinessList prop
// iterate through the businesses props and render Business component for each prop
const BusinessList = ({businesses, loading}) => {
    return (
        <div className="BusinessList">
            <PropagateLoader
                color={'#f0c36c'}
                loading={loading} />
                {businesses.map(
                    (businessObj) => {
                        //console.log(b.id)
                        return <Business business={businessObj} key={businessObj.id} />;
                    })}
        </div>
    );
}

export default BusinessList;