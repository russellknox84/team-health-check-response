Then(/^I am presented with an error message$/) do  
 page.save_screenshot("screenshots/welcome.png")
end 

When(/^I do something$/) do  
 page.save_screenshot("screenshots/sdf.png")
end 