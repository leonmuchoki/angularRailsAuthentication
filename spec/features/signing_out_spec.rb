# require "rails_helper"

# RSpec.feature "signed users can log out" do 
#   let(:user) { FactoryGirl.create(:user) }
  
#   before do 
#   	login_as(user)
#   end

#   scenario "successfully" do 
#   	visit "#/home"

#   	click_link "Logout"

#   	expect(page).to have_link "Sign In"
#   	expect(page).to have_link "Register"
#   	expect(page).not_to have_content user.email
#   end
# end