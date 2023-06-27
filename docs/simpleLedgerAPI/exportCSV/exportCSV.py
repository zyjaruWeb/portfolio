#  https://gist.github.com/mieitza/5d35d0a4f2671127f7120c75c8764385
# https://www.geeksforgeeks.org/save-api-data-into-csv-format-using-python/

import pandas as pd
import requests
from google.colab import files

# specify get api request url
csvApiUrl = requests.get(
    'https://simpleledgerapi.onrender.com/api/v1/entries/getCsv')

# create data frame
dataFr = pd.DataFrame()

# insert results from api to the dataFrame array
if response.status_code == 200:
    for i in range(1, 400):
        response = requests.get(
            'https://simpleledgerapi.onrender.com/api/v1/entries/getCsv'.format(i))
        tempDataFra = pd.DataFrame(response.json()['entries'])[
            ['_id', 'date', 'from', 'description', 'amount']]
        dataFr = dataFr.append(tempDataFra, ignore_index=True)
else:
    print('Error', response.status_code)


df.head(5)
