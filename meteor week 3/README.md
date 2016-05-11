# Real Time Web (meteor)
## Community
Community is een application designed for schools. 

In short: every cmd student has its own unique name and password. When he or she logs in the app will aske for a password and username. When the user is logged in for the first time the app will ask the user te fill in three questions. 
In witch building is the user what is his/her name and what is his skill (eg. frontend, design, management).

Now the user is set to a mongo database and other users will see all the other users in a chat view. 

Here they cann look each other up and ask question, to learn from each other. 

Check the site live at: (http://146.185.144.54/)


### The Core Feature
For the prototype
- get data from the user
- See what skills other people in the community have. 
- a chat page (fake) 

See the coffee places in your neighborhood and check where you can drink a coffee (busy OR quiet). This is realtime data so you can see realtime where People are checking in, and the amount of people checked in at one place.


**Possible features are:**
- Automation login when walking in the building.
- Automation logout when user leafs building
- Real chatbox

# Setup
	* CLIENT
		* layouts
			* chat
				* chat.html
				* chat.js
			* chatBox
				* chatBox.html
				* chatBox.css
				* chatBox.js
				* entry.html
				* message.html
				* messages.html  	
			* customregistration
				* customregistration.css
				* customregistration.js
				* login.html
				* register.html
			* dashboard
				* addUser.html
				* newUser.html 
				* dashboard.html
				* dashboard.js
				* dashboard.css 
			* home
				* home.html
				* home.css 
				* home.js		
			* search
				* search.html
				* search.css
				* search.js

		* collection
			* user.js
			* message.js
		
		* lib
			* routes.js
		
		* public
			* arrow.svg
			* community.svg
			* connect.svg
			* logout.svg
		
		* server
			* methods.js
			* publish.js

## How i came to this structure 
I watched Laurens building structure and structures from some tutorials. And the i made my own. 				
	
# Meteor setting
Autopublish and insecure are removed from meteor at the server branch. This is done for security reasons. 