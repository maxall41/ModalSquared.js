# ModalSquared.js
[![HitCount](http://hits.dwyl.com/maxall4/ModalSquaredjs.svg)](http://hits.dwyl.com/maxall4/ModalSquaredjs)
![](portfolio.gif)
### Easy, Fast and simple modals.
ModalSquared.js is a super small library for showing and hiding modals. It was specificly designed to show and hide bootstrap modals so i didnt have to use jquery and bootstrap's javascript but you can use it for anything. It's also less than 1kb!
## Setup
#### 1. Run npm install modalsquared
#### 2. Add ```<script src="node_modules/modalsquared/ModalSquared.js"></script>``` and ```<link href="node_modules/modalsquared/ModalSquared.css" rel="stylesheet" type="text/css">``` to the head tag.
#### 3. That's it you can now use ModalSquared
## Documentation
#### Note: every modal has to have the modal class!
### Example
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ModalSquaredTest</title>
    <script src="ModalSquared.js"></script>
    <link rel="stylesheet" type="text/css" href="ModalSquared.css">
</head>
<body>
    <button onclick="ShowModal('myModal')">Click Me!</button>
    <div class="modal" id="myModal">
        <h1>This is my modal</h1>
        <a onclick="HideModal('myModal')" style="font-size:32px;">&times</a>
    </div>
</body>
</html>
```
### ModalShow
ModalShow shows a modal. it takes the id of the modal you want to show.
### ModalHide
ModalHide hides a modal. it takes the id of the modal you want to hide. Or use data-modal-hide on the button that you want to close the modal. data-modal-hide does not take any values.
