class TomatoesController < ApplicationController
  def index

  end

  def create
    @tomato = Tomato.new(tomatoes_params)
    @tomato.account_id = current_account.id
    @tomato.save
  end

  private
  def tomatoes_params
    params.require(:tomato).permit(:time)
  end
end
