class Api::SearchController < ApplicationController
  def search
    debugger
    if params[:q].present?
      query = params[:q]
      @search_result = Campaign.where("title % ? OR tagline % ? OR overview % ?", query, query, query).limit(5)
    else
      @search_result = Campaign.all
    end

    render "api/search/search"
  end
end
