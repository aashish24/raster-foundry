import angular from 'angular';
import AnnotateController from './annotate.controller.js';

const AnnotateModule = angular.module('pages.projects.edit.annotate', []);

AnnotateModule.controller(
    'AnnotateController', AnnotateController
);

export default AnnotateModule;
