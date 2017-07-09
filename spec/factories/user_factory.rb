FactoryGirl.define do 
  factory :user do 
  	#sequence(:email) { |n| "test#{n}@example.com" }
  	email Faker::Internet.unique.email
  	password "password"
  end
end