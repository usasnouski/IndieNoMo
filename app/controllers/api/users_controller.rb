class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)

      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    # @created_campaigns = @user.campaigns
    # @backed_campaigns = @user.backed_campaigns
    # @backed_campaigns = @user.contributions.includes(campaign: :user)

    render "api/users/show"
  end

  def info
    user = User.find(params[:user_id])

    render partial: "api/users/info", locals: { user: user }
  end

  private

  def user_params
    params.require(:user).permit(
    :email, :password, :first_name, :last_name, :profile_img
    )
  end
end
