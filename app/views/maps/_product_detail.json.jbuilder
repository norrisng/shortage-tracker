json.extract! product_detail, :scarcity, :price, :notes
json.product product_detail.product, partial: "maps/product", as: :product
