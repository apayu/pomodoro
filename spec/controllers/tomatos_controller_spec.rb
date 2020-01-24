require 'rails_helper'

RSpec.describe TomatosController, type: :controller do
  describe "GET index" do
    it "response index" do
      get :index

      expect(response).to render_template("index")
    end

    it "時間倒數完紀錄一顆番茄"

    it "以任務為單位"
  end
end
