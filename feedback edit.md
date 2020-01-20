# Checklist for Northcoders News Front End

## Functionality

### Articles

* You need a componentDidUpdate to fetch articles when the props change (i.e. going from a bad topic error to all articles)

--- DONE

### Individual Article / Comments

* You should limit your votes to one in either direction.

--- working but looks gross once voted

## Error Handling

* Tell the user they can't post an empty comment when they try

--- works but looks gross

## Code

* move the stylesheet links to the `head` in your index.html
--- DONE

* the BallotBoxes are almost identical for comments and articles. This is a perfect opportunity to practise **r E u S a B i L i T y**
----- DONE

* Same as above for Articles and ArticlesByTopic (I think you've already done this tbf. Delete the obsolete component)
--- DONE

* remove console.logs
--- DONE

* *Articles.js:* sorting should be handled by your API, not `.sort`
--- DONE

* Sorting functionality could be extracted into its own component to keep `Articles` light.
--- has become a smaller/non issue after sorting via api?

* remove commented out code
--- DONE

*  Extract comments functionality to its own component.
--- 

* *SingleArticle.js:* `handleDelete` is a little convoluted. Try and slim it down.
--- 

* *SingleArticle.js:* `CommentVoteChange` could also be made nicer. Direction is already a number we can do maths with.
--- made this cleaner for articleVoteChange but it's messed up the render.....

* Methods should be camelCase. Only components are capitalised.
--- DONE

* no to`<br/>`s!!! CSS instead
--- 

* remove unnecessary files
--- 

## MAKE SURE ALL TESTS ARE STILL PASSING IN BACK END

## Once everything else is complete, here are some extra challenges:

- [ ] Use `aXe` extension to check for a11y issues
- [ ] Make sure any pure functions are extracted and tested with `Jest`
- [ ] Add integration tests with `cypress`
- [ ] Use Context API for sharing logged in user amongst components