Colchonet::Application.routes.draw do
  LOCALES = /en|pt\-BR/

  scope "(:locale)", locale: /en|pt|-BR/ do
  resources :rooms
  resources :users
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/:locale' => 'home#index', locale: LOCALES
  root 'home#index'
end
