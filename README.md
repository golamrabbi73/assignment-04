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


### 3. What is Event Bubbling? And how does it work?
Answer:
    Event Bubbling is a process in which a event trigger on a target element and then moves up to its parent and so on up to the document. It works like a water bubble that rising from the bottom to the top.

    Example:

    <div id="outer">
        <div id="inner">
            <button id="btn">Click Me</button>
        </div>
    </div>

    when button is clicked event start target element like button then up to inner div -> outer div -> document. It's called bubbling


### 4. What is Event Delegation in JavaScript? Why is it useful?
Answer:
    Event Delegation is a technique where only one event listener attached with parent element instead of each child element and this listener used to handle all child element events. It works through the Event Bubbling.

    1. Need one listener on parent instead of many listeners on child.
    2. It provide better performance.
    3. It also useful for dynamic child elements.
    4. It works with different events like click, mouseover, keydown, input etc.
    5. Cleaner code.


### 5. What is the difference between preventDefault() and stopPropagation() methods?
Answer:
    preventDefault():
        1. It prevent default behavior of browser.
        2. Examples: It used to prevent normaly link open, form submit.

    stopPropagation():
        1. It prevent the event bubbling from child to parent element.
        2. Example: It used to prevent triggring of parent element listener.