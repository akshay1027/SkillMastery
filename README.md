# API DOCS
**1. Authentication service**
* **1. URL**
    `/api/v1/auth/login`

* **METHOD**
    `POST`

* **Required Filed**
    * **Auth Need : False**
    * **Admin Auth Need : False**

* **2. URL**
    `/api/v1/auth/register`

* **METHOD**
    `POST`

* **Required Filed**
    * **Auth Need : False**
    * **Admin Auth Need : False**

* **3. URL**
    `/api/v1/auth/password`

* **METHOD**
    `POST`

`**NOTE**: in the headers you have to pass authorize token and you can get token by signin API `

* **Required Filed**
    * **Auth Need : True**
    * **Admin Auth Need : False**



Backend :
- [x] folder setup
- [x] global error handling, middleware
- [x] sign in, sign up service
- [x] token service, no refresh token yet


Frontend :


Models:

Teacher: name  
         username  
         email  
         phone number  
         profile uploads  
         password  
         skills  
         about  
         reviews  
         address  
         remote/online  
         targeted audience  
         experience in teaching  
         fee  
  
Student: name  
         username  
         email  
         phone number  
         profile uploads  
         password  
         skills/intrests  
         about  
         reviews  
  
Features: Login   
          Signup : 1) teacher 2) student  
          Signup with google : is it needed ?  
          A page to fill in details  
          A page to change password  
          Mailing feature ( Learning Opportunity )  
          Profile page : 1) details, 2) Starred Teachers, 3) Reviews/Feedback  
          Scheduling a demo page with mail feature  
          Fee with dropdown box : 1) per hour, 2) per month, 3) per session  
          Inbuilt Demo using video meet ( Extra feature, Learning Opportunity )  
          Show all teachers  
          Every Users ( teachers + students ) profile page with /username; username has to be unique.  
          Star a Teacher  
          payment gateway ( Extra feature )  
          Categories : Live event, Workshops, recorded ( Extra Feature )  
          Filters: remote/online  
                   local/offline  
                   skill,intrest based  
                   reviews based  
                   experience based  
                   targerted audience  
  
SaaS Website Names: Upskill   
                    skillMastery  
                    teachX  

Unique Value proposition?
    1) The whole point of this website it to promote offline, one on one, live classes on a particular skill. Recorded classes are great, but nothing can beat live classes. 
    2) To increase credibility of Tutors who want to take live classes.
    3) To increase oppotunity of learners to learn skills from
       - the best tutor in their locality (or) to learn from the best in online mdoe via one on one classes.
       -  

Number of views per tutor and/or user page!

Ability for user and tutor to exchange messages or request demo!


USP = Promote cohort based learning


Challenges while developing:

1) Revamped skills model from array to a map data structure as insertion and deletion time is O(1) and order of elements doesnot matter as much.
2) Seperating out code into different sections to follow modular approach.
3) Building custome global error handling middleware.
4) 








