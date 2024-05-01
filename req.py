import requests

url ="https://20.44.56.144/test/register"

data={
    "companynamr":"Veltech",
    "Ownername":"Dharshini",
    "Owneremail":"dharshinig_it20@velhightech.com",
    "rollno":"113021205013",
    "accesscode":"yqlhcX"
}

response = requests.post(url, json=data, verify=False)

if response.status_code == 200:
    print("registration successfull")
else:
    print("Registration failed:",response.text)