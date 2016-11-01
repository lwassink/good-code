```js
{
  currentUser: {
    id: 1,
    username: "bob"
  },
  errors: ["Invalid login" ],
  programs: {
    1: {
      id: 1,
      name: "Rails",
      creator: "David Heinsmeier Hansson",
      sourceCodeUrl: "https://github.com/rails/rails",
      imageUrl: "https://pbs.twimg.com/profile_images/691206086955790336/CDMbA57p.png",
      description: "A web app framework",
      status: "want to use",
      author_id: 1
    }
  }
  reviews: { // Only store reviews for the program being shown
    1: {
      id: 1,
      body: "Rails is nice",
      usedFor: "A cool project",
      authorId: "2",
      status: "have used"
    }
  }
}
```
