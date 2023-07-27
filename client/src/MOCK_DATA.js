export const Data = [
  {
    "question": "Internet",
    "answer": [" Global system of interconnected computer networks that uses the Internet protocol suite (TCP/IP) to communicate between networks and devices."],
    "path": ["", ""]
  },
  {
    "question": "WWW",
    "answer": [" Information system enabling information to be shared over the Internet."],
    "path": ["", ""]
  },
  {
    "question": "JavaScript",
    "answer": [" Programming language that is one of the core technologies of the World Wide Web."],
    "path": ["", ""]
  },
  {
    "question": "Values",
    "answer": ["Values represent task we want to accomplish.", "Values have an behavior associated with them."],
    "path": ["Number - 42, 3.14", "String - 'Hey, dude'", "Boolean - true/false", "Array [ 1, 2, 3]", " Object { name: 'Gospodinov', country: 'Bulgaria'} "]
  },
  {
    "question": "Operations",
    "answer": [" Operation is what we do with our values."],
    "path": [" Operator is a special symbol used to perform operations on operands(unary, bynary, ternary).", "Operations in JavaScript.", "----------------------------","  arithmetic operations (+, -, *, /, **, %)", "  logical operations (&&, ||, !)", "  bitwise operations (|, ^, ~, <<, >>)", "  comparison operations (==, ===, !=, <, >, <=, >=)", "  assignment operations (=)"]
  },
  {
    "question": "Types",
    "answer": ["Type is referring with kind of the value."],
    "path": ["DATA TYPES IN JS", "Variables do not have types, values do.", "----------------------------","typeof \"Bulgaria\" // \"string\"", 
  "typeof true // \"boolean\"", "typeof undefined // \"undefined\"", "typeof { country: \"Bulgaria\" } // \"object\"",
"typeof null // \"object\"", "typeof [ 1, 2, 3 ] // \"object\""]
  },
  {
    "question": "Variables",
    "answer": [" Variable is a representation in some place in memory where we store data."],
    "path": ["var name = \"Gospodinov\";", "// alocate and assign value", "// name will point to some place in memory where OS store value \"Gospodinov\"",
    "----------------------------","var country;", "// alocate (create empty place in memory with name country)", "// assign empty value (\"undefined\")", 
"country = \"Bulgaria\";", "// assign with string \"Bulgaria\"",
"----------------------------","var bio = [ \"Gospodinov\", \"Bulgaria\" ];",
"console.log( bio[1] );", "// \"Bulgaria\"",
"----------------------------","some operators working only with variables", "var age = 10;", "age++;","age += 1;", "age; // 12" ]
  },
  {
    "question": "Statements Expressions",
    "answer": [" Statement is an entire thing finish with semicolon."," Expression is part of entire thing."],
    "path": ["var age; // statement", "var age = 33; // statement", "age = 1 + ( age - 1); // statement","const distance = 1 + ( 2 + 18 ); // statement", "----------------------------"," 1 // expression", " ( 2 + 18 ) // expression", " 1 + ( 2 + 18 ) // expression"]
  },
  {
    "question": "Conditions",
    "answer": [" Conditions refer to decision making. if statement is the primary way to make a decision."],
    "path": ["var age = 19;", "  var iAm = \"\";", "if ( age < 10 ) {", " iAm = \"kid\";", "} else if ( age >= 10 && age < 20 ) {",
  " iAm = \"teen\";", "} else {", " iAm = \"adult\";","}" ]
  },
  {
    "question": "Loops",
    "answer": [" When have set of operation to do multiple times comes Loops"],
    "path": ["for ( let i = 0; i < 10; i++ ) {", "// code block to be executed", "}","// init var before loop starts ( let i = 0 )", "// defines the condition for the loop to run ( i < 10 )", "// ( i++ ) each time the code block in the loop has been executed", "----------------------------","for ( let student of students ) {", "// code block to be executed", "}", "----------------------------","while ( condition ) {", "// code block to be executed", "}", "----------------------------","do {", "// code block to be executed", " }", "while ( condition )"]
  },
  {
    "question": "Functions",
    "answer": [" Function is a collection of statements which we want to do multiple time in multiple places."],
    "path": ["// procedure - do something, no return", "function greet ( student ) {", "console.log( student. name );", "}", "----------------------------","// method - get arg, give value back", "function add ( a, b ) {", " return a + b;", "}", "var resulr = add(3, 2);"]
  },
  {
    "question": "NaN",
    "answer": [ "NaN represents the result of an invalid math operation.", " NaN is invalid number." ],
    "path": ["var greeting = \"HTMLBodyElement, hi!\";", "var result = greeting / 2;", "result; // NaN", "Number.isNaM(result); // true - has a NaN value (number value)", "Number.isNaN(greeting); // false - (string value)"]
  },
  {
    "question": "new",
    "answer": [" Keyword 'new' create object wrapper around build in fundamental objects."],
    "path": ["", ""]
  },
  {
    "question": "Coersion",
    "answer": [" The way to convert from one type to another called Coersion", " JavaScript do it dynamically."],
    "path": ["----------------------------","// number to string (with string concatenation)", "let msg1 = \"They are\";", "let msg2 = \" basketball players.\";", "let num = 10;", "let fullMsg = msg1 + num + msg2;","----------------------------", "// number to string ( interpolation with + \" \")", "fullMsg = `They are ${num + \"\"} basketball players.`;", "----------------------------","// string to number", "// all from outside world come into js program as a string", "Number(studentInputElement.value);" ]
  },
  {
    "question": "Booleans",
    "answer": [" Biger concept called falsy and truthy."],
    "path": ["// When try to convert value in boolean result in true / false base on lookup.", "// Test clause automatically convert value into boolean.", "// JS falsy / truthy list.", "----------------------------","// Falsy values.", "// \"\", 0 and -0, NaN, false, undefined", "----------------------------","// Truthy values.", "// Everything else we try to convert into boolean we called truthy values.", "// \"string\", 23, { me: \"Georgi\" }, function(){}, etc."]
  },
  {
    "question": "Equality",
    "answer": [" Cheking equality with '==' and '==='", "When types same, both opearors do same job."],
    "path": ["// operator \"==\" checks value ( loose ) ", "// when values with different data types allows coersion", "3 == \"3\" // true", "----------------------------", "// operator \"===\" checks value and type ( strict )", "// when values with different types disallows coersion", "3 === \"3\" // false", "// Make data"]
  },
  {
    "question": "Scope",
    "answer": [" Rules for JavaScript engine when looks for identifiers."],
    "path": ["var teacher = \"Gospodinov\";", "----------------------------", "function msg() {", "teacher = \"Ozzy\";", "topic = \"JavaScript\";", "console.log(\"Hey, ...\");", "}", "----------------------------","msg(); // \"Hey, ...\"", "teacher; // \"Ozzy\" No definition for teacher in msg, so go outer scope and find teacher assign with \"Ozzy\".", "topic; // \"React\". No strict mode, JS create and assign variable in global scope."]
  },
  {
    "question": "Emptiness",
    "answer": [" State of Undeclared and Undefined"],
    "path": ["----------------------------","// State of Undeclared - variable never been ( JavaScript can't reference it ).", "// State of Undefined - variable been declared with no value ( JavaScript give it value of \"undefined\")."]
  },
  {
    "question": "Function expression",
    "answer": [" Function is a first class citizen in a language.", " Function Expression is a function that can be passed around."],
    "path": ["----------------------------","// Anonymous Function Expressions.", "var clickHandler = function(){};", "----------------------------","// Named Function Expressions.", "var keyHandler = function keyHandler(){}", "----------------------------","// Arrow functions.", "var ids = students.map(student => student.id);", "----------------------------","// Named functions.", "var ids = students.map(function getId(student){", " return student.id;","});"]
  },
  {
    "question": "IIFE",
    "answer": [" IIFE (Immediately Invoked Function Expression) make new block of scope."],
    "path": ["", ""]
  },
  {
    "question": "Block Scoping",
    "answer": [" Way to organise set of variables with own scope instead of IIFE."],
    "path": ["", ""]
  },
  {
    "question": "Closure",
    "answer": [" When a function 'remember' variables outside of it, even if we pass that function around."],
    "path": ["", ""]
  },
  {
    "question": "this",
    "answer": [" this: ..."],
    "path": ["", ""]
  },
  {
    "question": "Prototype system",
    "answer": [" Prototype is an object which all instances delegate to."],
    "path": ["", ""]
  },
  {
    "question": "Class",
    "answer": ["Layer on top of prototype system."],
    "path": ["", ""]
  }
]