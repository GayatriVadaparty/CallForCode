# Importing necessary libraries
import uvicorn
import pickle
from pydantic import BaseModel
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Initializing the fast API server
app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Loading up the trained model
model = pickle.load(open('../model/CEModelx.pkl', 'rb'))

# Defining the model input types
class Candidate(BaseModel):
    engSize : float
    cylinders :int
    Transmission : int
    Gears : int
    ftype : int
    fcc :float
    fch :float
    fcco1 :float
    fcco2 :float


# Setting up the home route
@app.get("/")
def read_root():
    return {"data": "Welcome to Smoky Cars Analzser"}

# Setting up the prediction route
@app.post("/prediction/")
async def get_predict(data: Candidate):
    sample = [[
        data.engSize,
        data.cylinders,
        data.Transmission,
        data.Gears,
        data.ftype,
        data.fcc,
        data.fch,
        data.fcco1,
        data.fcco2,
    ]]

    emitted = model.predict(sample).tolist()[0]
    if(emitted>256.42222):
        valid=0
    else:
        valid=1

    return {
        "data": {
            
            'prediction': valid,
            'interpretation': f'The car is good to go, the carbon emission is {emitted}' if valid == 1 else f'Sorry!!! It is high time you change your car, the carbon emission is {emitted}'
        }
    }

# Configuring the server host and port
if __name__ == '__main__':
    uvicorn.run(app, port=8080, host='0.0.0.0')
