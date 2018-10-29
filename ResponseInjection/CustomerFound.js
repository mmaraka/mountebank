function GetTemplateResponse (request, state, logger) {
 
response = "<%- stringify(filename, 'ResponseInjection//StubTemplate//CustomerView.xml') %>";
<!-- var ext =require('../../../StubResponse/ResponseInjection/extractrequest');-->
 
<!--var reqdata = ext.extractor(request); -->

var DOMParser = require('xmldom').DOMParser; 
var results = new XmlDocument(request);
var customers = results.childNamed("customers");
logger.info(customers);

 return {
 statusCode : 200,
 headers: {
 'Content-Type': 'application/xml; charset=utf-8'
 },
 body: response
 
 };
}
