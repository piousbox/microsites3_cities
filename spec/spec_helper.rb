
require 'httparty'
require 'rspec/autorun'

ENV["RAILS_ENV"] ||= 'test'

RSpec.configure do |config|
  config.order = "random"
  
end

def puts! args, label=""
  puts "+++ +++ #{label}"
  puts args.inspect
end

