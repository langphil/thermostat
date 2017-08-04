require 'sinatra/base'

class Thermostat < Sinatra::Base

  get '/' do
    redirect '/temperature'
  end

  get '/temperature' do
    erb :index
  end

  run! if app_file == $0
end
