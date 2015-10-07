

require 'spec_helper'

describe 'City' do

  before :each do
    @base_url = "http://cities.local"
  end
  
  it 'index' do
    response = HTTParty.get "#{@base_url}/cities"
    response.code.should eql 200
  end

  it 'show' do
    response = HTTParty.get "#{@base_url}/cities/Chicago"
    response.code.should eql 200
  end

end

