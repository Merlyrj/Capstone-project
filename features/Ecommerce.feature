Feature:Ecommerce validation


Scenario: placing order for a product in a Ecommerce website
Given enter the username "standard_user" and password "secret_sauce" and click on the login button
When the dashboard is visible and the product "Sauce Labs Backpack" is added to the cart
Then the cart is visible and click on the checkout button
When the shipping details are entered and the continue button is pressed
Then the order of the product is visible
When i click on the finish button
Then the order confirmation message-thankyou for your order
