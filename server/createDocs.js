const generateHtmlFromYaml = require("swagger-yaml-to-html");

// Provide input YAML file path and output HTML file path
const inputFilePath = "./spec.yaml";
const outputFilePath = "./output.html";

// Convert YAML to HTML
generateHtmlFromYaml(inputFilePath, outputFilePath);
