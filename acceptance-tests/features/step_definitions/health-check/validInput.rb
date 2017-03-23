require 'rest-client'

Then(/^I am presented with no error message$/) do
  page.should have_no_content("An input value must be given.")
end



