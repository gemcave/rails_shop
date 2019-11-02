module CartsHelper
	def products
		@product ||= cart_items.joins(:product).all
	end
end
