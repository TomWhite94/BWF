require 'date'

class User
    
    attr_reader :name, :date_of_birth

    def initialize(name, date_of_birth)
        @name = name
        @date_of_birth = date_of_birth
    end

    # Returns an Integer representing the user’s current age
    def age
        now = Time.now.utc.to_date
        return now.year - @date_of_birth.year - ((now.month > @date_of_birth.month || (now.month == @date_of_birth.month && now.day >= @date_of_birth.day)) ? 0 : 1)
    end

    # Returns a Date object for the user's current upcoming birthday
    def next_birthday
        now = Time.now.utc.to_date
        dob_month = @date_of_birth.month
        dob_day = @date_of_birth.day
    
        if now.month > dob_month
            return Date.parse "#{now.year + 1}-#{dob_month}-#{dob_day}"
        elsif now.month == dob_month && now.day >= dob_day
            return Date.parse "#{now.year + 1}-#{dob_month}-#{dob_day}"
        elsif now.month == dob_month && now.day < dob_day
            return Date.parse "#{now.year}-#{dob_month}-#{dob_day}"
        elsif now.month < dob_month
            return Date.parse "#{now.year}-#{dob_month}-#{dob_day}"
        end
        
    end

end

tests = [
Date.new(1986, 1, 1),
Date.new(1988, Date.today.month, Date.today.day),
Date.new(1990, 12, 30),
]
puts "====== ages ======"
tests.each do |date|
puts "#{date} => #{User.new("Test", date).age}"
end
puts "====== birthdays ======"
tests.each do |date|
puts "#{date} => #{User.new("Test", date).next_birthday}"
end