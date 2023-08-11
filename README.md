# Assignment Week 8

## INTRODUCTION

This week (week 8), the assignment is to make a simple REST API Server about financial tracking so that users can input data and get the list.

## TOOLS

I built this Server App using Node.js, TypeScript, and Express. After making the Server App, I deployed it using Render.
Node.js: to execute JavaScript files.
TypeScript: where to write your code. To compile the TypeScript files into JavaScript files, use the TypeScript compiler (`tsc`).
Express: framework for Node.js and tools that make easier to build web applications and API.

## DESCRIPTION

The description of the list:
1. Id: To identify and manage the data from your input.
2. Type (Expense and Income): To easily list and categorize your expenses and income.
3. Name: To Input the name of the expense or income.
4. Amount: To specify the amount of the expense or income.
5. Date: Keep track of when each expense or income occurred by adding the date for every entry. 
6. Details: To add additional details or notes to each entry.

## DEPLOY

I deploy the Server App using [Render.com](https://render.com).

### Deployment Steps

1. Go to [Render.com](https://render.com)
   
   ![Render](https://github.com/RevoU-FSSE-2/week-8-EOA03/blob/main/documentation/1.png)

2. Sign up for Render. You can sign up using Github, GitLab, Google, or your email.
   
   ![Sign up](https://github.com/RevoU-FSSE-2/week-8-EOA03/blob/main/documentation/2.png)

3. After you sign up, the display will look like photo below. To deploy your Server App, click the "New Web Service".
   
   ![Display](https://github.com/RevoU-FSSE-2/week-8-EOA03/blob/main/documentation/3.png)

4. If you sign up using Github, it will display your Github repository. Click "Connect" to the repository that you want to deploy.
   
   ![Connect](https://github.com/RevoU-FSSE-2/week-8-EOA03/blob/main/documentation/4.png)

5. Type the name for your web service.
   
   ![Name](https://github.com/RevoU-FSSE-2/week-8-EOA03/blob/main/documentation/5.png)

   For the "Start Command", type the root directory of your JavaScript app file.
   ![Start Command](https://github.com/RevoU-FSSE-2/week-8-EOA03/blob/main/documentation/6.png)

6. Choose the type of web service that you want.
   
   ![Type](https://github.com/RevoU-FSSE-2/week-8-EOA03/blob/main/documentation/7.png)

   Then, click "Create Web Service".

7. You can wait until it is done deploying.
   
   ![Deploying](https://github.com/RevoU-FSSE-2/week-8-EOA03/blob/main/documentation/8.png)

   After the deployment is done, it will display "Your service is live".

   ![Done deploy](https://github.com/RevoU-FSSE-2/week-8-EOA03/blob/main/documentation/9.png)

And you can already run it.

## HTTP REQUEST METHODS

Some of HTTP request method that I apllied:
- GET /transactions : return list of all posts.
- GET /transactions/:id : return a specific post using given ID.
- POST /transactions : create a new post.
- PUT /transactions/:id : update all data of an existing post with given ID.
- PATCH /transactions/:id : update partially data of an existing post with given ID.
- DELETE /transactions/:id : delete an existing post with given ID.

## SNEAKPEEK AND LINK

This is a sneakpeek from Postman.

![Sneakpeek](https://github.com/RevoU-FSSE-2/week-8-EOA03/blob/main/documentation/10.png)

And this is the [link](https://week-8-eoa03.onrender.com/transactions).

![Thankyou](https://contenthub-static.grammarly.com/blog/wp-content/uploads/2019/02/bmd-4584.png)