class Api::ContributionsController < ApplicationController

  def create
    unless logged_in?
      render json: { login: "Please sign up or log in" }, status: 401
      return
    end

    @contribution = Contribution.new(contribution_params)
    @contribution.user_id = current_user.id

    if @contribution.save
      # @campaign = @contribution.campaign
      # @amount = @campaign.contributions.sum(:amount)
      render :show
    else
      render json: @contribution.errors.full_messages, status: 422
    end
  end

  private

  def contribution_params
    params.require(:contribution).permit(:campaign_id, :amount)
  end

end
