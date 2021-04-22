class OrangeTree
  # TODO: Simulate the life cycle of a tree from its birth till its death according to the spects given
  attr_accessor :age, :height, :fruits

  # A tree must have age, height and fruits as its features to measure
  # No need for arguments when instantiating a new tree
  def initialize
    @age = 0
    @height = 0
    @fruits = 0
  end

  def dead?
    # can only die after 50 years
    # must die at 100 years
    # must return only true/false
    if @age > 50
      if @age == 100
        true
      else
        random_true
      end
    else
      false
    end
  end

  def random_true
    # After 50 years, the probability of dying increases each year.
    [true, false].sample
  end

  def one_year_passes!
    # increment 1 year of life to the tree
    @age += 1
    # A tree grows 1 meter per year until it is 10 years old. Then it stops growing.
    if @age < 11
      @height += 1
    else
      @height
    end
    @fruits = fruits_quantity
  end

  def fruits_quantity
    # when > 5 years, must produce 100 fruits
    # when > 10 years, must produce 200 fruits
    # when >= 15 years, won't produce fruits
    # the fruits that have not been picked (at the end of a year) will fall
    # You should be able to find out how many fruits are left hanging on the tree.
    if @age > 5 && @age < 10
      @fruits = 100
    elsif @age >= 10 && @age < 15
      @fruits = 200
    elsif @age == 15
      @fruits = 0
    else
      @fruits
    end
  end

  def pick_a_fruit!
    # pick 1 fruit only if there are some left
    @fruits -= 1 if @fruits.positive?
  end
end
