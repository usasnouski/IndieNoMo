Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
  end

  root "static_pages#root"
end
