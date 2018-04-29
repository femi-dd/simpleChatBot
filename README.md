# simpleChatBot
A very simple chat bot written in PHP and JavaScript

To train the bot:
type     train: yourQuestion # yourAnswer # yourPassword

To find an existing question:
type     find: yourQuestion


To Setup

1. Edit the db.php to suit your database environment
2. Edit the ajax url to send to the brain.php file
3. You can add custom functions to the functions.php file to give your bot more super-powers!
NOTE: The custom functions should return definite values to enable the brain.php process them well. (use the return keyword to return values)

<<< Since you know what a return keyword does, why am i even explaining? 🤔
4. To train the bot to return function values, try this training syntax 👇

train: # yourQuestion # yourAnswer(the name of the function) # yourPassword

e.g
train: # what's the time? # the time is (getTime) # password

4. Also, Edit the .......

Just kidding around, You're all done!
