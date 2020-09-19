class Movie < ApplicationRecord
  belongs_to :actor, optional: true
end
