Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create]
    resources :programs, only: [:index, :show, :create, :update, :destroy]
    resources :statuses, only: [:show, :create, :update, :destroy]
    resources :reviews, only: [:index, :show, :create, :update, :destroy]

    get "search", to: 'programs#search'
  end
end
