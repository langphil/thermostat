feature 'saved data state' do
  scenario 'can save app data in between sessions' do
    visit('/temperature')
    expect(page).to have_content(20)
    find('#temperature-up').click
    expect(page).to have_content(20)
    # expect('current-temperature').to have_content(21)
    # Capybara.current_session.driver.quit
    # visit('/temperature')
    # expect('current-temperature').to have_content(21)
  end
end
