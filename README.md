# Your Mama Joke API 
Your mama joke api - Second API Project for fun - version 0.1

Will improve on this API as my skills get better

# Routers
Base URL: https://standapps.services/api/v1/ymja/ 

Post:
 - /account/register - Add an account to the api
 - /account/login - Login into the api neccessary in order to post jokes or reviews

### Example
```
{
	"email":"email@address.com",
	"password":"pw"
}
```
 - /joke/add - Add new joke to the api (Authenticate required)
 
### Example
 ```
 {
	"name":"name",
	"joketype":"joketype",
	"setup":"setup",
	"punchline":"punchline",
	"actone":"actone",
	"themix":"themix",
	"callback":"callback"
}
 ```
 - /joke/review/add/:id - Add review to a specific joke (Authenticate required)
 
### Example
 ```
 {
	"title":"first review",
	"text":"fun but nothing great"
}
 ```
Delete:
 - /joke/:id - Delete the specific joke (Authenticate required)

Put:
 - /joke/:id - Updates the specific joke (Authenticate required)
 
Gets:
 - /account/logout - Logout user (Authenticate required)
 - /account/me - Retrieves user information (Authenticate required)
 - /joke/ - Retrieves all jokes currently in the db
 - /joke/:id - Retrieve specific joke information for a specific joke id
 - /joke/reviews/:id - Retrieve specific review for a specific joke id
 - /joke/joketype/:joketype - Retrieves all joke for this joketype
 - /joke/setup/:setup - Retrieves all jokes for this setup
 - /joke/punchline/:punchline - Retrieves all jokes for this punchline
 - /joke/actone/:actone - Retrieves all jokes for this act one
 - /joke/themix/:themix - Retrieves all jokes for this the mix
 - /joke/callback/:callback - Retrieves all jokes for this call back

BSD 3-Clause License

Copyright (c) 2017, Standley Eugene
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the name of the copyright holder nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
