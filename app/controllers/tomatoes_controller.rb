class TomatoesController < ApplicationController
  def index

  end

  def create
    @tomato = Tomato.new(tomatoes_params)
    @tomato.save
  end

  private
  def tomatoes_params
    params.require(:tomato).permit(:account_id, :time)
  end
end
