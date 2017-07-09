Rails.application.routes.draw do
  devise_for :users,  constraints: { format: 'json' }

  root to: 'main#index'
  
  #devise _for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
