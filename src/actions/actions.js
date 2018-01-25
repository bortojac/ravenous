export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_RECEIVED = 'SEARCH_RECEIVED';

const apiKey = 'heH5QuAaiiSTIVICDPVIpaUhVReJp1SijwS1WI4LHK-ccOSwuRDPkQ6JVwLdDOg5pFgDtka55iJNQ8kJLjS1Po1E8cvglV1z4sN4KdUSC-ho2vqU1J9eJ6Kj1-8xWnYx';

export function searchRequest(term, location, sortBy) {
    return {
        type: SEARCH_REQUEST,
        term: term,
        location: location,
        sortBy: sortBy
    };
}

export function searchReceived(jsonResponse) {
    return {
        type: SEARCH_RECEIVED,
        businesses: jsonResponse.businesses.map(
            business => ({
                   id: business.id,
                   imageSrc: business.image_url,
                   name: business.name,
                   address: business.location.address1,
                   city: business.location.city,
                   state: business.location.state,
                   zipcode: business.location.zip_code,
                   category: business.categories[0].title,
                   rating: business.rating,
                   reviewCount: business.review_count
               })) 
    };
}

export function fetchSearchResults(term, location, sortBy) {
    return dispatch => {
        dispatch(searchRequest(term, location, sortBy))
        return fetch(
           `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
             {headers: {
                 Authorization: `Bearer ${apiKey}`
                }
            })
            .then(
        response => {
            if(response.ok) {
               return response.json();
            }
            //console.log(response);
            throw new Error('Request failed!');
        },
        networkError => console.log(networkError.message))
        .then(
            jsonResponse => dispatch(searchReceived(jsonResponse))
        )
    };
}