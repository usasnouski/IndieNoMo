class Api::CarouselsController < ApplicationController
  def carousel
    @carousel_campaigns = Campaigns.order('id').limit(5)
    render "api/carousels/carousel"
  end
end
