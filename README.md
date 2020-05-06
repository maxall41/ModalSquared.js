# ModalSquared.js
[![HitCount](http://hits.dwyl.com/maxall4/ModalSquaredjs.svg)](http://hits.dwyl.com/maxall4/ModalSquaredjs)
![](https://img.shields.io/npm/dw/modalsquared)
![](https://img.shields.io/github/size/maxall41/ModalSquared.js/ModalSquared.js)
![](portfolio.gif)
### Easy, Fast and simple modals.
ModalSquared.js is a super small library for showing and hiding modals. It was specificly designed to show and hide bootstrap modals so i didnt have to use jquery and bootstrap's javascript but you can use it for anything. It's also less than 1kb!
## Setup
#### 1. Run ```npm install modalsquared```
#### 2. Add ```<script src="node_modules/modalsquared/ModalSquared.js"></script>``` and ```<link href="node_modules/modalsquared/ModalSquared.css" rel="stylesheet" type="text/css">``` to the head tag.
#### 3. That's it you can now use ModalSquared
## Documentation
#### Note: every modal has to have the modal class!
#### Note: You must put the content of your page in a div with the class of content. Do not put modals inside the content div.
### Example
```
<!DOCTYPE html>
<html lang="en">
<head>
    <script src="node_modules/modalsquared/ModalSquared.js"></script>
    <link href="node_modules/modalsquared/ModalSquared.css" rel="stylesheet" type="text/css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="content">
        <button onclick="ShowModal('myModal')" >open modal</button>
        <h1>Content goes here</h1>
        <h2>Hello, World!</h2>
    </div>
    <div id="myModal" class="modal"><h1>My modal 1</h1><button data-modal-close >&times</button></div>
</body>
</html>
```

### ModalShow
ModalShow shows a modal. it takes the id of the modal you want to show.
### ModalHide
ModalHide hides a modal. it takes the id of the modal you want to hide. Or use data-modal-hide on the button that you want to close the modal. data-modal-hide does not take any values.
## Changelog
v1.1.1
+ added blur effect
+ you now have to put the content of your page in a div with the class of .content
+ updated README
