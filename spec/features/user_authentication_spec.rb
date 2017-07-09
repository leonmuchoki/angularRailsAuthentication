require "rails_helper"

RSpec.feature "user authentication", js: true do 
  let(:user_email) { Faker::Internet.email }

  before do 
  	visit "/"

    click_link "Register"
    fill_in "Email", with: user_email
    fill_in "password", with: "password"
    click_button "Register"
  end

  scenario "can register successfully" do 
  	expect(page).to have_selector("#header-home", :text => "Home Sweet Home")
    expect(page).to have_content user_email
    expect(page).to have_content "You have registered successfully."
  end

  scenario "can logout successfully" do 
  	click_link "Logout"

  	expect(page).to have_link "Sign In"
  	expect(page).to have_link "Register"
  end

  scenario "can sign in successfully" do 
    click_link "Logout"

  	click_link "Sign In"
  	fill_in "Email", with: user_email
	fill_in "password", with: "password"
	click_button "Login"

	#expect(page).to have_link "Logout"
	expect(page).to have_selector("#header-home", :text => "Home Sweet Home")
	expect(page).to have_content "You have Signed In successfully."
  end
end