## MUSICNATION
This web-app is created using Reactjs, Keycloak, Docker.

# Steps to run the application.
1. Clone the repo to your localmachine and change the current directory to the folder location where the project files are saved. t
2. Run ```npm install```
3. create a file  named .env and create a environment variable REACT_APP_RAPID_API_KEY = <your X-RapidAPI-Key>. To know more about what is X-RapidAPI-Key and what is does refer to https://docs.rapidapi.com/
4. Setup keycloak on docker. Follow the steps given in - https://www.keycloak.org/getting-started/getting-started-docker .
5. Then copy the content of Keycloak OIDC JSON file to keycloak.json in public folder.
6. Run ```npm start``` or ```yarn start```
7. Your app is now running on localhost:3000.
8. On starting the app you will be redirect to welcome page. Click ''login to view app'' button and it will redirect the user to keycloak login page and after logging in user can use all the functionalities of the app.


# Features of App.
1. In this web-app you can search for music, add your favourite, create playlist and it will all be still stored even after closing the browser.
2. To add the music to your favourites simply the search the music in search section and then click on the heart icon on the music card and it will be stored in favourites.
3. Your favourite music can be found on home section or favourite section.
4. To create a new playlist simply navigate to playlist section and hit create playlist button.
5. Created playlists will be then visible on home page and playlist page.
6. Search feature will show auto complete suggestions on typing initial letters and also will display previously searched musics.



# Images of Web-App.
Welcome Page

![WelcomePage](https://user-images.githubusercontent.com/109155098/221417835-eccac2b2-c273-47bc-9869-d92b25875b4d.jpg)



Keycloak login page

![LoginPage](https://user-images.githubusercontent.com/109155098/221417874-bdeb2b96-7242-4e28-8edb-72fe14df8996.jpg)



Home Page

![HomePage](https://user-images.githubusercontent.com/109155098/221417237-ac142f1d-ceec-4879-9150-4ca3f6fef102.jpg)



Search Page

![SearchPage](https://user-images.githubusercontent.com/109155098/221417256-4b6d71ea-aebb-4885-9a84-940dd1030257.jpg)



Favourites Page

![FavouritesPage](https://user-images.githubusercontent.com/109155098/221417263-40c227bf-8f9a-4b19-99e1-8759cab7c108.jpg)



Playlists Page

![PlaylistPage](https://user-images.githubusercontent.com/109155098/221417275-1cd22793-3ce8-44e3-92f2-f30dfdadc701.jpg)






