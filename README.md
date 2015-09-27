# LittleBits cloud activated by twitter api stream

Clone from: https://github.com/littlebits/twitter-stream-to-littlebits-cloud

Very small server-side app to filter the twitter streaming API for a list of @handles, and trigger cloudBits for mentions and retweets.

## To deploy & use

#### 1) Have Node.js installed. 

Check under terminal 'node -v'. Latest tested version for this is v4.0.0


#### 2) Get Twitter API credentials and put them into the config.js file

1. Go to https://apps.twitter.com/ and click `Create New App`
1. Fill in the basic info [URL doesn't matter what it is]
1. After your app has been created, click Keys and Access Tokens
1. Scroll down and under *Your Access Token*, click `Create my access token`
1. Now, you will need 4 pieces of information from this page:
  - Consumer Key (API Key)
  - Consumer Secret (API Secret)
  - Access Token
  - Access Token Secret

All 4 items go in the constructor of the `twitter` class. Under directory: `src > config.js` lines `6,7,8,9`


#### 3)Get LittleBits Cloud API credentials and put them into the config.js file

1. Make sure you have gone through the setup process for a cloudBit you want to control via [Cloud Control](https://control.littlebitscloud.cc) to give it access to your wifi
1. Click [or tap] the Settings tab at the bottom right
1. Under *Advanced,* you will need 2 pieces of information from this page:
  - Device ID
  - AccessToken

Device ID is specific to the cloudBit, while AccessToken is global to the user account, and gives access to all cloudBits on the given account.
 
Go to `src > config.js` 
Place your AccessToken on line 3 `access_token:''`
Place your Device ID on line 15 `cloudBit:''`

#### 4) Choose the handles to listen to

Place the handles you want to listen for on lines `14, 17, 20`


#### 5) Run the server

1. Be connected to the interwebz
1. Launch terminal and go to the directory this repo is at 'cd .. ''
1. Run your Node.js server: `$ node index.js`
1. It should now be listening to Twitter for your select handles
