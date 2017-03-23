require 'sinatra'
require 'json'

GlobalState = {}

class Mocks < Sinatra::Base
  set :port, 8080

  post '/user-next-response' do
    GlobalState[:userNextResponse] = params[:response]
  end
  get '/user/:userid' do
     GlobalState[:userNextResponse]
  end
end

Before do
  if ENV['NO_MOCKS']
    puts 'Running no mocks'
  else
      if $pid.nil?
        $pid = fork do
           Mocks.run!
        end
        sleep 10
      end
  end
end

at_exit do
  unless $pid.nil?
    Process.kill "TERM", $pid
    Process.wait $pid
  end
end