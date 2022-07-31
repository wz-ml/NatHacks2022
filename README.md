# mindMarket
A repository for the Nathacks 2022 hack, mindMarket.

# What it does
This website is the final product of our NatHacks 2022 hack, called mindMarket. It allows a user to upload a CSV file of an EEG of themselves watching a specific advertisement put up on the website. They are rewarded for this via "reward coins", which can be spent to acquire gift cards. With this uploaded, a machine learning model will analyze the data and return the emotional state of the person who was watching the advertisement. It will give a value of "Happy", "Neutral", or "Sad". This data will be sent back tyo advertisers so they can use it to determine the effectiveness of their advertisements.

# How it works
The website takes in the raw csv data from a MUSE headband. This data is then processed by removing excess and correctly formatting it. After this, the data is sent a feature generator, that creates features from the data ready to feed to a machine learning model. This model proceeds to return whether the individual was happy, neutral or sad, data that is then sent to the person who originally uploaded the video.

# Why should you care?
Advertising is one of the largest industries in the world today. Today the market is worth $530.9 billion dollars. This combines a massive industry with something that has proven itself to be very useful and important in the past, crowdsourcing. Just like how Uber revolutionized food delivery, mindMarket will do the same for the advertising industry. Large corporations who nee dto test advertisements can suddenly have access to a wealth of people from around the world, and recieve a breakdown of how they thought while watching. 
