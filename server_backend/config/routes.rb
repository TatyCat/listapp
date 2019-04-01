Rails.application.routes.draw do
  resources :lists
  delete '/lists/destroy_all', to: 'lists#destroy_all'
end
