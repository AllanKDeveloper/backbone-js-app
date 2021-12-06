define([
  "jquery",
  "underscore",
  "backbone",
  "text!templates/projectsListTemplate.html",
], function ($, _, Backbone, projectsListTemplate) {
  var ProjectListView = Backbone.View.extend({
    el: $("#projects-list"),

    render: function () {
      var data = {
        projects: this.collection.models,
        _: _,
      };

      var compiledTemplate = _.template(projectsListTemplate, data);
      $("#projects-list").html(compiledTemplate);
    },
  });
  return ProjectListView;
});
