
Can use pickling to store data in a way that each session can access the data
# **Accessing InternalStorage and sending csv across projects**

Session Storage is temporary and restricted to one session usage, however it is secure and can only be accessed by 1 particular domain. Internal Storage however is across browser sessions and even on disconnects remains the same. However it can be accessed by any website and will raise security concerns. Since we aren't asking for a user's sensitive information, Internal Storage usage seems apt for use.

The final ranking saved on user submit will be saved as practitioner_name.user_name.eum_testname, which will be read from internalStorage to send across.

## Steps:

- Can use JS's FileReader API to read csv file from internal storage, then create a blob object and encode the file csv data into b64 binary encoded data.
- Make an AJAX post request and send data to a public API endpoint (url of ec2 instance followed by uniquely defined url in django view) of the 2nd project.

```
fetch('/api/process-file/', { method: 'POST', body: JSON.stringify({ file_data: fileData }), headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer your-access-token' // If applicable } })

```

- Inside the 2nd project we will decode the b64 encoded data and convert the file to csv format again.

## Additional concerns:

- Since they will be on different domains, will have to handle Cross Origin Resource Sharing issues using django-cors-headers package and including its middleware etc.