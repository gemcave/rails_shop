require 'rails_helper'

# Specs in this file have access to a helper object that includes
# the ProductHelper. For example:
#
# describe ProductHelper do
#   describe "string concat" do
#     it "concats two strings with spaces" do
#       expect(helper.concat_strings("this","that")).to eq("this that")
#     end
#   end
# end
RSpec.describe ProductHelper, type: :helper do
	describe 'GET #show' do
		let(:product) { create: product }
		subject { get :show, params: { id: product.id }}

		context 'show product' do
			it 'render show view' do
				is_exprected.to render_template :show
			end
		end

	end
end
