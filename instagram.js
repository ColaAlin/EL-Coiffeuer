let userFeed = new Instafeed({
  get: "user",
  userId: "el_coiffeure_cosmetics",
  target: "instafeed-container",
  resolution: "low_resolution",
  accessToken: "",
  limit: 12,
  template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>',
});
userFeed.run("hallo");
