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
    # When the user inserts a coin, it must indicate the amount
    # This function must add the amount inserted to the current balance on the machine must
    @user_balance_cents += input_cents
  end

  def buy_snack
    # This function must start the machine operations
    # If the current balance is higher of equal the snack price
    if @user_balance_cents >= snack_price_cents
      # and if there are snacks avalaible in the machine
      if @snack_count.positive?
        # The user can buy a snack
        # The snack price is discounted from the balance
        @user_balance_cents -= snack_price_cents
        # We remove one snack from the machine
        @snack_count -= 1
      else
        "Error."
      end
    else
      puts "Error."
    end
  end
end
