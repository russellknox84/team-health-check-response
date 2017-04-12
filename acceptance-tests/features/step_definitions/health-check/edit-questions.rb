When(/fill out the question details/i) do
    within(page.find_by_id("question-editor")) do
        fill_in "question", with: "Question 1"
    end
end

When(/my question will be displayed in the list of questions/i) do
    within(page.find_by_id("question-list")) do
        page.should have_content("Question 1")
    end
end

When(/select an existing question/i) do
    steps %{
        Given that I fill out the question details
        And I click "Add"
    }
    within(page.find_by_id("question-list")) do
        click_link_or_button("Question 1")
    end
end

When(/question will be displayed for editing/i) do
    within(page.find_by_id("question-editor")) do
        #find_field("question").should have_content("Question 1")
        expect(page).to have_field("question", :with => "Question 1")
        #expect(page).to have_field("question")
    end
end

When(/edit the question/i) do
    within(page.find_by_id("question-editor")) do
        fill_in "question", with: "Question 2"
    end
end

When(/question will be updated in the list of questions/i) do
    within(page.find_by_id("question-list")) do
        page.should have_content("Question 2")
    end
end

When(/question will be deleted from the list of questions/i) do
    within(page.find_by_id("question-list")) do
        page.should_not have_content("Question 2")
    end
end

When(/displayed the field "Is mandatory"/i) do
    within(page.find_by_id("question-editor")) do
        page.should have_content("Is the question mandatory?")
    end
end

When(/select the same question/i) do
    within(page.find_by_id("question-list")) do
        click_button("Question 1")
    end
end

When(/the option "No" will have persisted/i) do
    within(page.find_by_id("question-editor")) do
        Capybara.ignore_hidden_elements = false
            find_field("isMandatory-no" ).should be_checked
        Capybara.ignore_hidden_elements = true
    end
end

When(/am displayed the field "Question type"/i) do
    within(page.find_by_id("question-editor")) do
        page.should have_field("type")
    end
end

When(/I can select the options/i) do |table|
    within(page.find_by_id("question-editor")) do
        table.hashes.each do |hash|
            #expect(page).to have_field("type", :options => hash)
            within(page.find_field("type")) do
                has_content?(hash)
            end
        end
    end
end
