export const fetchCarouselCampaigns = () => (
  $.ajax({
    method: 'GET',
    url: 'api/carousel'
  })
);
