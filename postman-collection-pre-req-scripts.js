/*
 * NOTES: 
 * This is designed to be used as a pre request script to a postman collection.
 * It will give the flexibility to have different environments for the host, allowing you to switch easily between local development, and a deployed version,
 * This could then be used to specify a different environment configuration for your CICD pipeline for example.
*/

// Using variables, get the port (collection level variable) and host (environment level variable)
var host = pm.environment.get("host");
var port = pm.variables.get("port");

var url = host.includes("localhost") ? `${host}:${port}` : `${host}`;

// Set the end result as a global variable of URL
pm.globals.set("url", url);

