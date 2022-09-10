## Why do we choose this “Canada dataset”?
As we all know that, Canada is located close to polar regions, so the increase in carbon emission in carbon content can impact the climatic conditions in the Arctic region.
We analyse the dataset of cars which are in use in Canada.
An approach for predicting the CO2 emissions from four wheeler vehicles(i.e. cars) which are in use in Canada.
The amount of carbon emission from a car mainly depends on the manufacture/company and model/type of the car, type of fuel used, mileage of the car and carbon emission per kilometre.
We can estimate how long a car can be used, so that the carbon emitted from it under permissible limit.
We categorize the cars into two classes:
Car is in good state (i.e. carbon emission is less)
Car cannot be used further(i.e. carbon emission exceeded its limit)
<br>
## Dataset Acquisition:
The data was collected from an open source website to build our project.
Our dataset has nearly 7400 records and 14 columns of data regarding the cars which are in use in Canada.
Dataset contains the information of manufacturer of the car, type/model of the car, type of fuel used, mileage and carbon emission per kilometer.
The collected is then processed before the model is trained and tested on it.
Implementing a regression model:
For building up the model to estimate the carbon emission from the car, we chosen regression model.
 Regression is a supervised learning algorithm which is powerful and accurate.
The model is built by training and testing the model on the dataset.

## Training dataset and testing dataset:
In order to build a model, firstly we divide the dataset into training dataset and testing dataset.
Training dataset contains the known outputs from where the machine is trained to learn.
Testing dataset is used to test the model, the model predicts the output based on what it learned.
This helps in evaluating the performance of the model, and can take necessary steps to improve its accuracy.
