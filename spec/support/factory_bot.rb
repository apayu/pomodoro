# 讓Rspec 裡面有 Factory 的語法
RSpec.configure do |config|
  config.include FactoryBot::Syntax::Methods
end
