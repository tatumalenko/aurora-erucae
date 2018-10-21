import numpy as np
import pandas as pd

from keras.models import Sequential
from keras.layers import Dense
from keras.layers import LSTM


base_dir = "/home/vashmata/SpaceApps2018/"
skipRows = 5
numEpoch = 500
numDataSets = 5
numTestSets = 2

fullData = np.genfromtxt(base_dir+"MagnetometerData.csv", delimiter=",",skip_header=skipRows, dtype=int)
target = fullData.transpose()[0]
data = fullData.transpose()[1:].transpose()

#data = data.reshape((1, 1, numDataSets)) 
#target = target.reshape((1, 1, numDataSets)) 

data.reshape(numDataSets,3)
target.reshape(numDataSets,1)

data=data/101000 # normalize

model = Sequential()  
model.add(LSTM(numDataSets, input_shape=(numDataSets,3),return_sequences=False))
model.add(Dense(numDataSets))
model.compile(loss='mean_absolute_error', optimizer='adam',metrics=['accuracy'])
model.summary()


history = model.fit(data, target, nb_epoch = numEpoch, batch_size=1, verbose=2,validation_data=(data,target))

plt.plot(history['loss'])
plt.show()

predict = model.predict(data[4])

