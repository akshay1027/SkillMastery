- Data modeling:
    I first had a tutor and a student model (30|10|21), while authenticating i had to get data from two different models.
    sol: Decided to have a seperate model as a user (which is used for uniquely indetifying customers), and then either they can be tutor and/or students!

- Seperate tutor and student data model:

    advantages:
    1) Easily get tutors, sort them as well.
    2) This will help while scalling. 
        Eg: When a user creates an account, we segregate data at point of creation itself. So when we need all tutors we dont have to do seperate logic on all the users to get tutors alone..!

    disadvantages: 
    1) Have 3 documents(tutors, students, users)
    2) If a user wants to change from student -> tutor, it would be difficult.
    3) 

- Did you notice that your tutor and student data model is almost similar to each other. 
    I feel after further thinking, i dont need two seperate data models. 
    If a Students wants to teach, let him/her teach and only few extra data fields are needed.
    I think i can generalise tutors and students into one!

- Aggregation implies a relationship where the child can exist independently of the parent. Example: Class (parent) and Student (child). Delete the Class and the Students still exist.

- Composition implies a relationship where the child cannot exist independent of the parent. Example: House (parent) and Room (child). Rooms don't exist separate to a House.

Aggregation = use referenced schema, Composition = use embedded schema

- What if tutor makes a review on anther tutor? 
    problem/bug: The review will be saved in the tutor s 'review field'. But am taking all the reviews from the 'review field' which implies the response will also contain the reviews made by the tutor along witb the reviews made by users for the tutor.

    solution: Have two seperate fields in your document, one for reviews given by the users and one for users given by the tutor.


FRONTEND:

- If a component is taking seven different props, that might be a sign that it’s doing too much. 

- Avoid large render methods.

- when state changes, the whole functional component is re-rendered. Try hooks like useCallBack, useMemo, useEffect to optimse re-renders.