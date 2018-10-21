import numpy as np

from keras.models import Sequential
from keras.layers import Dense
from keras.layers import LSTM

base_dir = "/home/vashmata/SpaceApps2018/"

# read classifications
df = pd.read_csv(base_dir+"classifications/classifications.csv", skiprows=18)
ndata = len( df["picNum"])

f = h5py.File( base_dir+"features/magnetauroral_feat.h5", "r" )
data = f["Logits"].value
f.close()

numDataSets = 50 #50 sets of magnet data
numSamples = 15 #15 minutes of magnet data

#data = [[i for i in range(100)]]
#data = np.array(data, dtype=float)
target = [[i for i in range(1,numDataSets+1)]]
target = np.array(target, dtype=float)

data = data.reshape((1, 1, numDataSets)) 
target = target.reshape((1, 1, numDataSets)) 
x_test=[i for i in range(100,200)]
x_test=np.array(x_test).reshape((1,1,100));
y_test=[i for i in range(101,201)]
y_test=np.array(y_test).reshape(1,1,100)


model = Sequential()  
model.add(LSTM(100, input_shape=(1, 100),return_sequences=True))
model.add(Dense(100))
model.compile(loss='mean_absolute_error', optimizer='adam',metrics=['accuracy'])
model.fit(data, target, nb_epoch=10000, batch_size=1, verbose=2,validation_data=(x_test, y_test))



predict = model.predict(data)

