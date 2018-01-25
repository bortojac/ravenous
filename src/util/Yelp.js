
const apiKey = 'heH5QuAaiiSTIVICDPVIpaUhVReJp1SijwS1WI4LHK-ccOSwuRDPkQ6JVwLdDOg5pFgDtka55iJNQ8kJLjS1Po1E8cvglV1z4sN4KdUSC-ho2vqU1J9eJ6Kj1-8xWnYx';

let Yelp = {
    search(term, location, sortBy) {
        return fetch(
            `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
             {headers: {
                 Authorization: `Bearer ${apiKey}`
                }
            }
        ).then(
        response => {
            if(response.ok) {
               return response.json();
            }
            //console.log(response);
            throw new Error('Request failed!');
        },
        networkError => console.log(networkError.message)).then(
            jsonResponse => {
                if(jsonResponse.businesses) {
                    return jsonResponse.businesses.map(
                        business => ({
                               id: business.id,
                               imageSrc: business.image_url,
                               name: business.name,
                               address: business.location.address1,
                               city: business.location.city,
                               state: business.location.state,
                               zipcode: business.location.zipcode,
                               category: business.categories[0].title,
                               rating: business.rating,
                               reviewCount: business.review_count
                           }));
                }
            }
        )
    }
};

  export default Yelp;
  
