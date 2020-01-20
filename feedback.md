# Checklist for Northcoders News Front End

## UX

- [x] Basic styling added
- [x] Responsive design
- [x] Items aligned
- [x] Content legible (not too wide, obstructed, etc)
- [x] Refreshing doesn’t cause an issue on sub-pages
- [ ] No errors in the console
- [x] Votes / Posts / Deletions happen instantly _OR_ give user indication of loading
- [ ] Make sure you change the articles on the main articles page from bullet points, same with the comments

## Functionality

### Login

- [x] Some indication of who is logged in

### Articles
- [x] Serves all articles / top articles
- [x] Can vote on articles
- [ ] Can vote a maximum of once in either direction per page load
- [x] Votes are persistent when page is refreshed
- [x] Topic pages load only relevant articles (especially when navigating from one topic page to another)
- [x] Can sort articles by date created / comment_count / votes

### Individual Article / Comments
- [x] Individual articles are served with comments
- [x] Can vote on comments 
- [ ] Can vote a maximum of once in either direction per page load
- [x] Votes are persistent when page is refreshed
- [ ] Can post new comments, which are persistent --> this works but pay attention to the error you are getting in the console here
- [x] Can only delete comments of logged in user
- [x] Deleted comments don’t re-appear on re-render/refresh

## Error Handling

- [x] Bad url
- [ ] Bad topic slug in url --> so it works, but after the error appears, its then not possible to go back to articles when you click ont the articles button. It only works after you refresh the page.. have a look at why that is
- [x] Bad article id in url
- [ ] Post comment: (No text in comment body / Can you post without logging in?) --> have some sort of indication that you can only post a comment when you've written something

## Code
- [x] Well named components
- [ ] The only funtions that don't need to be arrow functions are the React lifecycle methods `componentDidMount` and `componentDidUpdate`. Every function you make should use arrow function syntax so that you don't have to **bind** this to that function. This will likely get rid of many of the errors you're getting in in the console
- [ ] Functional components used where possible
- [x] `node_modules` git ignored
- [ ] remove unnecessary files (e.g. App.test.js)
- [ ] Components reused where possible (`Articles` / `Voter`...)
- [x] Functions are DRY (`handleChange` for controlled components / api calls)
- [ ] Use object destructuring where possible
- [ ] No `console.log`s / comments
- [x] Tidy? If not: ESLint / Prettier

## Components
- [ ] Do `ArticleBallotBox` and `LogInPage` need to be class components?

### Articles
- [ ] `sortByVotes`, `sortByDate`, `sortByComment` you should be making a request to your backEnd and passing it a querey of the option to sortBy rather than using the `.sort()` array method

### SingleArticle
- [ ] move your axios requests to `api.js`
- [ ] You can set multiple keys in state in one `this.setState()` so you don't have to do it multiple times in the same `.then()` block
- [ ] `handleDelete` you should not be directly mutating state with a `splice()` method. If state is has changed, (in this case because you have deleted a comment) then you need to completely replace state. What method can you think of that returns a new array based on a condition?
- [ ] `ArticleVoteChange` and `CommentVoteChange` are doing almost the exact same thing? Can you think of a way to make this reusable? Maybe by making it its own componenet?


## MAKE SURE ALL TESTS ARE STILL PASSING IN BACK END

# To do --> at the end

## README - write your own and make sure that it:
- [ ] has a link to the deployed version
- [ ] provides general info about your app
- [ ] includes links to your back end repo
- [ ] specifies the minimum version of Node required to run locally (check your Node version, `node --version` and use the major version that you are on)
- [ ] has clear instructions on how to run your project locally (`git clone <repo-url>, cd ...`)