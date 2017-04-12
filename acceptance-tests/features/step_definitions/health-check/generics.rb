When(/I click "([^"]*)"/i) do |arg1|
  click_button(arg1)
end

When(/can select the option "([^"]*)"$/i) do |arg1|
  #choose(arg1)
  #choose(find_field(arg1), :visible => false)
  find('label[for=two]').click
end

will still end up with a click on the button itself. Instead, you can click on the label. In your case, 