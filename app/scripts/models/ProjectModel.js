define(["underscore", "backbone"], function (_, Backbone) {
  var ProjectModel = Backbone.Model.extend({
    // Default attributes
    defaults: function () {
      return {
        title: "empty",
        url: "empty",
      };
    },
  });

  return ProjectModel;
});
