# Phone Catalog API 

API REST instructions.

Easy:

You can import the JSON collection from postman that is included in the main directory.

You can also see the REST API collection here:

https://documenter.getpostman.com/view/13518759/2s8479ybUD

Note: CD/CI applied. Github linked to heroku for continuous and automated deployment.

These are the endpoints with which to obtain information:

**Remember that 'auth-token' header must be sent in order to obtain information from the /api endpoints.**

<table style="width:100%">
  <tr>
    <th>METHOD</th>
    <th>DATA</th>
    <th>ENDPOINT</th>
  </tr>

  <tr>
    <td>GET</td>
     <td>Get all phones</td>
    <td>https://onebeyond-hector.herokuapp.com/api/getAll</td>
  </tr>

  <tr>
    <td>GET</td>
    <td>Get one phone by ID</td>
    <td>https://onebeyond-hector.herokuapp.com/api/getOne/6347f636ab3b54a6466ea607</td>
  </tr>

  <tr>
    <td>POST</td>
    <td>Register new user</td>
    <td>https://onebeyond-hector.herokuapp.com/auth/register</td>
  </tr>

  <tr>
    <td>POST</td>
    <td>Login with an existin account. This response throw a JWT that will be necesary on <b>/api</b> routes </td>
    <td>https://onebeyond-hector.herokuapp.com/auth/login</td>
  </tr>

  <tr>
    <td>POST</td>
    <td>Save new phone data</td>
    <td>https://onebeyond-hector.herokuapp.com/api/createOne</td>
  </tr>

  <tr>
    <td>PATCH</td>
    <td>Update phone data</td>
    <td>https://onebeyondhector.herokuapp.com/api/update/6347f636ab3b54a6466ea607</td>
  </tr>

  <tr>
    <td>DELETE</td>
    <td>Remove a phone. <b>IMPORTANT: The DELETE method has been added to complete the CRUD requested in the Code Challenge. The phone object, has in its interior an ACTIVE property (true or false), that in a real use, would be the property that would be deactivated in case of deleting, in order not to lose the consistency of data in the DDBB.</b></td> 
    <td>https://onebeyond-hector.herokuapp.com/api/delete/63480560ab3b54a6466ea66a</td>
  </tr>
</table>

**IMPORTANT: Remember that requests /api needs 'auth-token' header. This JWT is generated on login inside app or if you are using Postman, inside Login request -> Test tab**

The MongoDB database has been used for data persistence.

## Héctor Carramiñana Ramos.
