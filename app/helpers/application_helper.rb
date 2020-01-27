module ApplicationHelper

  # active link
  def current_class?(test_path)
    return 'nav-link active' if request.path == test_path
    'nav-link'
  end

  def current_account_id
    return current_account.id if account_signed_in?
    0
  end
end
