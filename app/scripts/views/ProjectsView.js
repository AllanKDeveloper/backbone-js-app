define([
  "jquery",
  "underscore",
  "backbone",
  "models/ProjectModel",
  "collections/ProjectsCollection",
  "views/ProjectsListView",
  "text!templates/projectsTemplate.html",
], function (
  $,
  _,
  Backbone,
  ProjectModel,
  ProjectsCollection,
  ProjectsListView,
  projectsTemplate
) {
  var ProjectsView = Backbone.View.extend({
    el: $("#page"),

    events: {
      "change input.content": "addProjectToList",
      "click a.delete": "remove",
    },

    addProjectToList: function (e) {
      var newProject = new ProjectModel({
        title: e.target.value,
        url: "#",
      });

      this._itemViews = [...this.projectsCollection.toJSON(), newProject];

      this.projectsCollection = new ProjectsCollection(this._itemViews);
      var projectsListView = new ProjectsListView({
        collection: this.projectsCollection,
      });

      projectsListView.render();
    },

    remove: function (evt) {
      var project = this.projectsCollection.where({ title: evt.target.id });
      this.projectsCollection.remove(project);

      var projectsListView = new ProjectsListView({
        collection: this.projectsCollection,
      });

      projectsListView.render();
    },

    render: function () {
      this.$el.html(projectsTemplate);

      var project0 = new ProjectModel({
        title: "Promob Plus",
        url: "https://www.promob.com/conheca-o-promob-plus",
      });
      var project1 = new ProjectModel({
        title: "Promob Maker",
        url: "https://www.promob.com/promob-maker",
      });
      var project2 = new ProjectModel({
        title: "Promob ERP",
        url: "https://www.promob.com/promob-erp",
      });
      var project3 = new ProjectModel({
        title: "2020 Manager",
        url: "https://www.promob.com/2020-manager",
      });
      var project4 = new ProjectModel({
        title: "Mooble.com",
        url: "https://www.promob.com/mooble",
      });

      this._itemViews = [project0, project1, project2, project3, project4];

      this.projectsCollection = new ProjectsCollection(this._itemViews);
      var projectsListView = new ProjectsListView({
        collection: this.projectsCollection,
      });

      projectsListView.render();
    },
  });

  return ProjectsView;
});
