class Song < ApplicationRecord
  belongs_to :artist, optional: true
end
