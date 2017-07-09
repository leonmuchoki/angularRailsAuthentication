# require "rails_helper"

# RSpec.feature "new users", js: true do 
#  let(:user_email) { Faker::Internet.unique.email }
 
#   scenario " can sign up successfully" do
#     visit "/"

#     click_link "Register"
#     fill_in "Email", with: user_email
#     fill_in "password", with: "password"
#     click_button "Register"
    
#     expect(page).to have_selector("#header-home", :text => "Home Sweet Home")
    
#     expect(page).to have_content user_email
    
#     click_link "Logout"

#   	expect(page).to have_link "Sign In"
#   	expect(page).to have_link "Register"

#   	click_link "Sign In"
#   	fill_in "Email", with: user_email
# 	fill_in "password", with: "password"
# 	click_button "Login"

# 	#expect(page).to have_link "Logout"
# 	expect(page).to have_selector("#header-home", :text => "Home Sweet Home")
#   end

#   scenario "user can logout" do 
	
# 	end
# end