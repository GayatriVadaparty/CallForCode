**#Procedure**


**##1.Running model**
The machine learning model written in python is deployed on port 8080 using uvicorn using command
||  python main.py  || after navigating to the api directory in the Smoky cars Analyser directory. Indicated in s1.jpg


**##2.Accessing interface using cli**
The interface written in react is started on port 3000 using yarn. We perform this step by using the command 
||  yarn start || after navigating to the api directory in the Smoky cars Analyser directory. Indicated in s2.jpg


**##3.Entering attributes**
Enter the attributes of car about which we would like to predict the carbon emission values. The interface provides the placeholders to 
enter various attributes. It'll also speficy the enumerations that the user have to follow while entering some attributes. Indicated in s3.jpg


_After entering the attributes and clicking on submit button. The attributes are run in the mahine learning model and output is displayed on the screen_


**##4.Viewing results 1**
The model predicted the carbon emission of car with given attributes and classified it good to go. Indicated in s4.jpg


**##5.Viewing results 2**
The model predicted the carbon emission of car with given attributes and classified it needs a repair or replacement. Indicated in s5.jpg
