require 'rails_helper'

RSpec.describe TomatoesController, type: :controller do
  describe "GET index" do
    it "response index" do
      # get :index
      #
      # expect(response).to render_template("index")
    end

    it "時間倒數完紀錄一顆番茄" do
      account = create(:account)
      expect do
        post :create, params: { :tomato => { :account_id => account.id, :time => 1500 }}
      end.to change{ Tomato.count }.by(1)
    end

    it "以任務為單位"
  end
end
