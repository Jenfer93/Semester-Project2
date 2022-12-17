# Semester-Project2

A auction house - created with the NorOff Api

This is a Semester project for NorOff School of technology
In this application I will use the information given from the NorOff Auction API to display and manage listings from users.

It's build on Bootstrap and Sass, and displayed on Netlify: https://regal-kheer-f50aa3.netlify.app

In this application the user is supposed to be able to register a user using just a stud.noroff.no email address.
When registered the user will be redirected to the login page to log in with the email and password the user registered earlier. When logging in the users information will be gathered in localStorage to be used to verify if the user is logged in or not when viewing the listings, where they get a display of the 100 most recent listings. They can also search through these listings by title of the listing.

A logged in user will be able to see its own profile page, with a chosen avatar and username. They will be able to change their avatar, and view their listings and the last three bids they have made.

They will also be able to create their own listings. And view and bid on other users listings.

A user that is not logged in will be able to view the same 100 listings as an logged in user, but they will be
a little different then when logged in. They can also search through the listings by title.

For installing node and bootstrap run

```
npm i

npm run build
```

The app is also provided with CDN links for the deployment on Netlify to go smooth. (this is so the bootstrap JS files works on Netlify).

This far there is no tests to this project. Might add this on a later stage.
