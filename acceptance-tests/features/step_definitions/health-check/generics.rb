When(/I click "([^"]*)"/i) do |arg1|
  click_button(arg1)
end

When(/select the option "([^"])"/i) do |arg1|
  choose_radio(arg1)
end