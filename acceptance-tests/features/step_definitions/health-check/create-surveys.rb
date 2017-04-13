When(/enter the survey name/i) do
    within(page.find_by_id("survey-editor")) do
        fill_in "newProject", with: "My Survey"
    end
end

When(/my survey will be displayed in the list of surveys/i) do
    within(page.find_by_id("survey-list")) do
        page.should have_content("My Survey")
    end
end

When(/select my survey/i) do
    within(page.find_by_id("survey-list")) do
        #click_link("My Survey")
        first(:link, "My Survey").click
    end
end

When(/results for my survey will be displayed/i) do
end