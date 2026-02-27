### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer: i. getElementById is used to select only one HTML element which is define by uniqe id.

        ii. getElementsByClassName is used to select all elements which are define by specific class name.

        iii. querySelector is used to select only the first matching element from the document using specific CSS selectors like class, id etc. even if multiple elements have same CSS selector name.

        iv. querySelectorAll() is used to select all matching element using CSS selectors.


### 2. How do you create and insert a new element into the DOM?
Answer: 
    step-1: At first creat a new element using 'document.createElement(tagName)'. tagName is the type of element which is neede like div, p button etc. in script file.

    step-2: Add HTML content using 'tagName.innerHTML =  ;' in script file.

    step-3: Use appendChild to insert the new created element into the DOM.
        i. create empty HTML element like '<div id = "new-element-container-id-name"></div>' in HTML file.
        ii. get empty HTML element by 'getElementByID("new-element-container-id-name")' define it by a variable in script file .
        iii. add 'variableName.appendChild(new created element variable name);' at the end of a new created element in script file.
