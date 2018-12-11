class Room < ApplicationRecord
    def complete_name
        "#{title}, #{location}"
    end

    validates_presence_of :title, :location
    validates_length_of :description, minimum: 30, allow_blank: false
end
