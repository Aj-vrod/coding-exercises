class VendingMachine
  # TODO: simulate a vending machine operations for buying a snack following the specs given
  attr_accessor :user_balance_cents, :snack_count
  attr_reader :snack_price_cents

  # A vending machine must be initialized with:
  # a price for the snack
  # the amount of snacks available at the vending machine
  def initialize(snack_price_cents, snack_count)
    @user_balance_cents = 0
    @snack_count = snack_count
    @snack_price_cents = snack_price_cents
  end

  def insert_coin(input_cents)
    # when the user inserts a coin must indicate the amount
    # This function must add the amount inserted to the current balance on the machine must
    @user_balance_cents += input_cents
  end

  def buy_snack
    # TODO: what happens to @snack_count, @user_balance_cents and @snack_price_cents
    # when the user pushes a button to buy a Snack?
    if @user_balance_cents >= snack_price_cents
      if @snack_count.positive?
        @user_balance_cents -= snack_price_cents
        @snack_count -= 1
      else
        "Error."
      end
    else
      puts "Error."
    end
  end
end
