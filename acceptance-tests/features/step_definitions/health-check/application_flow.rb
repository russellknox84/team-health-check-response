Given(/navigate to the response data page/i) do

end

Given(/I am on the projects page/i) do
    visit "http://localhost:3333"
    click_link("Projects")
end

Given(/I am on the surveys page/i) do
    steps %{
        Given that I am on the projects page
    }
    click_link("My Project")
    current_path.should == "/projects/My%20Project"
end

Given(/I am on the question page/i) do
    steps %{
        Given that I am on the surveys page
    }
    click_link("My Survey")
end

Given(/navigate to the responses tab/i) do
    steps %{
        Given I am on the question page
    }
    click_link("Results")
end