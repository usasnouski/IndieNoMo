class Api::SearchController < ApplicationController
  def search
    if params[:q].present?
      query = params[:q]
      @search_result = Campaign.search(query).limit(5)
    else
      @search_result = Campaign.all
    end

    render "api/search/search"
  end
end
