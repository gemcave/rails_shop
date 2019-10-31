Rails.application.routes.draw do
	# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

	resources :product,  only: [:show]
	resources :category,  only: [:show]
	
	root to: 'main#index'
end
