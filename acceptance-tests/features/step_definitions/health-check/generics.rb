When(/I click "([^"]*)"/i) do |arg1|
  click_button(arg1)
end

When(/can select the option "([^"]*)"$/i) do |arg1|
  #choose(arg1)
  #choose(find_field(arg1), :visible => false)
  #find('label[for=two]').click
  Capybara.ignore_hidden_elements = false
    choose("isMandatory-#{arg1}")
  Capybara.ignore_hidden_elements = true
end