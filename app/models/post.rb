class Post < ApplicationRecord
  has_many_attached :images
  validates :text, presence: true
  validates :images, presence: true
end
