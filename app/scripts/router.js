// Filename: router.js
define(["jquery", "underscore", "backbone", "views/ProjectsView"], function (
  $,
  _,
  Backbone,
  ProjectsView
) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Default
      "*actions": "home",
    },
  });

  var initialize = function () {
    var app_router = new AppRouter();

    app_router.on("route:home", function (actions) {
      // We have no matching route, lets display the home page
      var projectsView = new ProjectsView();
      projectsView.render();
    });

    Backbone.history.start();
  };
  return {
    initialize: initialize,
  };
});
