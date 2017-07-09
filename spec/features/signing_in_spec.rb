# require "rails_helper"

# RSpec.feature "users can sign in", js: true do 
# 	let!(:user) { FactoryGirl.create(:user) }

# 	scenario "with valid credentials" do 
# 		visit "/"

# 		click_link "Sign In"
# 		fill_in "Email", with: user.email
# 		fill_in "password", with: user.password
# 		click_button "Login"

# 		#expect(page).to have_link "Logout"
# 		expect(page).to have_selector("#header-home", :text => "Home Sweet Home")
# 		expect(page).to have_content user.email
# 	end
# end