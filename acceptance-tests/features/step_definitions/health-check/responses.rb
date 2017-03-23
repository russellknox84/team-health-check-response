Then(/presented with my submitted response/i) do
  page.should have_content(config['responses'])
end