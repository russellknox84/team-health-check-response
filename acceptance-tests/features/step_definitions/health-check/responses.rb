Then(/^I am presented with the submitted responses/i) do
  page.should have_content("Responses")
end

When(/^I click the filter by response button$/) do
  choose("arrangeByResponse", :visible => false)
end

When(/^I click the filter by question button$/) do
  choose("arrangeByQuestion", :visible => false)
end

Then(/^I am presented with the responses grouped by question$/) do
  page.should have_css("user-question")
end

Then(/^I am presented with the responses grouped by response$/) do
  expect(page).to have_css("user-response")
end