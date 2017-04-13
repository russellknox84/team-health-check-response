When(/enter the project name/i) do
    within(page.find_by_id("project-editor")) do
        fill_in "addNewProject", with: "My Project"
    end
end

When(/my project will be displayed in the list of surveys/i) do
    within(page.find_by_id("project-list")) do
        page.should have_content("My Project")
    end
end

When(/select my project/i) do
    within(page.find_by_id("project-list")) do
        click_link("My Project")
    end
end

