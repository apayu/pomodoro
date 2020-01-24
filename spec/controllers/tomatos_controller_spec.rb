require 'rails_helper'

RSpec.describe TomatosController, type: :controller do
  describe "GET index" do
    it "response index" do
      get :index

      expect(response).to render_template("index")
    end
  end

end
