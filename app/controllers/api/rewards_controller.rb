class Api::RewardsController < ApplicationController
  def index
    @rewards = Reward.all
  end

  def create
    @reward = Reward.new(reward_params)

    if @reward.save
      # render :show
      render "api/campaigns/show"
    else
      render json: @reward.errors.full_messages, status: 422
    end
  end

  def show
    @reward = Reward.find(params[:id])
    if @reward
      render :show
    else
      render json: @reward.errors.full_messages, status: 422
    end
  end

  private

  def reward_params
    params.require(:reward).permit(:title, :description, :price, :campaign_id)
  end
end
