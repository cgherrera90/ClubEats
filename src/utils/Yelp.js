const apiKey = process.env.REACT_APP_YELP_API_KEY;

//Function fetches from API endpoint using search criteria and returns business info
const Yelp = {
  search(term, location, sort_by) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sort_by}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    )
      .then((response) => { 
        return response.json();
       
      })
      .then((data) => {
        console.log(data)
        if (data.businesses) {
          return data.businesses.map((business) => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.display_address[0],
            address2: business.location.display_address[1],
            phone: business.display_phone,
            price: business.price,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count,
          }));
        }
      })
  },
};

export default Yelp;