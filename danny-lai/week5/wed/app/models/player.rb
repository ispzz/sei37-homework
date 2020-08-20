class Player < ApplicationRecord
  belongs_to :team, optional: true
end
