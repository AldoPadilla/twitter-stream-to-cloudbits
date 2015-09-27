module.exports = {
  cloud: {
    access_token: '46e5929deab7werwer993e6a5cce71e40782dwerwer3468bb7b84' //This is your Little Bits AccessToken under Cloud Control > Advanced Settings
  },
  twitter: {
    consumer_key: '8ctjELNznd345345RoHU51uAnB', // Get these by creating a twitter app apps.twitter.com/ 
    consumer_secret: 'HuyRi6q345345345345flvmwPUW1U9KosZjizBX2',
    access_token_key: '17015006-F4Ih34534534534mFydJDDZOqUgsLak',
    access_token_secret: '0RQoW345345345345RRIOryD9b8dvLkyQReFrr8G9gfi3KH'
  },
  mentions_duration: 5000, //Time duration it triggers for a mention in mili seconds ie 1000 = 1s
  retweet_duration: 3000, //Time duration it triggers for a retweet in mili seconds ie 1000 = 1s
  twitter_users: [
    { handle: '@your_handle',   // The twitter handle to listen for
      cloudBit: '123c456c7890' }  //This is your Little Bits Device ID under Cloud Control > Advanced Settings
      ,
    { handle: '@stresslimit',   // The twitter handle to listen for
      cloudBit: 'bbb' }  //This is your Little Bits Device ID under Cloud Control > Advanced Settings
      ,
    { handle: '@LabourNY',   // The twitter handle to listen for
      cloudBit: 'ccc' }  //This is your Little Bits Device ID under Cloud Control > Advanced Settings
  ]

}
