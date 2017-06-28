class Api::ContributionsController < ApplicationController
  def created
    unless logged_in?
      render json: { login: "Please sign up or log in" }, status: 401
      return
    end

    @contribution = Contribution.create(contribution_params)
    @contribution.user_id = current_user.id

    if @contribution.save
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
