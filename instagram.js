let userFeed = new Instafeed({
  get: "user",
  userId: "el_coiffeure_cosmetics",
  target: "instafeed-container",
  resolution: "low_resolution",
  accessToken:
    "IGQVJWREN3TlhhNHJIMVctcFlfR1RrVlUxQnZACLUIyWl9fRlkyYkExMnlOT1BvT3g5WlFOWkY0UEZAFVkxIRVUwYlZAKVjBxQkhOdXR6US1PNzlGbXBoYk95M1JpNTJNQzJpWVNHVm05TmlIN3B4ZAzFrdQZDZD",
  limit: 12,
  template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>',
});
userFeed.run("hallo");
