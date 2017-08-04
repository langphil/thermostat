feature 'testing initialization of server' do
  scenario 'can run app and visit /' do
    visit('/')
    expect(page).to have_content('Current temperature')
  end
end
