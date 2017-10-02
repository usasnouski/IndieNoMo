class Api::CampaignsController < ApplicationController
  def index
    @campaigns = Campaign.launched_campaigns
  end

  def show
    @campaign = Campaign.includes(:contributions, :rewards).find(params[:id])
    @rewards = @campaign.rewards.order(:price)

    if @campaign
      render :show
    else
      render json: "No campaign found", status: 422
    end
  end

  def create
    unless logged_in?
      render json: "Please sign up or log in", status: 401
      return
    end

    @campaign = Campaign.new(campaign_params)
    @campaign.user_id = current_user.id

    if @campaign.save
      render :show
    else
      render json: @campaign.errors.full_messages, status: 422
    end
  end

  def update
    @campaign = Campaign.find(params[:id])

    unless logged_in?
      render json: "Please sign up or log in", status: 401
      return
    end

    js_date = campaign_params[:end_date]
    campaign_params[:end_date] = js_date.to_date
    #can user edit other users' campaigns
    
    if @campaign.update(campaign_params)
      render :show
    else
      render json: @campaign.errors.full_messages, status: 422
    end
  end

  def destroy
    @campaign = Campaign.find(params[:id])
    @campaign.destroy
    render :show
  end

  private

  def campaign_params
    params
      .require(:campaign)
      .permit(
      :title, :tagline, :description, :overview,
      :goal_amount, :creator, :backers, :end_date, :image_url, :launch,
      :category_id
      )
  end
end
