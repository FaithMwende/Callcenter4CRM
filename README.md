# Browser calls

### Getting started
you will need an `APIKEY`, `username` and `virtual phoneNumber` from AfricasTalking dashboard before getting started.

In the file `routes/index.js` create variables apikey, username and virtual number at the top of file.

In the file `js/index.js` create variable username at the top of the file

Add callback urls on your virtual number from Africastalking dashboard;
`https://*mydomain*/callback_url` on callback url and `https://*mydomain*/events_url` on events url

### Setup
Install dependancies using `npm install`

Run app using `npm start`

> webRTC will only work on secure pages `https://` or `localhost`. Use this for testing

> more documentation is available [here](https://www.npmjs.com/package/africastalking-client)
> 
>
npm install -g sequelize-cli
sequelize init
sequelize migration:generate --name create_calls_table

sequelize db:migrate



Welcome PesaMe Financial AI Voice Service
	New Customer
		Onboarding
	Existing Customer
		Enter Password
			Say Voice Password
				Authenicate
					Main Voice Interface
My Account
	mini statement 
	change language
	check balance
	change password
	change or add voice password
Send Money
	Enter Phone Number
		Enter Amount
			Confirm Payment
Request Money
	Enter phone number 
		Enter Amount you are requesting
		 	Select Purpose(Food,Agriculture,Construction,Salary Advance)
Make Payment
	Utilities
		Buys Airtime
		Buys Tokens
	Till Number
		Enter Account
				Enter Amount
					Confirm  Transactions
	Paybill
		Enter Paybill
			Enter Account
				Enter Amount
					Confirm  Transactions

Loan and Savings
	Mshwari
		send to m-mshwari
		withdraw from m-mshari
		lock savings account
			open 
			save
			withdraw
			check Balance
			mini statement
		loan @9% for 30 days
		check balance
		mini statement