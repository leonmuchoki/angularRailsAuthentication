FactoryGirl.define do 
  factory :email do 
  	sequence(:user_email) { |n| "test#{n}@example.com" }
  end
end