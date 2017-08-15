export const fetchCarouselCampaigns = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/carousel'
  })
};
