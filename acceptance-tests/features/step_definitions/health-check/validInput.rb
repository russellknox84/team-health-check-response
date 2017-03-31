require 'rest-client'

Then(/^I am presented with no error message$/) do
  page.should have_content("Usdfkjbsjkdbf")
end



