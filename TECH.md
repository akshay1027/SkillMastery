Data modeling:
- I first had a tutor and a student model (30|10|21), while authenticating i had to get data from two different models.
sol: Decided to have a seperate model as a user (which is used for uniquely indetifying customers), and then either they can be tutor and/or students!

Seperate tutor and student data model:

advantages:
1) Easily get tutors, sort them as well.
2) This will help while scalling. 
    Eg: When a user creates an account, we segregate data at point of creation itself. So when we need all tutors we dont have to do seperate logic on all the users to get tutors alone..!

disadvantages: 
1) Have 3 documents(tutors, students, users)
2) If a user wants to change from student -> tutor, it would be difficult.
3) 
